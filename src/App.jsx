import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import "./css/about.min.css"
import "./css/blog.min.css"
import "./css/contacts.min.css"
import "./css/error.min.css"
import "./css/floatbutton.min.css"
import "./css/gallery.min.css"
import "./css/libs.min.css"

import "./css/icomoon.css"
import "./css/services.min.css"
import "./css/post.min.css"
import "./css/index.min.css"
// import "./css/services2.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/Components/Header'
import Footer from './assets/Components/Footer'
import Home from './pages/Home'
import "./App.css"
// import Slider from './pages/HomeComponents/Slider';
import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';

function App() {
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag() { dataLayer.push(arguments); }
  //   gtag('js', new Date());
  //   gtag('config', 'G-YM8W02QHQ9');
  // }, []);
  return (
    <>
      <Helmet>
        <script type="module" src="/src/main.jsx"></script>
        <script src="./ assets/js/common.min.js"></script>
        <script src="./ assets/js/index.min.js"></script>
        <script src=" assets/js/demo.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YM8W02QHQ9"></script>
      </Helmet>
    <Header />
    {/* <Router> */}
    {/* <Routes> */}
     <Home/>
      {/* <Route path="/about" component={About} exact />
      <Route path="/contacts" component={Contacts} exact /> */}

    {/* </Router> */}
    <Footer/>

    </>
  )
}

export default App
