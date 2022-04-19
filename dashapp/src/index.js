import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from './MainPage';
import DummyPage from './DummyPage';
import GmapPage from './GmapPage';
import AboutDevPage from './AboutDevPage';
import ToDoPage from './ToDoPage';
import NotificationPage from './NotificationPage';
import LogOutBox from './LogOutBox';
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


