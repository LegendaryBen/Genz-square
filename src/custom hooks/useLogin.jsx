import {useLayoutEffect} from 'react'
import axios from 'axios';




const useLogin = (log) => {

    useLayoutEffect(()=>{

        const genz = localStorage.getItem('gen-z') || '';

        if(genz == ""){

            log(false)

        }else{

            axios.post("https://gen-zsquare.com/api/token/refresh/",{refresh:genz}).then(res=>{

                log(true)

            }).catch(err=>{

                if(err.message == 'Network Error'){
                    return
                }else{
                    localStorage.removeItem("gen-z");
                    log(false)
                }
                
            })

        }


    },[])


}

export default useLogin
