import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// MUI | ANT-D :
import TextField from '@mui/material/TextField';
import { Button } from 'antd';

// Assets :
import google from '../../Assets/google.png'

// APIs :
import { LoginWithEmailAPI } from '../../API/Login';
import { GoogleLogin } from "react-google-login"
// Helpers :
import { toast } from 'react-toastify';
import JWTDECODE from "jwt-decode";

// CSS :
import './Auth.scss'





const Auth = () => {
  let Navigate = useNavigate()
  const [email, setEmail] = useState("")

  const handleEmailLogin = async () => {

    return Navigate("/chat", { state: { UserData: { email } } })

    let res = await LoginWithEmailAPI(email)
    if (res.error != null) {
      toast.error(res.error)
    } else {
      console.log(res.data);
    }
  }

  const handleGoogleLogin = async (response) => {
    console.log("Google Response", response.profileObj);
    if (response.profileObj) {
      Navigate("/chat", { state: { UserData: response.profileObj } })
    } else {
      toast.error("Google UserData Not Found")
    }
  };
  const failureHandler = (res) => {
    console.log("GOOGLE Login FAIL ==== ", res);
    toast.error("Google Login Fail")
  }

  return (
    <>
      <div className="AuthMain">
        <h2 className='heading'>Welcom to personal Chat Bot</h2>
        <TextField className='inputField' id="outlined-basic" label="Email" variant="outlined" onChange={(event) => setEmail(event.target.value)} />
        <Button className='BtnSubmit' onClick={handleEmailLogin}>Continue</Button>
        <div className="border"></div>
        <GoogleLogin
          className="google-item"
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={handleGoogleLogin}
          onFailure={failureHandler}
          cookiePolicy={"single_host_origin"}
          style={{ width: "100%" }}
        />
        {/* <Button className='googleBtn'><img src={google} alt="" />  Login With Google</Button> */}
      </div>
    </>
  )
}


export default Auth;