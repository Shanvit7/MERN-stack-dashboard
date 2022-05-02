import React from 'react';
import BottomNav from '../PageComponents/BottomNav';
import TopNav from '../PageComponents/TopNav';
import { motion } from 'framer-motion/dist/framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleSheets/App.css';

const Gmap = () => {
    return (
        <div className="map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.0872130853763!2d72.8724998!3d19.2785732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b05d1edb4407%3A0xa307d0ab19a531a2!2sVinay%20Residency%2C%20Cluster_thane_51%2C%20Vijay%20Park%2C%20Mira%20Road%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401107!5e0!3m2!1sen!2sin!4v1649923635054!5m2!1sen!2sin" title='Location' width={1525} height={900} border={0} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            {/*Embedded location in web page */}
        </div>
    )
}

const GmapPage = () => {

    return (
        <div className='Page'>
            <TopNav title={'Google Map'} />
            <motion.h2 initial={{ y: -250}} animate={{ fontSize: "30px", color: 'rgb(0,102,255)', y: 170}} transition={{ delay:2,type: 'spring', stiffness: 500 }}>Visit us at above address : </motion.h2>
            {/* <Gmap/> Gmap used here */}
            <Gmap />
            <BottomNav/>
        </div>
    )

}

export default GmapPage;