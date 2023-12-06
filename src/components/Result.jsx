import React, { useState } from 'react'
import LOGO from '../Images/LOGO.png'
import store from '../StateManager/store'
import { questions } from '../TestDescription/questions'

export default function Result() {

    const clacGrade = () => {
        let testArr = [...questions[store.getState().chooseTestsReducer]];
        let answerArr = [...store.getState().answerReducer]
        let testName = store.getState().chooseTestsReducer;
        let str =`${testName} :לא מתאים לקורס `
        let grade = 0;
        testArr.forEach((val, index) => {
            if (val.answer == answerArr[index]) grade++;
        })
        var finalGrade = (grade / testArr.length) * 100;
        if(finalGrade>= 60)
        {
            return (
                <div style={{backgroundColor:'green'}} className="card-body">
                 קיימת התאמה לקורס   
                {/* <div>{parseInt(finalGrade)}</div>     */}
        </div>
        )
           
        }

        else if(finalGrade>= 50)
        {
            return (
                <div style={{backgroundColor:'green'}} className="card-body">
                 קיימת התאמה גבולית לקורס   
                 {/* <div>{parseInt(finalGrade)}</div>     */}
        </div>
        )
           
        }

        else{
            
                return (
                    <div style={{backgroundColor:'red'}} className="card-body">
                    כדאי לבדוק התאמה לקורס אחר     
                      {/* <div>{parseInt(finalGrade)}</div>     */}
            </div>
            )
               
            }
        }
        
        // if(finalGrade > 70){
        //     return (
        //         <div style={{backgroundColor:'green'}} className="card-body">
        //             מצוין, מתאים מאוד
        //             <div>{parseInt(finalGrade)}</div>    
        //         </div>
        //     )
        // }
        // else if(finalGrade >= 30){
        //     return (
        //         <div style={{backgroundColor:'green'}} className="card-body">
        //             יצאת מתאים למקצוע
        //             <div>{parseInt(finalGrade)}</div>  
        //             </div>
        //     )
        // }
        // else{
        //     return (
        //         <div style={{backgroundColor:'red'}} className="card-body">
        //             לא מתאים למקצוע
        //             <div>{parseInt(finalGrade)}</div>  
        //             </div>
        //     )
        // }

    

    return (
        <div>
            <div className="mb-md-5 mt-md-4 pb-5">
            <div className="card mb-3 text-white bg-secondary">
                <div className="row g-0">
                    <div className="col-12">
                        {clacGrade()}
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
                {questions[store.getState().chooseTestsReducer].map((value, index) => {
                    return (
                        <div className="card mb-3 text-white bg-secondary">
                            <div className="row g-0">
                                <div className="col-12">
                                    <div className="card-body">
                                    {value.title.charAt(0) == '/'? <img src={value.title}/> : <h2>{value.title}</h2>}
                                        {/* <h2 className="card-title">{value.title}</h2> */}
                                        {value.options.map((element, i) => {

                                            let bgColor = null
                                            let borderValue = null
                                            if (i == store.getState().answerReducer[index]) {
                                                if (store.getState().answerReducer[index] == questions[store.getState().chooseTestsReducer][index].answer) {
                                                    bgColor = 'green'
                                                }
                                                else {
                                                    bgColor = 'red'
                                                }

                                            }
                                            if (i == questions[store.getState().chooseTestsReducer][index].answer) {
                                                borderValue = '1px black solid'
                                            }

                                            return (
                                                <p style={{ backgroundColor: bgColor, border: borderValue }} className="card-text">
                                                    <h6>{element}</h6>
                                                </p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
           

        </div>
    )
}

