import md5 from "md5";

const marvel = {
    BASE_URL: "http://gateway.marvel.com:80",
    API_PUBLIC: "298bab46381a6daaaee19aa5c8cafea5",
    API_PRIVATE: "b0223681fced28de0fe97e6b9cd091dd36a5b71d"
};

/**
 * @function
 * @name: constructURL
 *
 * @param {Strin}: API_endpoint, is KEY of the endpoint URL
 * @description: construct the string url to be use by `fetch`API
 * @example: "/character/"
 * @example: "/character/123456"
 * @returns {String}
 */
const constructURL = API_endpoint => {
    const ts = Date.now();
    const privateKey = marvel.API_PRIVATE;
    const publicKey = marvel.API_PUBLIC;
    const hash = md5(ts + privateKey + publicKey);
    const url = `${
        marvel.BASE_URL
    }/${API_endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    return url;
};

/**
 * @function
 * @name: getHeros
 *
 * @param {Void}
 * @description: Fetch heros to marvel API
 *
 * @returns {Promise/Error}
 */
const getHeros = () => {
    const API_endpoint = "v1/public/characters";

    return fetch(constructURL(API_endpoint))
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log(
                "There has been a problem with your fetch operation: ",
                error.message
            );
            return error;
        });
};

/**
 * @function
 * @name: fetchHero
 *
 * @param {String:Number}: id of the Hero to fetch detail to
 * @description: Fetch heros to marvel API
 *
 * @returns {Promise/Error}
 */
const getSingleHero = id => {
    const defaultID = id || 1009149;
    const API_endpoint = `v1/public/characters/${defaultID}`;

    return fetch(constructURL(API_endpoint))
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error("Network response was not ok.");
        })
        .then(function(data) {
            return data;
        })
        .catch(function(error) {
            console.log(
                "There has been a problem with your fetch operation: ",
                error.message
            );
            return error;
        });
};

const API_service = {
    getHeros: getHeros,
    getSingleHero: getSingleHero
};

export default API_service;
