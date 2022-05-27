
let rerenderEntireTree = () => {
    console.log('State was changed');
}

let state = {
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
    ] },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, I am avocado', likesCount: 18},
                {id: 2, message: 'I am just big-boned', likesCount: 23}
        ],
            newPostText: 'frontend rocks'
        },
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
rerenderEntireTree = observer;
}
export default state