import { Dispatch } from "react";

export const GET_USER_INFO = "GET_USER_INFO";


//need to make model still for user
export const getUserInfo = (userInfo: any) => {
    return (dispatch: Dispatch<any>) => {
        dispatch({ type: GET_USER_INFO, payload: userInfo });
    };
}