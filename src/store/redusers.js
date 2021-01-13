
import {ACTION_TYPE_FIRST_NAME, ACTION_TYPE_LAST_NAME, INCREMENT, DECREMENT} from './actions';

const initialState = {
    firstName: '',
    lastName: '',
    count: 0
  }

export const rootReduser = ( state = initialState , action) => {
      switch(action.type){
            case ACTION_TYPE_FIRST_NAME:
              return{ ...state , firstName:action.payload };
            case ACTION_TYPE_LAST_NAME:
              return{ ...state , lastName:action.payload };
            case INCREMENT:
              return{ ...state, count:action.payload }
            case DECREMENT:
              return{ ...state, count:action.payload }
      }
    return state
  }
  