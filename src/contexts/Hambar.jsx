import React,{createContext,useState} from 'react'

const Ham = createContext();

const Hambar = ({children}) => {

    const [slide,setSlide] = useState(false);

    function slideIn(){
        setSlide(false);
       
    }
 
    function slideOut(){
        setSlide(true);
    }


    return (
        <Ham.Provider value={{slide,slideOut,slideIn}}>
            {children}
        </Ham.Provider>
    )
}

export default Hambar

export {Ham}
