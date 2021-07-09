import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PhoneInput from 'react-phone-number-input';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import styles from '../styles/phoneConfirm.module.css'
import styled from 'styled-components';

const PhoneConfirm = () => {
    const [phoneNumber, setPhoneNumber] = useState('')

    return (
        <div className={styles.PhoneConfirmContainer}>
            <Link to="/" className={styles.backBtn}>
                <ArrowBackIosIcon fontSize="large" />
            </Link>

            <h1>Enter your Phone Number</h1>
            <PhoneInput international defaultCountry="NP" value={phoneNumber} onChange={setPhoneNumber} />
            <p>By entering your number, you're agreeing to our <code>Terms of Service and Privacy Policy</code>. Thanks</p>
            
            <Link to="/code_confirm" className={`${styles.nextBtn} ' primaryBtn d-flex align-items-center '`}>
                <span>Next</span>
                <NextI />
            </Link>
        </div>
    )
}

export default PhoneConfirm


const NextI = styled(ArrowRightAltIcon)`
    color: white !important;
    margin-left: 8px;
`

export {NextI}