import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/phoneConfirm.module.css';


const AllowNotification = () => {
    return (
        <div className={styles.PhoneConfirmContainer}>
            <div className="text-center">
                <h1 className="mb-4">Last Important Step!</h1>   
                <h1 className="mb-3">Enable notifications to know when people are talking.</h1>
            </div>
            <div className={styles.NotificationContainer}>
                <div className="p-3 text-center">
                    <h3>"Clubhouse" would like to send you notifications</h3>
                    <p>Notifications may include, alerts, sounds, icons and badges</p>
                </div>
                <div className={`${styles.actionBtn} text-center`}>
                    <Link to="/home">
                        Don't Allow
                    </Link>
                    <Link to="/home">
                        Allow
                    </Link>
                    <img src="http://cdn.shopify.com/s/files/1/1061/1924/products/Up_Pointing_Backhand_Index_Emoji_Icon_ios10_grande.png?v=1571606093" alt="Allow Notification Icon" className={styles.handIcon}/>
                </div>
            </div>
        </div>
    )
}

export default AllowNotification
