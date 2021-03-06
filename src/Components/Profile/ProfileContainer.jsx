import React from 'react';
import Profile from "./Profile";
import {setUserProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../API/api";
import {Redirect} from "react-router";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        usersAPI.getProfile(userId).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"} /> ;
        return (
                <Profile {...this.props} profile={this.props.profile} />
            )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);