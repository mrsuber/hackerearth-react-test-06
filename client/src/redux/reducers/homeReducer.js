import {HOME_TYPES} from '../actions/homeAction'

const initialState = {
  loading:false,
  data:[]
}

const homeReducer = (state = initialState, action) => {
  switch(action.type){
    case HOME_TYPES.LOADING:
      return{
        ...state,
        loading:action.payload
      }
      case HOME_TYPES.GET_DATA:
      return{
        ...state,
        data:action.payload.data,
      }
      default:
      return state;
  }
}

export default homeReducer
