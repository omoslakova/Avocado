import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message.jsx';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    let newDialogsElement = React.useRef();

    let addMessage = () => {
        let text = newDialogsElement.current.value;
        alert('text');
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newDialogsElement}></textarea>
                <div>
                    <button onClick={ addMessage }>Add message</button>
                </div>
            </div>

        </div>

    )
}

export default Dialogs;