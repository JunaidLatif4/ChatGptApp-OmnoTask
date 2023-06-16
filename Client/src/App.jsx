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





const App = () => {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route exact path='/login' element={<Auth />}></Route>
          <Route path="*" element={<Auth />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
