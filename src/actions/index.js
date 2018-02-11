import API_service from "../services/API_service";

// Action's types as constant
export const REQUEST_HEROS = "REQUEST_HEROS";
export const RECEIVE_HEROS = "RECEIVE_HEROS";
export const SELECT_HERO = "SELECT_HERO";
export const RECEIVE_HERO = "RECEIVE_HERO";

// ActionCreators
export const requestHeros = () => ({
    type: REQUEST_HEROS,
    isFetching: true,
    herosList: []
});

export const receiveHeros = responseArray => ({
    type: RECEIVE_HEROS,
    herosList: responseArray,
    isFetching: false
});

export const selectHero = id => ({
    type: SELECT_HERO,
    heroId: id
});

export const receiveHero = responseArray => ({
    type: RECEIVE_HERO,
    heroData: responseArray
});

export const fetchHeros = () => {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return dispatch => {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        dispatch(requestHeros());

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.

        return API_service.getHeros().then(res => {
            // Do not use catch, because that will also catch
            // any errors in the dispatch and resulting render,
            // causing a loop of 'Unexpected batch number' errors.
            // https://github.com/facebook/react/issues/6895

            console.log("HEROS LIST => ", res.data.results);
            // Here, we update the app state with the results of the API call.
            dispatch(receiveHeros(res.data.results));
        });
    };
};
export const fetchHero = id => {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return dispatch => {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        dispatch(selectHero(id));

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.

        return API_service.getSingleHero(id).then(res => {
            // Do not use catch, because that will also catch
            // any errors in the dispatch and resulting render,
            // causing a loop of 'Unexpected batch number' errors.
            // https://github.com/facebook/react/issues/6895

            console.log("HERO DATA => ", res.data);
            // Here, we update the app state with the results of the API call.
            dispatch(receiveHero(res.data));
        });
    };
};
