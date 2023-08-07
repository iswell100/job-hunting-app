import { SignInService } from "../../services/auth";
import * as types from './constants'

export const postSignin = (dataParams) => async (dispatch) => {
    try {
        dispatch({
            type: types.POST_SIGNIN_LOADING,
            payload: {
                loading: true,
            },
        });

        const data = await SignInService(dataParams);

        dispatch({
            type: types.POST_SIGNIN_SUCCESS,
            payload: {
                data: data.data.user,
            },
        });
    } catch (error) {
        dispatch({
            type: types.POST_SIGNIN_FAILED,
            payload: {
                error, 
            },
        });
    }
};