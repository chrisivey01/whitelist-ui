import { AnyAction } from "redux";
import { GET_USER_INFO } from "./user.actions";

const initialState = {
    employee: {},
};

export const userReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                employee: action.payload,
            };
        default:
            return state;
    }
};
