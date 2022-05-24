import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Dialogs from './Components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path="/dialogs/*"
                               element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
                        <Route path="/profile"
                               element={<Profile posts={props.posts} />} />

                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
