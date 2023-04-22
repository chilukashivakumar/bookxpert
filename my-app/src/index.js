import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import  HomePage from './components/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/fonts/OpenSans-VariableFont_wdth,wght.ttf';
import Aboutuspage from './components/Aboutuspage';
import Blogpage from './components/Blog';
import Servicepage from './components/Services';
import { BrowserRouter , Route,Routes } from 'react-router-dom'
import Headerpage from './components/header';
import Footersection from './components/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
     <div className="App">
     <Headerpage/>
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/Aboutuspage" element={<Aboutuspage />}/>
      <Route path="/Servicepage" element={<Servicepage />}/>
      <Route path="/Blogpage" element={<Blogpage />}/>
    </Routes>

    </div>
    </BrowserRouter>
   
    <Footersection></Footersection>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
