import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

// MUI | ANT-D :
import TextField from '@mui/material/TextField';
import { Button } from 'antd';

// Assets :
import google from '../../Assets/google.png'

// APIs :
import { LoginWithEmailAPI } from '../../API/Login';
// Helpers :
import { toast } from 'react-toastify';

// CSS :
import './Auth.scss'





const Auth = () => {

  const [email, setEmail] = useState("")

  const handleEmailLogin = async () => {
    let res = await LoginWithEmailAPI(email)
    if (res.error != null) {
      toast.error(res.error)
    } else {
      console.log(res.data);
    }
  }

  const handleGoogleLogin = async (response) => {
    if (response.credential) {
      let userObject = JWTDECODE(response.credential);
      console.log(userObject);
    } else {
      console.log(response);
    }

  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleGoogleLogin,
    });
    google.accounts.id.renderButton(document.getElementById("googleDiv"), {
      theme: "filled_blue",
      size: "large",
      text: "signup_with",
      width: "100%",
    });
  }, []);
  return (
    <>
      <div className="AuthMain">
        <h2 className='heading'>Welcom to Auto Chat Bot</h2>
        <TextField className='inputField' id="outlined-basic" label="Email" variant="outlined" />
        <Button className='BtnSubmit' onClick={handleEmailLogin}>Continue</Button>
        <div className="border"></div>
        <div id="googleDiv" onClick={Navigate('/chat')}></div>
        {/* <Button className='googleBtn'><img src={google} alt="" />  Login With Google</Button> */}
      </div>
    </>
  )
}


export default Auth;