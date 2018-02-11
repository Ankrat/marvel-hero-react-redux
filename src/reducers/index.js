import { combineReducers } from "redux";
import {
    REQUEST_HEROS,
    RECEIVE_HEROS,
    SELECT_HERO,
    RECEIVE_HERO
} from "../actions";

const initialState = {
    herosList: [],
    heroId: null,
    heroData: [],
    isFetching: false
};

const reducerHeros = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_HEROS:
            return { ...state, isFetching: action.isFetching };
        case RECEIVE_HEROS:
            return {
                ...state,
                isFetching: action.isFetching,
                herosList: action.herosList
            };
        default:
            return state;
    }
};
const reducerHero = (state = initialState, action) => {
    console.log("action called => ", action);

    switch (action.type) {
        case SELECT_HERO:
            return {
                ...state,
                isFetching: action.isFetching,
                heroId: action.heroId
            };
        case RECEIVE_HERO:
            return {
                ...state,
                isFetching: action.isFetching,
                heroData: action.heroData.results
            };
        default:
            return state;
    }
};

const reducer = combineReducers({
    reducerHeros,
    reducerHero
});

export default reducer;
