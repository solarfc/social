const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';

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
};

export const sendMessage = (newMessageText) => {
    return {
        type: 'SEND_MESSAGE',
        payload: newMessageText
    }
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: Math.floor(Math.random() * 100 - 2),
                message : action.payload
            };
            return  {...state, messageData: [...state.messageData, newMessage]};
        default:
            return state;
    }
};

export default dialogReducer;