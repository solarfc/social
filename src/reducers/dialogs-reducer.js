const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};

const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        payload: text
    }
};

let initialState = {
    dialogData: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Sasha'}
    ],
    messageData: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you'}
    ],
    newMessageText: ''
};


const dialogsReducer = (state = initialState, action) => {
    if(action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 5,
            message: state.messagePage.newMessageText
        };
        state.messagePage.messageData.push(newMessage);
        state.messagePage.newMessageText = '';
    } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.messagePage.newMessageText = action.payload;
    } else {
        return state;
    }
};

export default dialogsReducer;

export {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
}