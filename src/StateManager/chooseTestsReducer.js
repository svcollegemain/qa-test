
export default function chooseTestsReducer(state='',action){ // state : [], action={type:'',payload:{}}
    switch(action.type){
        case 'testName':
            return action.payload
        
        default:
            return state
        
    }

}