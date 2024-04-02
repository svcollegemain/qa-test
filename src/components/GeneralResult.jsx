import React, { useState } from 'react'
import LOGO from '../Images/LOGO.png'
import store from '../StateManager/store'
import { questions } from '../TestDescription/questions'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

export default function GeneralResult() {

    const result = ()=>{

        let answerArr = [...store.getState().generalReducer]

        if(answerArr[0] < 3 || answerArr[1] < 3){
            return(
                <div>
                  <label>QA</label>  <Progress percent={100} status="success" />
                  <label>Fullstack</label>  <Progress percent={20} status="active" />
                  <label>Cyber</label> <Progress percent={20} status="active" />
                  <label>Gaming</label>  <Progress percent={20} status="active" />
                </div>
            )
        }
        else{
            let subjectArr = {
            fullstack:answerArr[2]*10+answerArr[3]*10,
            qa:answerArr[4]*10+answerArr[5]*10,
            gaming:answerArr[6]*20,
            cyber:answerArr[7]*10+answerArr[8]*10};
            console.log(subjectArr)
           return( <div>
                  <label>QA</label>  <Progress percent={subjectArr.qa} status={calcResultStatus(subjectArr.qa)} />
                  <label>Fullstack</label>  <Progress percent={subjectArr.fullstack} status={calcResultStatus(subjectArr.fullstack)} />
                  <label>Cyber</label> <Progress percent={subjectArr.cyber} status={calcResultStatus(subjectArr.cyber)} />
                  <label>Gaming</label>  <Progress percent={subjectArr.gaming} status={calcResultStatus(subjectArr.gaming)} />
            </div>)
        }

    }

    const calcResultStatus = (val)=>{
        if(val > 80){
            return 'success'
        }
        else if(val > 30){
            return 'active'
        }
        else{
            return 'error'
        }
    }

    return (
        <div>
            <div className="mb-md-5 mt-md-4 pb-5">
                <img src={LOGO} alt="logo" />
                {result()}
            </div>
            <p className="mb-0">
                    @SVCOLLEGE כל הזכויות שמורות
                </p>
        </div>
    )

}

