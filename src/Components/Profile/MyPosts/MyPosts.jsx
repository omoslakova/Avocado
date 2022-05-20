import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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

                <Post message='Hi, I am avocado' likescount='18'/>
                <Post message="I am just big-boned" likescount='23'/>

            </div>
        </div>)
}

export default MyPosts