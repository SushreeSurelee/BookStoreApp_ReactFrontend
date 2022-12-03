import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from '../login';
import SignUp from '../signup';
import ForgetPassword from '../forgetPassword';
import Dashboard from '../dashboard/dashboard';

export default function Routerone() {
    return (
      <div>
          <Router>
              <Routes>
                  <Route exact path='/' element={<Login/>}/>
                  <Route  path='/signup' element={<SignUp/>}/>
                  <Route  path='/forgetPassword' element={<ForgetPassword/>}/>
                  <Route  path='/dashboard' element={<Dashboard/>}/>
              </Routes>
          </Router>
      </div>
    )
  }

