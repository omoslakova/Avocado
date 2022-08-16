import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {withRouter} from "react-router";
import {compose} from "redux";
import Preloader from "./Components/common/Preloader/Preloader";
import {initializeApp} from "./Redux/app-reducer";
import {connect} from "react-redux";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/login"
                           render={() => <LoginPage/>}/>

                </div>
            </div>)
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
