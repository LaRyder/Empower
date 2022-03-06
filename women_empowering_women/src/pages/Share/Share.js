import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Share.css';
import ShareForm from "./ShareForm"

export default class Share extends React.Component {
  render() {
    return (
      <div className="container">
          <h1 className='header'>Share Your Story</h1>
          <ShareForm />
        </div>
    );
  }
}