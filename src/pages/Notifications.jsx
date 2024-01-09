import Header from '../components/header'
import green from '../images/green-dot.svg'
import Arrow from '../components/Arrow'
import { Link,Navigate } from 'react-router-dom'
import Search_Bar from '../components/Search-Bar'
import Ham_menu from '../components/Ham-menu'
import { User } from '../contexts/Auth'
import useLogin from '../custom hooks/useLogin'
import { useContext,useState,useEffect } from 'react'
import ReadNotification from '../components/ReadNotification'
import axios from 'axios'
import Error from '../components/Error'
import Loader from '../components/Loader'
import Fectch_error from '../components/Fectch_error'
import Fetch_empty from '../components/Fetch_empty'
import Fetch_loader from '../components/Fetch_loader'
import { jwtDecode } from 'jwt-decode'


const Notifications = (props) => {

    const{setLogin,setNote} = useContext(User);
    const[show,setShow] = useState(false);
    const[load,setLoad] = useState(false);
    const[message,setMessage] = useState("");
    const[color,setColor] = useState('red');
    const[pos,setPos] = useState('-150%');
    const[data,setData] = useState([]);
    const[error,setError] = useState(false);
    const[loading,setLoading] = useState(true);
    const[seperate,setSeperate] = useState(false);
    const[seperate2,setSeperate2] = useState(false);
    const[noteTitle,setNoteTitle] = useState('');
    const[noteBody,setNoteBody] = useState('');

    let login = localStorage.getItem("gen-z") || '';


    useLogin(setLogin);


    useEffect(()=>{

        axios.get("https://gen-zsquare.com/api/notifications").then((res)=>{

            setLoading(false);
            let final =  res.data.map((item)=>{
                let obj = {...item,read:false};
                return obj
            })

            setData(final);
            setSeperate(true);

        }).catch((err)=>{

            setLoading(false);
            setError(true);

        })

    },[])


    useEffect(()=>{

        if(seperate == true){

            axios.get("https://gen-zsquare.com/api/notificationsread").then((res)=>{


                let token = JSON.parse(localStorage.getItem("gen-z"))?.refresh || "";

                let tkn;

                if(token == ''){

                    window.location.reload()

                }else{

                    tkn = jwtDecode(token).user_id;
                }


                let newres = [...res.data].filter((item)=>{
                    if(item.user == tkn){
                        return item;
                    }
                })

        

                let temp = [...data];

                for(let i = 0;i<newres.length;i++){

                    let id = newres[i].notification;


                    temp = temp.map((item)=>{

                        if(item.id == id){
                            item.read = true;
                        
                        }

                        return item

                    })

                }

                setData(temp)
                setSeperate2(true)

            

            }).catch((err)=>{

                return

            })


        }

    },[seperate])


    useEffect(()=>{

     if(seperate2 == true){

        let track = false;

        for(let i =0;i<data.length;i++ ){

            let check = data[i];

            if(check.read == false){

                track = true;
                setNote(true)
                break;
                
            }

        }

        if(track == false){

            setNote(false);
                
        }

     }


    },[seperate2,data])



    const pop = (id)=>{

        let token = JSON.parse(localStorage.getItem("gen-z"))?.refresh || "";

        let tkn;

        if(token == ''){

            window.location.reload()

        }else{

            tkn = jwtDecode(token).user_id;

            setLoad(true);

            axios.post("https://gen-zsquare.com/api/notificationsread",{
                user:tkn,
                notification:id
            }).then((res)=>{

             setLoad(false);

             let update = [...data];

             let title;
             let body;

             for(let i = 0;i<update.length;i++){

                let check = update[i];

                if(check.id == id){

                    check.read = true;
                    title = check.title;
                    body = check.message;

                    break;
                }

             }

             setData(update);
             setNoteTitle(title);
             setNoteBody(body);
             setShow(true);


            }).catch((err)=>{

                setLoad(false);
                setMessage("Network error while fetching the notification")
                setPos("0%");

                setTimeout(()=>{

                    setMessage("Network error while fetching the notification")
                    setPos("-150%");

                },4000)

            })


        }

    }



    if(loading == true && error == false){

        return <Fetch_loader/>

    }else if( loading == false && error == true){

        return <Fectch_error/>

    }else if(loading == false && error == false && data.length == 0){

        return <Fetch_empty/>

    }else{

        return login !== '' ?(
            <>
                <Header/>
                <Ham_menu/>
                <Search_Bar/>
                <div className="notification-container">
                    {/* <div className="delete-all">
                        <div>
                            Mark All As Read
                        </div>
                        <div>
                            Delete All
                        </div>
                    </div> */}

                    {

                        data.map((item,i)=>{

                            if(item.read == true){

                                return (
                                    <Link className="notifications-hint" onClick={()=>{
                                        pop(item.id)
                                    }} key={i}>
                                        <div className="notification-snippet-header">
                                            {item.title.length > 70 ? item.message.slice(0,65)+"...":item.title}
                                        </div>
                                        <div className="notification-snippet-body">
                                            {item.message.length > 114 ? item.message.slice(0,110)+"...":item.message}
                                        </div>
                                    </Link>
                                )

                            }else{

                                return(

                                    <Link className="notifications-hint green-hint"  onClick={()=>{
                                        pop(item.id)
                                    }} key={i}>
                                        <div className="notification-snippet-header">
                                            {item.title.length > 70 ? item.message.slice(0,65)+"...":item.title}
                                        </div>
                                        <div className="notification-snippet-body">
                                            {item.message.length > 114 ? item.message.slice(0,110)+"...":item.message}
                                        </div>
                                        <Arrow image={green}/>
                                    </Link>
                

                                )

                            }

                        })

                    }
                    
                </div>
                {show && <ReadNotification hide={setShow} title={noteTitle} body={noteBody}/>}
                <Error message={message} top={pos} click={setPos} color={color}/>
                {load && <Loader/>}
            </>
        ): <Navigate to='/'/>

    }

   
}

export default Notifications
