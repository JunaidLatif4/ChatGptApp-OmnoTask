import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from 'antd';

// Images
import google from '../../Assets/google.png'

// apis
import checkEmailAPI from '../../API/Login/Login'
// Stylig
import './Auth.scss'
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

export default function Auth() {

    const handleGoogleLogin = async (response) => {
        if (response.credential) {
            let userObject = 'junaidlatif@gmail.com'
        //   let userObject = JWTDECODE(response.credential);
          let res = await checkEmailAPI(userObject.email, true);
          if (res.error != null) {
            toast.error(res.error, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            if (res.data.registered == true) {
              localStorage.setItem("token", res.data.token);
              toast.success("Login Success", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              setTimeout(() => {
                window.location.href = "/dashboard";
              }, 2500);
            } else {
              Navigate("/register", {
                state: {
                  userData: {
                    email: userObject.email,
                    firstName: userObject.given_name,
                    lastName: userObject.family_name,
                  },
                  step: 1,
                },
              });
            }
          }
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
        <Button className='BtnSubmit' onClick={Navigate('/chat')}>Continue</Button>
        <div className="border"></div>
        <div id="googleDiv"  onClick={Navigate('/chat')}></div>
        {/* <Button className='googleBtn'><img src={google} alt="" />  Login With Google</Button> */}
    </div>
    </>
  )
}
