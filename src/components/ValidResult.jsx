import React, { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

export default function ValidResult({pause}) {

    const nav = useNavigate()
    
    const [pass,setPass] = useState('')

    const valid = ()=>{
        const validPass = process.env.REACT_APP_PASSWORD;
        if(pass === validPass ){
            nav('/result')
        }
        else{
            alert('error')
        }
    }

    useEffect(()=>{
        pause()
    },[])

    return (
    <div>
          <div className="mb-md-5 mt-md-4 pb-5">
                <h1 className="fw-bold mb-2 text-uppercase">המבחן הסתיים</h1>
                <p className="text-white-50 mb-5">הכנס סיסמה להצגת התוצאות</p>
                <div className="form-outline form-white mb-4">
                    <input onChange={(element=>{setPass(element.target.value)})} style={{ textAlign: 'center' }} placeholder="סיסמה" type="password" id="typePasswordX" className="form-control form-control-lg" />
                </div>
                <button onClick={valid} className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
            </div>
            <div>
            <p className="mb-0">
                    @SVCOLLEGE כל הזכויות שמורות
                </p>
            </div>
    </div>
  )
}
