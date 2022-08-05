import React from 'react';
import Users from './Users';
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress, getUsers
} from '../../Redux/users-reducer';
import Preloader from "../common/Preloader/Preloader";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      users={this.props.users}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
               followingInProgress={this.props.followingInProgress}
        />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
let withRedirect = withAuthRedirect(UsersContainer);

export default withAuthRedirect(connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleFollowingProgress,
    getUsers})(UsersContainer));