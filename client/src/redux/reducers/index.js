import {combineReducers} from 'redux'

import alert from './alertReducer'
import theme from './themeReducer'
import home from './homeReducer'



export default combineReducers({

alert,
theme,
home,

})
