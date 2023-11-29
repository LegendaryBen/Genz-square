import { createContext,useState } from "react";

const User = createContext();

const Auth = ({children}) => {

    const [login,setLogin] = useState(true);


    return (
        <div>
            <User.Provider value={{login,setLogin}}>
                {children}
            </User.Provider>
        </div>
    )
}

export default Auth
export {User} 
