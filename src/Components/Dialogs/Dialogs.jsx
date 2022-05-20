import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Olya" id="1" />
                <DialogItem name="Roma" id="2" />
                <DialogItem name="Kate" id="3" />
                <DialogItem name="Dominik" id="4" />
            </div>
            <div className={s.messages}>
                <Message name="Hi"/>
                <Message name="How are you"/>
                <Message name="Yo"/>
            </div>

        </div>

    )
}

export default Dialogs;