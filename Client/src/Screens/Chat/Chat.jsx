import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// MUI | ANT-D :
import { Input } from "antd";
import CircularProgress from '@mui/material/CircularProgress';


// Assets | ICONS :
import { CgEnter } from 'react-icons/cg';


// APIs :
import { ChatRequestAPI } from "../../API/Chat"
// Helpers :
import { toast } from "react-toastify";

// CSS :
import "./Chat.scss";






const Chat = () => {
  let location = useLocation()

  const [message, setMessage] = useState("")
  const [chatData, setChatData] = useState([])
  const [loading, setLoading] = useState(false)



  const chatStart = async () => {
    setLoading(true)
    if (message) {
      let res = await ChatRequestAPI(message)
      if (res.error != null) {
        toast.error(res.error)
      } else {
        console.log(res.data);
        setLoading(false)

        setChatData([
          ...chatData,
          {
            message: res.data.message,
            result: res.data.choices
          }
        ])
        setMessage("")
      }
    } else {
      toast.error("Please Type a Message To Start Chat")
    }
    setLoading(false)
  }

  return (
    <>
      <div className="chatMainContainer">
        <div className="head">
          Welcom <strong>{location?.state?.UserData?.name || location?.state?.UserData?.email || "AnonymousUser"}</strong>
        </div>
        <div className="chatMain">
          <div className="chatAll">

            {
              chatData?.map((data) => {
                return (
                  <>
                    {/* <div className="headd">Query:</div> */}
                    <div className="message">{data?.message}</div>
                    {/* <div className="response">Response:</div> */}
                    {
                      data.result.map((res) => {
                        return (
                          <div className="chat">{res.text}</div>
                        )
                      })
                    }
                  </>
                )
              })
            }
          </div>
          <div className="inputField">
            <Input className="input" disabled={loading} onPressEnter={chatStart} placeholder="Start Chat" value={message} onChange={(event) => setMessage(event.target.value)} suffix={loading === true ? <CircularProgress size={18} style={{ color: "white" }} /> : <CgEnter className="enterData" onClick={chatStart} />} />
          </div>
        </div>
      </div>
    </>
  );
}


export default Chat;