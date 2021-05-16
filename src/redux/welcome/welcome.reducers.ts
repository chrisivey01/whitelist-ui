import { AnyAction } from "redux";
import { GET_USER_INFO } from "./welcome.actions";

const initialState = {
    user: {},
};

export const welcomeReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};
