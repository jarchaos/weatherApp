import { SET_TOKEN, AppActionType } from '../types/appTypes';

export const changeValueAction = (payload:string):AppActionType=>({
    type:SET_TOKEN,
    payload
})