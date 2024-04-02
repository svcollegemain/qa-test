import React from 'react'
import store from '../StateManager/store'
import { useNavigate } from 'react-router-dom'


export default function ChooseTest({ info, title }) {
    
    const nav = useNavigate()

    const choose = ()=>{
        
        store.dispatch({type:'testName',payload:title})
        if(title === 'general')
            nav("/generaltest", { replace: true });
        else
            nav("/questions", { replace: true });
    }

    return (
        <div>
            <div onClick={choose} className="card mb-3 text-white bg-secondary">
                <div className="row g-0">
                    <div className="col-12">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">
                                {info}
                            </p>
                            <a className="btn btn-primary stretched-link">
                                <small >התחל את המבחן</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
