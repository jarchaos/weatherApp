export const SET_TOKEN = 'SET_TOKEN'; 
export const GET_TOKEN = 'GET_TOKEN'; 
interface ISetToken{
    type: typeof SET_TOKEN;
    payload: string;
}

interface IGetToken{
    type: typeof GET_TOKEN;
    payload: string;
}
export type AppActionType = ISetToken | IGetToken;