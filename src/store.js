import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import reducer from "./reducers";

let store = {
    _state: {
        profilePage: {
            postData: [
                {avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', post: 'Hi, a\'m Avatar', likesCount: 20},
                {avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', post: 'First Post', likesCount: 55}
            ],
            newPostText: ''
        },
        messagePage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() { // метод
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { // {type: 'название действия'}
        reducer(this._state, action);
        // profileReducer(this._state, action);
        // dialogsReducer(this._state, action);
        this._callSubscriber();

        // if(action.type === 'ADD_POST') {
        //     let newPost = {
        //         avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg',
        //         post: this._state.profilePage.newPostText,
        //         likesCount: 0
        //     };
        //     this._state.profilePage.postData.unshift(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber();
        // } else if(action.type === 'UPDATE_NEW_POST_TEXT') {
        //     this._state.profilePage.newPostText = action.payload;
        //     this._callSubscriber();
        // }
        // this._state = profileReducer(this._state, action);
        // this._state = dialogsReducer(this._state, action);
        // this._callSubscriber();
    }
};

export default store;
//
// const addPostActionCreator = () => {
//     return {
//         type: 'ADD_POST'
//     }
// };
//
// const updateNewPostTextActionCreator = (text) => {
//     return {
//         type:'UPDATE_NEW_POST_TEXT',
//         payload: text
//     }
// };

// export {
//     addPostActionCreator,
//     updateNewPostTextActionCreator
// }





