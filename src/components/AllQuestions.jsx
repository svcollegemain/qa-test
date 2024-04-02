import React,{useState,useEffect} from 'react'
import LOGO from '../Images/LOGO.png'
import {questions} from '../TestDescription/questions.js'
import Question from './Question.jsx'
import ValidResult from './ValidResult.jsx'
import store from '../StateManager/store.js'
import { useTimer } from 'react-timer-hook';
import Result from './Result.jsx'

export default function AllQuestions() {
    
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    const {
        seconds,
        minutes,
        pause,
        restart,
    } = useTimer(time)
    
    
    const [test,setTest] = useState([...questions['qa']])
    const [quNO,setQuNO] = useState(0)

    const nextQuestion = ()=>{
        setQuNO(quNO+1)
    }
    useEffect(()=>{
        setTest([...questions[store.getState().chooseTestsReducer]])
        time.setSeconds(time.getSeconds());
        restart(time)

    },[])

    return (
        <div>
            <div className="mb-md-5 mt-md-4 pb-5">
                <img src={LOGO} alt="logo" /><br />
                <div style={{fontSize:'30px',color:'white'}}>
                <span>{minutes}</span>:<span>{seconds}</span>
                </div>
                {quNO !== test.length?<Question quNO={nextQuestion} title={test[quNO].title} list={test[quNO].options}/>:<Result/>}
            </div>
             {/* <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>
    </div> */}
        </div>
    )
}
