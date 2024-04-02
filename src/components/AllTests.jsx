import React from 'react'
import LOGO from '../Images/LOGO.png'
import ChooseTests from './ChooseTest'
import {tests} from '../TestDescription/testInfo'


export default function AllTests() {
    return (
        <div>
            <div className="mb-md-5 mt-md-4 pb-5">
                <img src={LOGO} alt="logo" />
                <h3>
                    בחר את המבחן שלך
                </h3>
                {tests.map((test)=>(
                    <ChooseTests key='QA' logo={test.logo} info={test.info} title='qa'/>
                ))}
               <p className="mb-0">
                    @SVCOLLEGE כל הזכויות שמורות
                </p>
            </div>
        </div>
    )
}
