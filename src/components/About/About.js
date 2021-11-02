import React from 'react';
import './About.css'
import photoed from '../../Photo/images (10).jpg'

const About = () => {
    return (
        <div>
            <div className="container-all">
                <div className="text-div">
                    <h6>Our Story</h6>
                    <h5> About Us</h5>
                </div>
                <div className="container-div">
                    <div className="photo-div photo-first ">

                        <h2>Simple Way of Eating Delicious</h2>
                        <h6>Keep Healthy Food Readily Available <br />When You Hungry.You are More <br />To Eat The First Food You See On Your Counter </h6>
                        <h3>Happy Hour 17:00 To 19:30:10% Off</h3>
                    </div>
                    <div className="photo-div ">
                        <img className="photo-end" src={photoed} alt="" width="300px" height="300px" srcset="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;