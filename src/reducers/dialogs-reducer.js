const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

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

const updateMessageText = (text) => {
    return {
        type: 'UPDATE_MESSAGE_TEXT',
        payload: text
    }
};

const sendMessage = () => {
    return {
        type: 'SEND_MESSAGE'
    }
};

const dialogReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            stateCopy.newMessageText = action.payload;
            return stateCopy;
            break;
        case SEND_MESSAGE:
            let newMessage = {
                id: 100,
                message : state.newMessageText
            };
            stateCopy.messageData = [...state.messageData];
            stateCopy.messageData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
            break;
        default:
            return state;
    }
};

export default dialogReducer;

export {
    updateMessageText,
    sendMessage
};