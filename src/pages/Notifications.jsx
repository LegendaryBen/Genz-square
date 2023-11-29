import Header from '../components/header'
import green from '../images/green-dot.svg'
import Arrow from '../components/Arrow'
import { Link,Navigate } from 'react-router-dom'
import Search_Bar from '../components/Search-Bar'
import Ham_menu from '../components/Ham-menu'
import { User } from '../contexts/Auth'
import useLogin from '../custom hooks/useLogin'
import { useContext } from 'react'



const Notifications = (props) => {

    const{login,setLogin} = useContext(User);

    useLogin(setLogin);


    return login == true ?(
        <>
            <Header/>
            <Ham_menu/>
            <Search_Bar/>
            <div className="notification-container">
                <div className="delete-all">
                    <div>
                        Mark All As Read
                    </div>
                    <div>
                        Delete All
                    </div>
                </div>

                <Link className="notifications-hint">
                    <div className="notification-snippet-header">
                        Subscription
                    </div>
                    <div className="notification-snippet-body">
                        Lorem ipsum dolor sit amet consectetur. Nec semper facilisis hendrerit malesuada. Vestibulum maecenas nibh in quis...
                    </div>
                </Link>

                <Link className="notifications-hint green-hint">
                    <div className="notification-snippet-header">
                        Subscription
                    </div>
                    <div className="notification-snippet-body">
                        Lorem ipsum dolor sit amet consectetur. Nec semper facilisis hendrerit malesuada. Vestibulum maecenas nibh in quis...
                    </div>
                    <Arrow image={green}/>
                </Link>

                
            </div>
        </>
    ): <Navigate to='/'/>
}

export default Notifications
