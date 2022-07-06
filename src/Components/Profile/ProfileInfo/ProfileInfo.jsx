import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img
                    src='https://blog.onlime.ru/wp-content/uploads/2019/12/shutterstock_529670182-945x630.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
               <img src={props.profile.photos.large} />
               AVA+D
            </div>
            <div>
            </div>
        </div>)
}

export default Profileinfo