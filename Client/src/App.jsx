import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

// Components :
import Auth from './Components/Auth/Auth';
import Chat from './Components/Chat/Chat';




const App = () => {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path='/' element={<Chat />}></Route>
          <Route path='/login' element={<Auth />}></Route>
          {/* <Route path='/chat' element={<Chat />}></Route> */}
          <Route path="*" element={<Auth />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
