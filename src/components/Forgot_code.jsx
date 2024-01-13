import React,{useRef,useState} from 'react'

const Forgot_code = (props) => {

    const rel = useRef(null);
    const [val,setVal] = useState('')

    return (
        <div className='forgot-input-container'>
            <div className="password-reset">
                Password reset code
            </div>
            <div className="password-code">
                Enter the code sent to your email
            </div>
            <div className="code-div">
                <div className="cont">
                    <div className="div" onClick={()=>{
                        rel.current.focus()
                    }}>4</div>
                    <div className="div">1</div>
                    <div className="div">9</div>
                    <div className="div">7</div>
                    <div className="div">9</div>
                </div>
                <div className="cont-input"  value={val} onChange={(e)=>{
                    setVal(e.target.value)
                    console.log(val)
                    }}>
                    <input type="number" name="" id="" ref={rel} />
                </div>
            </div>
            <div className="forgot-submit">
                <input type="submit" value="Confirm"/>
            </div>
        </div>
    )
}

export default Forgot_code
