import React from 'react';

import styles from '../styles/welcome.module.css';
import { Link } from 'react-router-dom';


const Welcome = () => {
    return (
        <div className={styles.WelcomeContainer}>
            <h1>Welcome 👋</h1>

            <div className={styles.WelcomeInfo}>
                <p>We're working hard to get Clubhouse ready for everyone 🧑‍🤝‍🧑 <br/>
                 Please be patient with us while we add final changes to improve you experience. 
                </p>

                <p>
                    Hey, we're still opening up but anyone can join with an invite from an existing user! 🧔 <br/>
                    Sign up to see if you have friends on Clubhouse who can let you in. We can't wait for you to join!
                    <br />
                    Clubhouse is currently available on iOS and Android. 
                    It launched on iOS last year, and the company started a US-only Android rollout in early May. 
                    It is now available on Android worldwide.
                </p>

                <p>👉 John and the Clubhouse Team 🫂</p>
            </div>

            <div className={styles.actionBtn}>
                <Link to="/get_username" className="primaryBtn d-flex items-center">
                    Get Your Username{" "}
                    <img src="" alt="" />
                </Link>

                <Link to="/invite">Have an invite text? Sign in</Link>
            </div>
        </div>

    )
}

export default Welcome
