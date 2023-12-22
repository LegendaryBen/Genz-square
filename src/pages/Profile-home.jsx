import {useState,useContext,useLayoutEffect} from 'react'
import Profile_headers from '../components/Profile-headers'
import Profile_img from '../components/Profile-img'
import Profile_inputs from '../components/Profile-inputs'
import Save_changes from '../components/Save-changes'
import Submit_btn from '../components/Submit-btn'
import Error from '../components/Error'
import Loader from '../components/Loader'
import axios from 'axios'
import { User } from '../contexts/Auth'
import { jwtDecode } from 'jwt-decode'




const Profile_password = () => {

    const{login,setLogin,details,setDetails} = useContext(User);

    const[color,setColor] = useState("red");
    const[message,setMessage]= useState('');
    const[top,setTop] = useState("-150%");
    const[image,setImage]= useState(null);
    const[upload,setUpload] = useState(null);
    const[loading,setLoading] = useState(false);



    const selectImage = (e)=>{
        if(e.target.files[0].type == "image/jpeg" || e.target.files[0].type == "image/jpg" ){
            setUpload(e.target.files[0]);
        }else{

            setColor("red");
            setMessage("Select a jpg or jpeg file!");
            setTop("0%");

            setTimeout(()=>{

                setColor("transparent");
                setMessage("");
                setTop("-150%");

            },4000)
        
        }
    }


    const updateImage = ()=>{

        let token = JSON.parse(localStorage.getItem("gen-z"))||'';

        if(token == ''){
            setLogin(false);
        }else{
            
            let id = jwtDecode(token.refresh).id
            
            if(upload == null){
                setColor("red");
                setMessage("No selected image!");
                setTop("0%");
    
                setTimeout(()=>{
    
                    setColor("transparent");
                    setMessage("");
                    setTop("-150%");
    
                },4000)

            }else{

                    const formData = new FormData();
                    formData.append('profile_pic', upload);
                    
                    setLoading(true);

                    fetch(`https://gen-zsquare.com/api/userprofile/update/${id}`, {
                        method: 'PATCH',
                        headers: {
                          'Authorization': `Bearer ${token.access}`,
                        },
                        body: formData,
                      })
                        .then(response => response.json())
                        .then(data => {
                          setImage(data.profile_pic)
                          setLoading(false);
                          setTop("0%");
                          setMessage("Profile picture was updated successfully!")
                          setColor("#00C24E");

                          setTimeout(() => {
                            
                            setTop("-150%");
                            setMessage("")
                            setColor("red");
  

                          }, 2000);
                          
                        })
                        .catch(error => {
                          setLoading(false);

                            setTop("0%");
                            setMessage("Network error!")
                            setColor("red");

                            setTimeout(() => {
                                
                                setTop("-150%");
                                setMessage("")
                                setColor("red");

                            }, 4000);
                        

                        });

            }

        }

    }


    useLayoutEffect(()=>{

        let token = JSON.parse(localStorage.getItem("gen-z"))||'';

        if(token == ''){
            window.location.reload();
        }else{

            let id = jwtDecode(token.refresh).id

            axios.get(`https://gen-zsquare.com/api/userprofile/update/${id}`).then((res)=>{

                if(res.data.profile_pic !== undefined){
                    setImage(res.data.profile_pic);
                }

            }).catch((err)=>{

                setTop("0%");
                setMessage("Network error!")
                setColor("red");

                setTimeout(() => {
                                
                    setTop("-150%");
                    setMessage("")
                    setColor("red");

                }, 4000);



            })

        }

    },[])




    return (
        <>
            <Profile_headers span1='Profile' span2='Manage profile settings for your account'/>
            <Profile_img image={image} change={selectImage}/>
            <Save_changes/>
            <Submit_btn text="Save Changes" click={updateImage}/>
            {loading && <Loader/>}
            <Error top={top} click={setTop} message={message} color={color}/>
        </>
       
    )
}

export default Profile_password
