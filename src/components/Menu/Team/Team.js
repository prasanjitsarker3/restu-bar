import React from 'react';
import './Team.css';
import Pics from '../../../Photo/team/22.jpg';
import Pics1 from '../../../Photo/team/23.jpg';
import Pics2 from '../../../Photo/team/24.jpg';
import Authen from '../../Authen/Authen';



const Team = () => {
    return (
        <div className="team-back">
            <div className="container-team">
                <h5>Team</h5>
                <h3>Our Chefs</h3>
            </div>
            <div className="card-group ">
                <div className="card-photo col-md-4 shadow-lg p-3 mb-5 ">
                    <img src={Pics} alt="" srcset="" height="300px" width="200px" />
                    <h5> 𝕮𝖔𝖒𝖒𝖆𝖓𝖉𝖔</h5>
                    
        
                </div>
                <div className="card-photo col-md-4 shadow-lg p-3 mb-5 ">
                    <img src={Pics2} alt="" srcset=""  height="300px" width="200px" />
                    <h5> 𝕮𝖔𝖒𝖒𝖆𝖓𝖉𝖔</h5>
                </div>
                <div className="card-photo col-md-4 shadow-lg p-3 mb-5">
                    <img src={Pics1} alt="" srcset=""  height="300px" width="200px" />
                    <h5> 𝕮𝖔𝖒𝖒𝖆𝖓𝖉𝖔</h5>
                </div>
            </div>
            <Authen></Authen>
        </div>
    );
};

export default Team;