import React, { useState } from 'react'
import store from '../StateManager/store'
import { questions } from '../TestDescription/questions'
import { useNavigate } from "react-router-dom";
import LOGO from '../Images/LOGO.png'

export default function GeneralTest() {

    const nav = useNavigate()
    const [flag, setFlag] = useState(false)
    const [test, setTest] = useState([...questions['general'].test1])
    const [test1Index, setTest1Index] = useState(0)
    const [test2Index, setTest2Index] = useState(0)

    const nextQuestion = (answer) => {
        store.dispatch({ type: 'answerGeneral', payload: answer+1 })
        if (!flag) {

            if (test.length === test1Index + 1) {
                setFlag(!flag)
                setTest([...questions['general'].test2])
            }
            setTest1Index(test1Index + 1)
        }
        else {
            if (test.length === test2Index + 1) {
                nav('/generalresult')
            }
            else {
                setTest2Index(test2Index + 1)
            }
        }

    }

    const show = () => {
        if (!flag) {
            let tempResult = [1, 2, 3, 4, 5]
            return (
                <div>
                    <h3>
                        {test[test1Index].title}
                        {tempResult.map((q, index) => (
                            <div>
                                <div onClick={() => { nextQuestion(index) }} className="card mb-3 text-white bg-secondary">
                                    <div className="row g-0">
                                        <div className="col-12">
                                            <div className="card-body btn btn-link stretched-link">
                                                <input style={{ color: 'white' }} className="btn" type="button" value={q}></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </h3>
                </div>
            )
        }//end if
        else {
            let tempResult = [1, 2, 3, 4, 5]
            return (
                <div>
                    <h3>
                        {test[test2Index].title}
                    </h3>
                    {tempResult.map((q, index) => (
                        <div>
                            <div onClick={() => { nextQuestion(index) }} className="card mb-3 text-white bg-secondary">
                                <div className="row g-0">
                                    <div className="col-12">
                                        <div className="card-body btn btn-link stretched-link">
                                            <input style={{ color: 'white' }} class="btn" type="button" value={q}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            )

        }
    }

    return (
        <div>
            <div className="mb-md-5 mt-md-4 pb-5">
                <img src={LOGO} alt="logo" />
                {show()}
            </div>
            <p className="mb-0">
                    SVCOLLEGE כל הזכויות שמורות@
            </p>
        </div>
    )
}