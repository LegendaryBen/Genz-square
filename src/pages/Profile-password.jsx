import React, { useState } from 'react'
import Profile_headers from '../components/Profile-headers'
import Profile_inputs from '../components/Profile-inputs'
import Save_changes from '../components/Save-changes'
import Submit_btn from '../components/Submit-btn'
import Error from '../components/Error'
import Loader from '../components/Loader'
import axios from 'axios'







const Profile_image = () => {

    const[oldpass,setOldpass] = useState('');
    const[newPass,setNewpass] = useState('');



    const[errors,setErrors] = useState("-150%");
    const[errorstate,setErrorstate] = useState("#00C24E");
    const[load,setLoad]=useState(false);
    const[message,setMessage]=useState('');




    const upadtePassword = ()=>{

        
        if(oldpass == ''||newPass == ''){

            setErrorstate("#d30000");
            setMessage("Input fields should not be empty!");
            setErrors("0%");

            setTimeout(()=>{
                setErrors("-150%");
            },4000)


        }else{

            let token = JSON.parse(localStorage.getItem("gen-z"))||''

            if(token == ''){
                window.location.reload();
            }else{

                const formData = new FormData();
                formData.append('old_password', oldpass);
                formData.append('new_password', newPass);
                formData.append('confirm_new_password', newPass);
                
                setLoad(true);

                fetch(`https://gen-zsquare.com/api/change_password`, {
                    method: 'PATCH',
                    headers: {
                      'Authorization': `Bearer ${token.access}`,
                    },
                    body: formData,
                  })
                    .then(response => response.json())
                    .then(data => {

                        if(data.detail){

                            setLoad(false);
                            setErrors("0%");
                            setMessage("Password was changed successfully!")
                            setErrorstate("#00C24E");
                            setOldpass('');
                            setNewpass('');
    
                            setTimeout(() => {
                            
                                setErrors("-150%");
                                setMessage("")
                                setErrorstate("red");
    
    
                            }, 2000);

                        }else if(data.old_password){

                            setLoad(false);
                            setErrors("0%");
                            setMessage("Wrong Password!")
                            setErrorstate("red");
    
                            setTimeout(() => {
                            
                                setErrors("-150%");
                                setMessage("")
                                setErrorstate("red");
    
    
                            }, 2000);

                        }

                       
                      
                    })
                    .catch(error => {
                        
                        setLoad(false);

                        setErrors("0%");
                        setMessage("Network error!")
                        setErrorstate("red");

                        setTimeout(() => {
                            
                            setErrors("-150%");
                            setMessage("")
                            setErrorstate("red");

                        }, 4000);
                    

                    });



            }


        }


    }






    return (
        <>
            <Profile_headers span1='Password' span2='Manage password settings for your account'/>
            <Profile_inputs label='Current Password' placeholder='Enter your password' val={oldpass} change={setOldpass} />
            <Profile_inputs label='New Password' placeholder='Enter your password' val={newPass} change={setNewpass} />
            <Save_changes/>
            <Submit_btn text="Save Changes" click={upadtePassword}/>
            <Error color={errorstate} top={errors} message={message} click={setErrors}/>
            {load&&<Loader/>}
        </>
    )
}

export default Profile_image
