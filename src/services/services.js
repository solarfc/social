import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1900b088-8407-4849-87c8-4c5763f29aab'
    }
});

export const getUsers = (currentPage, pageSize) => {
    return (
        instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    )
};

export const followUser = (id) => {
    return (
        instance.post(`follow/${id}`)
            .then(response => response.data)
    )
};

export const unFollowUser = (id) => {
    return (
        instance.delete(`follow/${id}`)
            .then(response => response.data)
    )
};

export const setUser = () => {
    return (
        instance.get(`auth/me`)
            .then(response => response.data)
    )
};

export const setUserProfileInfo = (id) => {
    return (
        instance.get(`profile/${id}`)
            .then(response => response.data)
    )
};

