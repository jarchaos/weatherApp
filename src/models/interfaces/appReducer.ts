import { IResponse } from "./Icities";

export interface IAppReducer{
    cityData:IResponse | null,
    loading:boolean
}