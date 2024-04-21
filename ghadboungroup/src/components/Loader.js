import React from 'react';

import './static/css/loader.css';
import logo from './static/images/logo.png';

import BarLoader from "react-spinners/BarLoader";

export default function Loader() {
  return (
    <section className='loader'>
        <div className='container'>
          <div className='logo'>
            <img src={logo} alt="logo"></img>
            <div className='marquee'>
              <h1>Ghadboun group</h1>
            </div>
          </div>
          <BarLoader color="#201F1D" />
        </div>
    </section>
  )
}
