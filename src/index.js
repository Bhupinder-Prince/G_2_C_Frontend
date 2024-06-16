import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignUp from './signup/Signup';
import Login from './login/Login';
import GrowerProfile from './Grower/GrowerProfile';
import AvailProduct from './Grower/AvailProduct';
import ItemsManager from './Manager/ItemsManager';
import FindGrower from './Consumer/FindGrower';
import GrowerDashboard from './Grower/GrowerDashboard';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Navbar/NavbaR';
import ConsumerDashboard from './Consumer/ConsumerDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    {/* <SignUp></SignUp> */}
    {/* <Login></Login> */}
    {/* <GrowerProfile></GrowerProfile> */}
    {/* <AvailProduct></AvailProduct> */}
    {/* <ItemsManager></ItemsManager> */}
    {/* <FindGrower></FindGrower> */}
    {/* <GrowerDashboard></GrowerDashboard> */}
    <Navbar></Navbar>
    {/* <ConsumerDashboard></ConsumerDashboard> */}
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
