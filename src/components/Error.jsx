

const Error = ({color,top,message,click}) => {
    return (
        <div className="error-notice" style={{backgroundColor:color,top}}>
            <div>{message}</div>
            <span className="material-symbols-outlined" onClick={()=>{click("-150%")}}>close</span>
        </div>
    )
}

export default Error
