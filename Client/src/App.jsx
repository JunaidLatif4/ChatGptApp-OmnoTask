import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

// Components :
import Auth from './Screens/Auth/Auth';
import Chat from './Screens/Chat/Chat';

// Helpers :
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  return (
    <div className="App">

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Router >
        <Routes>
          {/* <Route path='/' element={<Chat />}></Route> */}
          <Route path='/' element={<Auth />}></Route>
          <Route path='/chat' element={<Chat />}></Route>
          <Route path="*" element={<Auth />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
