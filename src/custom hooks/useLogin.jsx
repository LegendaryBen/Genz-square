import {useLayoutEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const useLogin = (log) => {


    const navigate = useNavigate();

    useLayoutEffect(()=>{

        const genz = JSON.parse(localStorage.getItem("gen-z"))?.refresh||"";

        if(genz == ""){
            
            return

        }else{

            axios.post("https://gen-zsquare.com/api/token/refresh/",{refresh:genz}).then(res=>{

                localStorage.setItem("gen-z",JSON.stringify(res.data));

            }).catch(err=>{

                if(err.message == "Network Error" ){
                    return
                }else{
                    localStorage.removeItem("gen-z");
                    window.location.reload()
                }
                
            })

        }


    },[])


}

export default useLogin
