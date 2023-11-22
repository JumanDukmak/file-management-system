
const storagePrefix = 'bulletproof_react_';

const storage = {
    getToken: () => {
        return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) || 'null');
    },
    setToken: (token) => {
        window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
    },
    clearToken: () => {
        window.localStorage.removeItem(`${storagePrefix}token`);
    },
};

export default storage