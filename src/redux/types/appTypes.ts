import { IResponse } from '../../models/interfaces/Icities';
export const SET_CITY = 'SET_CITY'; 
export const SET_LOADING = 'SET_LOADING'; 
interface ISetCity{
    type: typeof SET_CITY;
    payload: IResponse | null;
}
interface ISetLoading{
    type: typeof SET_LOADING;
    payload: boolean;
}
export type AppActionType = ISetCity | ISetLoading;