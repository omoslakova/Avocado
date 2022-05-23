import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, I am avocado', likesCount: 18},
        {id: 2, message: 'I am just big-boned', likesCount: 23},
    ]

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                { postsElements }

            </div>
        </div>)
}

export default MyPosts