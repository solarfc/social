const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        payload: text
    }
};

let initialState = {
    postData: [
        {avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', post: 'Hi, a\'m Avatar', likesCount: 20},
        {avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', post: 'First Post', likesCount: 55}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg',
                post: state.profilePage.newPostText,
                likesCount: 0
            };
            state.profilePage.postData.unshift(newPost);
            state.profilePage.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.profilePage.newPostText = action.payload;
            break;
        default:
            return state;
    }
};

export default profileReducer;
export {addPostActionCreator, updateNewPostTextActionCreator};