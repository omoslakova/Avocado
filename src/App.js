import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


const App = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar/>
                <div className='app-wrapper-content'>

                        <Route path="/dialogs"
                               render={ () => <DialogsContainer /> } />
                        <Route path="/profile/:userId?"
                               render={ () => <ProfileContainer /> }/>
                    <Route path="/users"
                           render={ () => <UsersContainer /> } />

                </div>
            </div>)
}

export default App;
