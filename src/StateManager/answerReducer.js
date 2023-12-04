
export default function answerReducer(state=[],action){ // state : [], action={type:'',payload:{}}
    switch(action.type){
        case 'answer':
            return [...state,action.payload]
        
        default:
            return state
        
    }

}