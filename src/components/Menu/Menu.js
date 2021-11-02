import React from 'react';
import './Menu.css';
import photoed from '../../Photo/1.jpg';
import photoed1 from '../../Photo/2.jpg';
import photoed2 from '../../Photo/3.jpg';
import photoed3 from '../../Photo/4.jpg';
import photoed4 from '../../Photo/5.jpg';
import photoed5 from '../../Photo/6.jpg';
import photoed6 from '../../Photo/7.jpg';
import photoed7 from '../../Photo/8.jpg';
import Testimanials from '../Testimanials/Testimanials';


const Menu = () => {
    return (
        <div className="container-menu">

            <div className="menu-text">
                <h5>Oder Now</h5>
                <h1>Our Menu</h1>


            </div>
            <div className="menu-item">
                <div className="menu-list">
                    <img src={photoed} alt="" srcset="" />
                    <h3>Chesse Toastie</h3>
                    <p>$40.56</p>
                </div>
                <div className="menu-list">
                    <img src={photoed1} alt="" srcset="" />
                    <h3>Tortilia Espanola</h3>
                    <p>$33.56</p>
                </div>
                <div className="menu-list">
                    <img src={photoed2} alt="" srcset="" />
                    <h3>Olivas Reuenas</h3>
                    <p>$34.87</p>
                </div>
                <div className="menu-list">
                    <img src={photoed3} alt="" srcset="" />
                    <h3>Lasagne Salad</h3>
                    <p>$56</p>
                </div>
                <div className="menu-list">
                    <img src={photoed4} alt="" srcset="" />
                    <h3>Fries Ajillo</h3>
                    <p>$41</p>
                </div>
                <div className="menu-list">
                    <img src={photoed5} alt="" srcset="" />
                    <h3>Bacalao Frito</h3>
                    <p>$36</p>
                </div>
                <div className="menu-list">
                    <img src={photoed6} alt="" srcset="" />
                    <h3>De Salmon</h3>
                    <p>$46</p>
                </div>
                <div className="menu-list">
                    <img src={photoed7} alt="" srcset="" />
                    <h3>Carlic Shrims</h3>
                    <p>$56</p>
                </div>
            </div>
            <Testimanials></Testimanials>
        </div>
    );
};

export default Menu;