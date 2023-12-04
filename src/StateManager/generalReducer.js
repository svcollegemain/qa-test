
export default function generalReducer(state=[],action){ // state : [], action={type:'',payload:{}}
    switch(action.type){
        case 'answerGeneral':
            return [...state,action.payload]
        
        default:
            return state
        
    }

}