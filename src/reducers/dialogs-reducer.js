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

export const updateMessageText = (text) => {
    return {
        type: 'UPDATE_MESSAGE_TEXT',
        payload: text
    }
};

export const sendMessage = () => {
    return {
        type: 'SEND_MESSAGE'
    }
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            return  {...state, newMessageText: action.payload};
        case SEND_MESSAGE:
            let newMessage = {
                id: Math.floor(Math.random() * 100 - 2),
                message : state.newMessageText
            };
            return  {...state, newMessageText: '', messageData: [...state.messageData, newMessage]};
        default:
            return state;
    }
};

export default dialogReducer;