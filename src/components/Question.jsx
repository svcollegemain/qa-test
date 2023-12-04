import React from 'react'
import store from '../StateManager/store'

export default function Question({ title, list, quNO }) {
   
    const nextQuestion = (answer)=>{
        console.log('check');
        store.dispatch({type:'answer',payload:answer})
        console.log(store.getState());
        quNO()
        
    }
   
    return (
        <div>
            {/* <h3>
                {title}
            </h3> */}
            {title.charAt(0) == '/'? <img src={title}/> : <h3>{title}</h3>}
            {list.map((q,index) => (
                <div>
                    <div onClick={()=>{nextQuestion(index)}} className="card mb-3 text-white bg-secondary">
                        <div className="row g-0">
                            <div className="col-12">
                                <div className="card-body btn btn-link stretched-link">
                                    <input style={{color:'white'}} class="btn" type="button" value={q}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
