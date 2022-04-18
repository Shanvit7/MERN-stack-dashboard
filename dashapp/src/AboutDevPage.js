import React from 'react';
import TopNav from './TopNav';
import SideBar from './SideBar';
import { Carousel } from 'react-bootstrap';
import BottomNav from './BottomNav';
import picture1 from './Slide1.jpg';
import picture2 from './Slide2.webp';
import picture3 from './Slide3.png';
import picture4 from './Slide4.png';
import picture5 from './Slide5.webp';
import { motion } from 'framer-motion/dist/framer-motion';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutDevPage = () => {

    return (
        <div className='Page'>
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <TopNav title={'About Dev'} />
            <motion.div className='container-fluid' animate={{ rotate: 360 }} >
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    style={{ height: '700px' }}
                                    src={picture1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Shanvit, 19</h3>
                                    <p>Just another budding React developer messing up the UI</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    style={{ height: '700px'}}
                                    src={picture2}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>I know MERN Stack</h3>
                                    <p>Being familiar with JS, I can create Dynamic webpages using MongoDB, Express.js , React.js and Node.js</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    style={{ height: '700px'}}
                                    src={picture3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Also...</h3>
                                    <p>I have rudimental knowledge about Git and Github.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    style={{ height: '700px'}}
                                    src={picture4}
                                    alt="Fourth slide"
                                />
                                <Carousel.Caption>
                                    <h3>Why I use React?</h3>
                                    <p>Virtual DOM. Easy Data flow. SEO freindly. Reusable components. Easy debugging and testing</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    style={{ height: '700px'}}
                                    src={picture5}
                                    alt="Fifth slide"
                                />
                                <Carousel.Caption>
                                    <h3 style={{ color: 'black' }}>Into the Future</h3>
                                    <p style={{ color: 'black' }}>"JavaScript is the duct tape of internet"</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </motion.div>

            <div style={{ position: 'relative', top: '100px' }}>
                <BottomNav />
            </div>

        </div>
    )

}

export default AboutDevPage;