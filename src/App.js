import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import {Route, HashRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {withRouter} from "react-router";
import {compose} from "redux";
import Preloader from "./Components/common/Preloader/Preloader";
import {initializeApp} from "./Redux/app-reducer";
import {Provider, connect} from "react-redux";
import store from "./Redux/redux-store";
import {withSuspense} from "./HOC/withSuspence";


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
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)} />

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
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const AvocadoJSApp = (props) => {
    return <HashRouter >
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default AvocadoJSApp;