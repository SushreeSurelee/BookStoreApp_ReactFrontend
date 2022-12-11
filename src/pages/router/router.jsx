import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from '../login';
import SignUp from '../signup';
import ForgetPassword from '../forgetPassword';
import Dashboard from '../dashboard/dashboard';
import BookDetails from '../../components/bookDetails/bookDetails';
import Cart from '../../components/cart/cart';
import Wishlist from '../../components/wishlist/wishlist';

export default function Routerone() {
    return (
      <div>
          <Router>
              <Routes>
                  <Route exact path='/' element={<Login/>}/>
                  <Route  path='/signup' element={<SignUp/>}/>
                  <Route  path='/forgetPassword' element={<ForgetPassword/>}/>
                  <Route  path='/dashboard' element={<Dashboard/>}/>
                  <Route  path='/BookDetail' element={<BookDetails/>}/>
                  <Route  path='/cart' element={<Cart/>}/>
                  <Route  path='/wishlist' element={<Wishlist/>}/>
              </Routes>
          </Router>
      </div>
    )
  }

