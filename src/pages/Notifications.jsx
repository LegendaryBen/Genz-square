import React from 'react'
import Header from '../components/header'
import green from '../images/green-dot.svg'
import Arrow from '../components/Arrow'
import { Link } from 'react-router-dom'
import Search_Bar from '../components/Search-Bar'
import Ham_menu from '../components/Ham-menu'



const Notifications = (props) => {
    return (
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
    )
}

export default Notifications
