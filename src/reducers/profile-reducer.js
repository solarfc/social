const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

const initialState = {
    postData: [
        {avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', post: 'Hi, a\'m Avatar', likesCount: 20},
        {avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', post: 'First Post', likesCount: 55}
    ],
    postText: ''
};

const updatePostTextCreator = (text) => {
    return {
        type: 'UPDATE_POST_TEXT',
        payload: text
    }
};

const addPostCreator = () => {
    return {
        type: 'ADD_POST'
    }
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};

    switch (action.type) {
        case UPDATE_POST_TEXT:
            stateCopy.postText = action.payload;
            return stateCopy;
        case ADD_POST:
            stateCopy.postData = [...state.postData];
            stateCopy.postData.unshift({
                avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg',
                post: state.postText,
                likesCount: 0
            });
            stateCopy.postText = '';
            return stateCopy;
        default:
            return state;
    }
};

export {
    addPostCreator,
    updatePostTextCreator
}

export default profileReducer;