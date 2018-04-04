import { combineReducers } from 'redux'
import formData from './formReducer'

const rootReducer = combineReducers({
  formData : formData
})

export default rootReducer;