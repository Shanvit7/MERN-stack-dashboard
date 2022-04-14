import React from'react';
import './App.css';
import SideBar from './SideBar';
import TopNav from './TopNav';

const Gmap=()=>{
    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.0872130853763!2d72.8724998!3d19.2785732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b05d1edb4407%3A0xa307d0ab19a531a2!2sVinay%20Residency%2C%20Cluster_thane_51%2C%20Vijay%20Park%2C%20Mira%20Road%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401107!5e0!3m2!1sen!2sin!4v1649923635054!5m2!1sen!2sin" width={1200} height={600} style={{position:'relative',top:'60px',left:'200px',border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    )
}

const GmapPage=()=>{
  
    return (
        <div className='Page'>
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <TopNav title={'Google Map'}/>
            <h3 style={{
                position: "absolute", left: "200px",top:"70px", fontFamily: 'Georgia, serif',color:'blue'}}>Please visit us at : </h3>
        <Gmap/>
        </div>

    )

}

export default GmapPage;