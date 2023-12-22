import { createContext,useState } from "react";

const User = createContext();

const Auth = ({children}) => {

    const [login,setLogin] = useState(false);
    const [details,setDetails] = useState({
        image:null
    });


    return (
        <div>
            <User.Provider value={{login,setLogin,details,setDetails}}>
                {children}
            </User.Provider>
        </div>
    )
}

export default Auth
export {User} 
