import axios from 'axios';
import { getAccessToken, deleteAccessToken } from '../actions/authentication';
// http://192.168.220.250:3000/
export const endpoint = 'http://86.50.147.229:4040/api';
import { LOGIN_SCREEN } from '../constans/screens';

var axiosInstance = axios.create();
// Override timeout default for the library
// Now all requests will wait 2.5 seconds before timing out
axiosInstance.defaults.timeout = 2500;
axiosInstance.defaults.xsrfCookieName = "csrftoken";
axiosInstance.defaults.xsrfHeaderName = "X-CSRFToken";


function getAuthToken() {
    const token = getStoredToken();
    if (token) {
        return token.auth_token;
    }
    return false;
}

export const authorizedApi = async(options) => {
    if (!options.method || !options.url) {
        // console.error('Invalid clientApi call - required arguments are missing');
        return Promise.reject('Invalid api call');
    }

    const token = await getAccessToken();
    if (token) {
        options.headers = {
            'Authorization': `Token ${token}`,
        };
    }
    else {

    }
    // console.log(`axios called: ${options.method} - ${options.url} with options: `, options);

    return axiosInstance(options);
};

export const unauthorizedApi = async(options) => {
    if (!options.method || !options.url) {
        // console.error('Invalid clientApi call - required arguments are missing');
        return Promise.reject('Invalid api call');
    }

    return axiosInstance(options);
};


const delayedPromise = (result, delay, shouldResolve) => {
    return new Promise((resolve, reject) => setTimeout(() => {
        if (shouldResolve) return resolve(result);
        return reject(result);
    }, delay));
};

export const delayedSuccess = (result, delay) => {
    return delayedPromise(result, delay, true);
};

export const delayedFailure = (result, delay) => {
    return delayedPromise(result, delay, false);
};

