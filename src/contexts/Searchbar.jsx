import React,{createContext,useState} from 'react'

const Search = createContext();

const Searchbar = ({children}) => {

    const[drop,setDrop] = useState(false);

    function up(){
        setDrop(false)
    }

    function down(){
        setDrop(true)
    }

    return (
       <Search.Provider value={{drop,up,down}}>
         {children}
       </Search.Provider> 
    )
}

export default Searchbar

export { Search }