import React from 'react'

const Pagination = ({total,perpage, update, trace}) => {

    const pages = [];

    let end =  Math.ceil(total.length/perpage);

    for(let i = 1;i <= end ;i++){
        pages.push(i);
    }


    const prev = ()=>{
        if(trace > 1){
            update(trace - 1);
        }
    }

    const next = ()=>{
        if(trace < end ){
            update(trace + 1);
        }
    }


    return (
        <div className='pagination'>
            <div className="previous" onClick={prev}>
                prevoius
            </div>
            <div className="numbers">
                
                {
                    pages.map((item,i)=>{
                        return (
                            <div className="previous colored" key={i} onClick={()=>{update(item)}}>{item}</div>
                        )
                    })
                }
            </div>
            <div className="previous" onClick={next}>
                next
            </div>
        </div>
    )
}

export default Pagination
