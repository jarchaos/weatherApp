import { IAppReducer } from '../../models/interfaces/appReducer';
import { SET_CITY,SET_LOADING, AppActionType } from '../types/appTypes';
const initialState: IAppReducer = {
 cityData:null, loading:false
};

const appReducer = (state = initialState, action: AppActionType): IAppReducer => {
  switch (action.type) {
    case SET_CITY:
      return {...state, cityData:action.payload ? {...action.payload} : null};
    case SET_LOADING:
      return {...state, loading:action.payload};
    
    default:
      return state;
  }
};

export default appReducer;