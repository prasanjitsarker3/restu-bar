import React from 'react';
import { Col, Image } from 'react-bootstrap';
import phototest from '../../Photo/11.jpg'
import phototest1 from '../../Photo/12.jpg'
import phototest2 from '../../Photo/13.jpg'
import './Testimanials.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Team from '../Menu/Team/Team';

const Testimanials = () => {
    return (
        <div className="testimanials-back">
            <div className="container-test">
                <h5>Testimonials</h5>
                <h2>Some Feedbacks</h2>
            </div>
            <div className="test-box">
                <div className="test-border shadow-lg p-3 mb-5">
                    <div className="test-list">
                        <div >
                            <h2>Raj Himachal</h2>
                            <p className="food">Food Specialist</p>
                        </div>
                        <div>
                            <Col xs={6} md={4}>
                                <Image src={phototest} roundedCircle />
                            </Col>

                        </div>
                    </div>
                    <p className="gary">Lorem ipsum dolor sit amet consectetur <br />
                        adipisicing elit. Nihil vel tempora debitis <br />
                        voluptatibus ipsam quas.</p>
                    <Stack spacing={1}>
                        <Rating name="size-medium" defaultValue={2} />
                    </Stack>

                </div>
                <div className="test-border shadow-lg p-3 mb-5">
                    <div className="test-list ">
                        <div >
                            <h2>Raj Himachal</h2>
                            <p className="food">Food Specialist</p>
                        </div>
                        <div>
                            <Col xs={6} md={4}>
                                <Image src={phototest2} roundedCircle />
                            </Col>

                        </div>
                    </div>
                    <p className="gary">Lorem ipsum dolor sit amet consectetur <br />
                        adipisicing elit. Nihil vel tempora debitis <br />
                        voluptatibus ipsam quas.</p>
                    <Stack spacing={1}>
                        <Rating name="size-medium" defaultValue={2} />
                    </Stack>

                </div>
                <div className="test-border shadow-lg p-3 mb-5">
                    <div className="test-list">
                        <div >
                            <h2>Raj Himachal</h2>
                            <p className="food" >Food Specialist</p>
                        </div>
                        <div>
                            <Col xs={6} md={4}>
                                <Image src={phototest1} roundedCircle />
                            </Col>

                        </div>
                    </div>
                    <p className="gary">Lorem ipsum dolor sit amet consectetur <br />
                        adipisicing elit. Nihil vel tempora debitis <br />
                        voluptatibus ipsam quas.</p>
                    <Stack spacing={1}>
                        <Rating name="size-medium" defaultValue={2} />
                    </Stack>

                </div>
            </div>
            <Team></Team>

        </div>
    );
};

export default Testimanials;