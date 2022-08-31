import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/аватар.jpg"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto }) => {

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            {/*<div>
                <img
                    src='https://blog.onlime.ru/wp-content/uploads/2019/12/shutterstock_529670182-945x630.jpg'></img>
            </div>*/}
            <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
            { isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>

        </div>)
}

export default ProfileInfo