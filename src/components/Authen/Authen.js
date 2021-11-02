import React from 'react';
import './Authen.css';
import { faHouseUser, faPhone, faPowerOff, faRoad, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from '../Login/Login';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Authen = () => {
    return (
        <div className="Authen-back">
            <div class=" Authen-text col-md-4 shadow-lg p-3 mb-5">
                <h2> <FontAwesomeIcon icon={faSearchLocation} />  Our location</h2>
                <p><FontAwesomeIcon icon={faRoad}/>   Dhaka, Sector-12</p>
                <p><FontAwesomeIcon icon={faHouseUser}/>    New Dhaka-396</p>
                <p><FontAwesomeIcon icon={faPhone} />     +8801916754****</p>
                <p><FontAwesomeIcon icon={faEnvelope}/>   Info@gmail.com</p>
            </div>
            <div class="Authen-text col-md-4 shadow-lg p-3 mb-5">
                <h2> <FontAwesomeIcon icon={faPowerOff} />  Opening Hours</h2>
                <p>Monday to Friday</p>
                <p>9.00 AM - 10:00 PM</p>
            </div>
            <div class="Authen-text col-md-4 shadow-lg p-3 mb-5">
                <h2><FontAwesomeIcon icon={faPhone} />  Authentication</h2>
                <Login></Login>
            </div>
        </div>

    );
};

export default Authen;