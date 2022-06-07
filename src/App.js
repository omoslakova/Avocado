import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Dialogs from './Components/Dialogs/Dialogs.jsx';
import { Route, Routes } from "react-router-dom";


const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                <Routes>
                        <Route path="/dialogs/*"
                               element={<Dialogs store={props.store}/>} />
                        <Route path="/profile"
                               element={<Profile profilePage={props.state.profilePage}
                               dispatch={props.dispatch}/>} />
                </Routes>

                </div>
            </div>)
}

export default App;
