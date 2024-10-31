import React,{ useState } from 'react'
import './App.css'
import useJOSAnimation from "./custom_hooks/useJosAnimation";
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';

import Plans from './pages/plans';
import SignupPage from './pages/signup';
import FfieldApp from './pages/features/field_agent';
import LoginPage from './pages/login';
import PaymentSucess from './pages/utils/success';
import PaymentCancel from './pages/utils/cancel';


function App() {
  useJOSAnimation();

  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/plans' element={<Plans/>}/>
        <Route path='/sucess' element={<PaymentSucess/>}/>
        <Route path='/cancel' element={<PaymentCancel/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/features_fa' element={<FfieldApp/>}/>
      </Routes>
    </div>
  )
}

export default App
