import {useLayoutEffect,useContext} from 'react'
import { Ham } from '../contexts/Hambar';
import { Search } from '../contexts/Searchbar';

const useResetSlide = () => {

    const{slideIn} = useContext(Ham);
    const {up} = useContext(Search);


    useLayoutEffect(()=>{

        slideIn()
        up()

    },[])



    return (
        <div>
            
        </div>
    )
}

export default useResetSlide
