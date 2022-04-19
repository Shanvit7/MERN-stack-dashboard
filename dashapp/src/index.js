import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from './Webpages/MainPage';
import DummyPage from './Webpages/DummyPage';
import GmapPage from './Webpages/GmapPage';
import AboutDevPage from './Webpages/AboutDevPage';
import ToDoPage from './Webpages/ToDoPage';
import NotificationPage from './Webpages/NotificationPage';
import LogOutBox from './PageComponents/LogOutBox';
// Main routing page

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} /> {/* Dashboard Page*/}
            <Route path='/void' element={<DummyPage />} /> {/* For  links not in use */}
            <Route path='/dashboard' element={<MainPage />} />
            <Route path='/gmap' element={<GmapPage/>} />
            <Route path='/about' element={<AboutDevPage/>} />
            <Route path='/todo' element={<ToDoPage />} />
            <Route path='/notifications' element={<NotificationPage/>} />
            <Route path='/logout' element={<LogOutBox/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);


