import React from 'react';
import TopNav from './TopNav';
import SideBar from './SideBar';
import { Image, Carousel } from 'react-bootstrap';
import picture1 from './Slide1.jpg';
import picture2 from './Slide2.webp';
import picture3 from './Slide3.png';
import picture4 from './Slide4.png';
import picture5 from './Slide5.webp';



const AboutDevPage=()=>{

return(
  <div className='Page'>
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <TopNav title={'About Dev'}/>
        <Carousel style={{height:'600px',width:'1000px',top:'50px',left:'250px'}}>
            <Carousel.Item>
                <img src={picture1} style={{ height: '600px', width: '1000px' }}/>
                <Carousel.Caption>
                    <h3>Shanvit, 19</h3>
                    <p>Just another Jr. React developer messing up the UI</p>
                </Carousel.Caption>
            </Carousel.Item>
                <Carousel.Item>
                    <img src={picture2} style={{ height: '600px', width: '1000px' }}/>
                <Carousel.Caption>
                    <h3>I know MERN Stack</h3>
                    <p>Being familiar with JS, I can create Dynamic webpages using MongoDB, Express.js , React and Node.js</p>
                </Carousel.Caption>
                </Carousel.Item>
            <Carousel.Item>
                <img src={picture3} style={{ height: '600px', width: '1000px' }} />
                <Carousel.Caption>
                    <h3>Also...</h3>
                    <p>I have rudimental knowledge about Git and Github.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={picture4} style={{ height: '600px', width: '1000px' }}/>
                <Carousel.Caption>
                    <h3>Why I use React?</h3>
                    <p>Virtual DOM. Easy Data flow. SEO freindly. Reusable components. Easy debugging and testing</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={picture5} style={{ height: '600px', width: '1000px' }} />
                <Carousel.Caption>
                    <h3 style={{color:'black'}}>The future</h3>
                    <p style={{color:'black'}}>"JavaScript is the duct tape of internet"</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
  </div>
)

}

export default AboutDevPage;