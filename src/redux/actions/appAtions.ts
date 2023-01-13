import { IResponse } from '../../models/interfaces/Icities';
import { SET_CITY, AppActionType, SET_LOADING } from '../types/appTypes';

export const setCity = (payload:IResponse| null):AppActionType=>({
    type:SET_CITY,
    payload
})
export const setLoading = (payload:boolean):AppActionType=>({
    type:SET_LOADING,
    payload
})

export const actionResponse = (data:IResponse)=>
 async (dispatch:any) => {
  setTimeout(()=>dispatch(setLoading(false)), 1000);
  console.log(typeof(data.cod))
  if(data.cod === '404'){
    dispatch(setCity(null))
  }else{
    dispatch(setCity(data));
  }
  
 }


export const searchCity = (name:string) =>
  async (dispatch: any) => {
    dispatch(setLoading(true))
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=6f6812c7e8cf3ab2f3eb327d375b7b3b`)
     .then((response) => response.json())
     .then((data:IResponse) => 
     dispatch(actionResponse(data))
      ).catch(()=>dispatch(setLoading(false)))

  };