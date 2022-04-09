import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from './MainPage.js';
import ErrorPage from './ErrorPage.js';

// Main routing page

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path='/error' element={<ErrorPage />} />
            <Route path='/back' element={<MainPage />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);


