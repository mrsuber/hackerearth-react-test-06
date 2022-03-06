import axios from 'axios'
import {baseUrl} from './baseUrl'

export const getDataAPI = async () =>{

  const res = await axios.get(baseUrl)

  return res;
}
