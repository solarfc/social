import React from "react";
import dialogs from "./dialogs.module.css";
import Dialog from "./dialog/dialog";
import Message from "./message/message";
import {updateMessageText, sendMessage} from "../../reducers/dialogs-reducer";

const Dialogs = ({dialogPage, dispatch}) => {
    const {dialogData, messageData, newMessageText} = dialogPage;

    const dialogz = dialogData.map((item) => {
        const {id, name} = item;
        return (
            <Dialog key={id} id={id} name={name} />
        );
    });

    const messages = messageData.map((item) => {
        const {id, message} = item;
        return (
            <Message key={id} message={message} />
        );
    });

    const addMessages = (e) => {
        e.preventDefault();
        dispatch(sendMessage());
    };

    const updateMessagesText = (e) => {
        let text = e.target.value;
        dispatch(updateMessageText(text));
    };

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogItem}>
                {dialogz}
            </div>
            <div className={dialogs.messages}>
                <div className="messages-item">
                    {messages}
                </div>
                <form className="add-message" onSubmit={addMessages}>
                    <textarea name="" id="" value={newMessageText} onChange={updateMessagesText} placeholder="Enter your message"></textarea>
                    <button type="submit">send message</button>
                </form>
            </div>
        </div>
    )
};

export default Dialogs;