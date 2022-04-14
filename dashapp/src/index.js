import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from './MainPage';
import ErrorPage from './ErrorPage';
import GmapPage from './GmapPage';
import AboutDevPage from './AboutDevPage';
// Main routing page

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path='/error' element={<ErrorPage />} />
            <Route path='/dashboard' element={<MainPage />} />
            <Route path='/gmap' element={<GmapPage/>} />
            <Route path='/about' element={<AboutDevPage/>} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);


