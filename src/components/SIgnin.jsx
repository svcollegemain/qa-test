import React, { useState } from "react";
import LOGO from '../Images/LOGO.png'
import { useNavigate } from "react-router-dom";


export default function Signin() {
    
    const [username,setUsername] = useState('')
    const [pass,setPass] = useState('')
    
    const nav = useNavigate()

    const valid = ()=>{
        // const validUser = process.env.REACT_APP_MAIL_VALID;
        // const validPass = process.env.REACT_APP_PASSWORD;
        // if(username === validUser && pass === validPass ){
        //     nav('/choose')
        // }
        // else{
        //     alert('error')
        // }
        nav('/choose')
    }

    

    return (
        <div>

            <div className="mb-md-5 mt-md-4 pb-5">
                <img src={LOGO} alt="" />
                <h2 className="fw-bold mb-2 text-uppercase">מבחן התאמה</h2>
                {/* <p className="text-white-50 mb-5">הכנס שם משתמש וסיסמה</p>
                <div className="form-outline form-white mb-4">
                    <input onChange={(element=>{setUsername(element.target.value)})} style={{ textAlign: 'center' }} placeholder="אימייל" type="email" id="typeEmailX" className="form-control form-control-lg" />
                </div>
                <div className="form-outline form-white mb-4">
                    <input onChange={(element=>{setPass(element.target.value)})} style={{ textAlign: 'center' }} placeholder="סיסמה" type="password" id="typePasswordX" className="form-control form-control-lg" />
                </div> */}
                <button onClick={valid} className="btn btn-outline-light btn-lg px-5" type="submit">START</button>
            </div>
            <div>
                <p className="mb-0">SVCOLLEGE כל הזכויות שמורות@
                </p>
            </div>
        </div>
    );
}