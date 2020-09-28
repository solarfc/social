import React from "react";
import dialogs from "./dialogs.module.css";
import Dialog from "./dialog/dialog";
import Message from "./message/message";

const Dialogs = ({dialogPage: {dialogData, messageData, newMessageText}, sendMessage, updateMessageText}) => {

    const addMessages = (e) => {
        e.preventDefault();
        sendMessage();
    };

    const updateMessagesText = (e) => {
        let text = e.target.value;
        updateMessageText(text);
    };


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

    );
};

export default Dialogs;