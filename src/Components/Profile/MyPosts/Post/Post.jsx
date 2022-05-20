import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://papik.pro/uploads/posts/2021-11/thumbs/1636391985_27-papik-pro-p-avokado-risunok-milii-27.jpg'></img>
            { props.message }
            <div>
                <span>like</span> { props.likescount}
            </div>
        </div>
    )
}

export default Post