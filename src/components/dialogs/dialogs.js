import React from "react";
import dialogs from "./dialogs.module.css";
import Dialog from "./dialog/dialog";
import Message from "./message/message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {Textarea} from "../forms-controls/form-controls";

const maxLength300 = maxLengthCreator(300);

const DialogForm = ({handleSubmit}) => {
    return (
        <form className="add-message" onSubmit={handleSubmit}>
            <Field name="newMessageText" type="text" component={Textarea} validate={[required, maxLength300]} placeholder="Enter your message" />
            <div className="form-group">
                <button type="submit">send message</button>
            </div>
        </form>

    )
};

const DialogReduxForm = reduxForm({form: 'dialog'})(DialogForm)

const Dialogs = ({dialogPage: {dialogData, messageData}, sendMessage}) => {

    const addMessages = ({newMessageText}) => {
        sendMessage(newMessageText);
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
                <DialogReduxForm onSubmit={addMessages} />
            </div>
        </div>

    );
};

export default Dialogs;