const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'}
            ],

            dialogs: [
                {id: 1, name: 'Olya'},
                {id: 2, name: 'Roma'},
                {id: 3, name: 'Kate'},
                {id: 4, name: 'Dominik'}
            ]
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, I am avocado', likesCount: 18},
                {id: 2, message: 'I am just big-boned', likesCount: 23}
            ],
            newPostText: 'frontend rocks'
        },
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
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


window.store = store;

export default store
