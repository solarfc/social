import React from "react";
import profileReducer, {addPostCreator, deletePostCreator} from "./profile-reducer";

let action = addPostCreator('post text');
const state = {
    postData: [
        {id: 1, avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', post: 'Hi, a\'m Avatar', likesCount: 20},
        {id: 2, avatar: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg', post: 'First Post', likesCount: 55}
    ],
};

test('length of post should be incremented', () => {
    // 1. test data

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation

    expect(newState.postData.length).toBe(3);
});

test('text of new post should be correct', () => {
    // 1. test data

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation

    expect(newState.postData[0].post).toBe('post text');
});

test('after deleting length of message should be decrement', () => {
    // 1. test data
    let action = deletePostCreator(1);
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation

    expect(newState.postData.length).toBe(1);
});

test('after deleting length should be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePostCreator(1000);
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation

    expect(newState.postData.length).toBe(2);
});


