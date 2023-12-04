import { configureStore } from '@reduxjs/toolkit'
import answerReducer from './answerReducer'
import generalReducer from './generalReducer'
import chooseTestsReducer from './chooseTestsReducer'

const reducer = {
    answerReducer,
    chooseTestsReducer,
    generalReducer
    
}


const store = configureStore({
    reducer
})
export default store


