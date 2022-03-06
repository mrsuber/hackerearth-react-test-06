import {GLOBALTYPES} from './globlaTypes'
import {getDataAPI} from '../../utils/fecthData'

export const HOME_TYPES ={
  GET_DATA:'GET_HOME_DATA',
  LOADING: 'LOADING_HOME'
}

export const getData = () => async (dispatch) =>{
  try{
    dispatch({type:HOME_TYPES.LOADING, payload:true})
    const res = await getDataAPI()
    dispatch({type:HOME_TYPES.GET_DATA, payload:res})
    dispatch({type:HOME_TYPES.LOADING, payload:false})

  }catch(err){
    dispatch({type:GLOBALTYPES.ALERT, payload: {error:err.response.data}})

  }
}
