import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/phoneConfirm.module.css';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const CodeConfirm = () => {
    return (
        <div className={styles.PhoneConfirmContainer}>
            <Link to='/get_username' className={styles.backBtn}>
                <ArrowBackIosIcon fontSize="large" />
            </Link>
            <div className="text-center">
                <h1 style={{width: '100%', maxWidth: '200px', marginBottom:'20px'}}>Enter the code we just texted you</h1>
                <CodeInput className="py-2" />
                <p className="mt-3">Didn't recieve it ? <span>Tap to resend</span> </p>
            </div> 

            <Link to="/allow_notifications" className="primaryBtn d-flex align-items-center mt-3">
                <span>Next</span>
                <NextI className="ml-3" />
            </Link>
        </div>
    )
}

export default CodeConfirm


const CodeInput = styled.input`
    width: 100%;
    border: none;
    text-align: center;
    outline: transparent;
`

const NextI = styled(ArrowRightAltIcon)`
    color: white !important;
    margin-left: 8px;
`