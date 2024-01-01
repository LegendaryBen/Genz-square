import React,{useEffect} from 'react'



const Message = ({data}) => {

    let months =['Jan','Feb','Mar','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
    let date = new Date(data.date_added.split('.')[0])

    let finaldate = `${months[date.getMonth()]}  ${date.getDate()},  ${date.getFullYear()}`;

    return (
        <div className='box box-message'>
            <div className='box-text'>
                <span>{data.category}</span>
            </div>
            <div className='box-header'>
                {data.title.length > 120 ? data.title.slice(0,120)+'...' : data.title}
            </div>
            <div className='box-hint'>
                {data.intro.length > 130 ? data.intro.slice(0,130)+'...' : data.intro}
            </div>
            <div className='news-writer'>
                {data.storyBy}
            </div>
            <div className='news-date'>
                {finaldate}
            </div>
        </div>
    )
}

export default Message
