import { AsyncStorage } from "react-native"

import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constans/tokens"

const storeToken = async(name, token) => {
    console.log(name, token);
    try {
        await AsyncStorage.setItem(name, token);
    } catch (error) {
        console.log(error);
        // Error saving data
    }
};

const getToken = async(name) => {
    try {
        const token = await AsyncStorage.getItem(name);
        if (token !== null) {
            return token
        }
    } catch (error) {
        // console.log("getToken: ", error);
        // Error retrieving data
        return new Promise.reject(new Error(400));
    }
};

const deleteToken = async(name) => {
    try {
        await AsyncStorage.removeItem(name);
    } catch (error) {
        // console.log( error );
        // Error retrieving data
    }
};

export const storeAccessToken = async(token) => storeToken(ACCESS_TOKEN, token);
export const storeRefreshToken = async(token) => storeToken(REFRESH_TOKEN, token);

export const getAccessToken = async() => getToken(ACCESS_TOKEN);
export const getRefreshToken = async() => getToken(REFRESH_TOKEN);

export const deleteAccessToken = async() => deleteToken(ACCESS_TOKEN);
export const deleteRefreshToken = async() => deleteToken(REFRESH_TOKEN);

export const signInUser = async (accesToken, refreshToken) => {
    storeAccessToken(accesToken).then(storeRefreshToken(refreshToken))
};

export const signOutUser = async (accesToken, refreshToken) => {
    deleteAccessToken().then(deleteRefreshToken);
};

export const isUserSignedIn = async() => {
    const token = await getAccessToken();
    if (token != null) {
        return new Promise.resolve(true)
    }
    else {
        return new Promise.resolve(false)
    }
};
