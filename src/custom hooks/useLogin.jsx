import {useLayoutEffect} from 'react'
import axios from 'axios';




const useLogin = (log) => {

    useLayoutEffect(()=>{

        const genz = localStorage.getItem("gen-z")||"";

        if(genz == ""){

            log(false)

        }else{

            axios.post("https://gen-zsquare.com/api/token/refresh/",{refresh:genz}).then(res=>{

                log(true)

            }).catch(err=>{

                console.log(err)

                if(err.message !== 'Request failed with status code 401'  ||err.message !== 'Request failed with status code 403' ){
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
