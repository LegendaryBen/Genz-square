import { createContext,useState } from "react";

const User = createContext();

const Auth = ({children}) => {

    const [login,setLogin] = useState(true);
    const [details,setDetails] = useState({});


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
