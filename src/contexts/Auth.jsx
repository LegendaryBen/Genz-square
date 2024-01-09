import { createContext,useState,useRef } from "react";

const User = createContext();

const Auth = ({children}) => {

    const [login,setLogin] = useState(false);
    const [details,setDetails] = useState({
        image:null
    });

    const[slideWidth,setSlideWidth] = useState(null);
    const parent = useRef(null);
    const[note,setNote] = useState(false);

    const moveSlide = (pos)=>{
        if(slideWidth == null ){
            return
        }else{
            
            if(pos == "front"){

                parent.current.scrollBy({
                    left:slideWidth+10,
                    behavior: 'smooth'
                });

            }else{

                parent.current.scrollBy({
                    left:-slideWidth-10,
                    behavior: 'smooth'
                });

            }

        }
    }


    return (
        <div>
            <User.Provider value={{login,setLogin,details,setDetails,slideWidth,setSlideWidth,parent,moveSlide,note,setNote}}>
                {children}
            </User.Provider>
        </div>
    )
}

export default Auth
export {User} 
