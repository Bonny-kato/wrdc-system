import { getValueFromLocalStorage } from "../../hooks/useLocalStorageState";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const request = async (type, endpoint, data) => {
    console.log(BASE_URL + endpoint)
    if (!navigator.onLine) throw new Error('Offline!');

    const token = getValueFromLocalStorage('authToken', null);

    const requestProps = {
        method: type,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    };

    if (data) requestProps.body = JSON.stringify(data);

    const response = await fetch(BASE_URL + endpoint, requestProps);

    // if (response.status == 401 && window.location.href.indexOf("/login") == -1) {
    //     const event = new Event('session-expired');
    //     window.dispatchEvent(event);

    //     return;
    // }

    const responseData = await response.json();

    if (!response.ok) throw responseData;

    return responseData;
};

export const get = async endpoint => {
    return await request('get', endpoint);
};

export const patch = async (endpoint, data) => {
    return await request('patch', endpoint, data);
};

export const put = async (endpoint, data) => {
    return await request('put', endpoint, data);
};

export const post = async (endpoint, data) => {
    return await request('post', endpoint, data);
};

export const remove = async endpoint => {
    return await request('delete', endpoint);
};