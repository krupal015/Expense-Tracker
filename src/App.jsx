import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Auth/login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboards/Home';
import Income from './pages/Dashboards/Income';
import Expense from "./pages/Dashboards/Expense";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Home />} />
           <Route path= "/income" exact element = {<Income/>} />
           <Route path= "/income" exact element = {<Expense/>} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;


const Root = () =>{
  const isAuthenticated = !!localStorage.getItem
  ("token")

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to ="/login" />
  );
};