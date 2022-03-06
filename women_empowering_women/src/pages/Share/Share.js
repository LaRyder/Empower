import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Share.css';
import ShareForm from "./ShareForm"

export default function Share () {
  
    return (
      <div className="container">
          <h1 className='header'>Share Your Story</h1>
          <h1>My Journey Into Tech</h1>
          <small>By Amanda Jones</small>
          <img src="https://bit.ly/36W7wbg" alt='tech'style={{width:'20%'}}/>
          <section>
            <p></p>
          </section>
          <ShareForm />
        </div>
    );
  
}