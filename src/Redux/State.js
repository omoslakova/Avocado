import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, I am avocado', likesCount: 18},
                {id: 2, message: 'I am just big-boned', likesCount: 23}
            ],
            newPostText: 'frontend rocks'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'}
            ],
            newMessageBody: "",

            dialogs: [
                {id: 1, name: 'Olya'},
                {id: 2, name: 'Roma'},
                {id: 3, name: 'Kate'},
                {id: 4, name: 'Dominik'}
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch: function (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


window.store = store;
export default store;
