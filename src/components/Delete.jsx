import React,{useState} from 'react'
import Arrow from './Arrow'
import warn from '../images/delete-warn.svg'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'



const Delete = ({clean,errors,message,errorstate}) => {

    


    const removeAccount = ()=>{

        let token = JSON.parse(localStorage.getItem('gen-z'))||'';
        

        if(token == ''){
            window.location.reload();
        }else{
            let id = jwtDecode(token.refresh).user_id;

            axios.delete(`https://gen-zsquare.com/api/user/${id}`)
            .then(response => {

                clean(false)
                message("Account has been deleted");
                errors("0%");
                errorstate("#00C24E");
                

                setTimeout(()=>{
                    
                    localStorage.removeItem('gen-z');
                    window.location.reload();
                    

                },2000)

            })
            .catch(error => {
                if(error.message == 'Network Error'){
                    message("Network error");
                    errors("0%");
                    errorstate("red");

                    setTimeout(()=>{
                        errors("-150%");
                    },4000)

                }else{
                    localStorage.removeItem('gen-z');
                    window.location.reload();
                }
            });

        }

    }




    return (
        <div className='delete-pop'>
            <div className='delete-div'>
                <div className="delete-img">
                    <Arrow image={warn}/>
                </div>
                <div className="delete-text">
                    Delete Account
                </div>
                <div className="delete-info">
                    Are you sure you want to deactivtae your account? All of your data will be<br/><br/>
                    permanently removed from our servers forever. This action cannot be undone
                </div>
                <div className="delete-btns">
                    <div className="delete-red" onClick={removeAccount}>
                        Delete
                    </div>
                    <div className="delete-white" onClick={()=>clean(false)}>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delete
