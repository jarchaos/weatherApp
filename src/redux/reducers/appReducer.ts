import { IAppReducer } from '../../models/interfaces/appReducer';
import { SET_TOKEN, AppActionType } from '../types/appTypes';
const initialState: IAppReducer = {
 token:'hello there'
};

const appReducer = (state = initialState, action: AppActionType): IAppReducer => {
  switch (action.type) {
    case SET_TOKEN:
      return {...state, token:action.payload};
    
    default:
      return state;
  }
};

export default appReducer;