import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './Share.css'
import { init } from 'emailjs-com';
init('user_oXBkuj6qOKvsyEwH5nctj');

const Share= () => {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

const submit = () => {
  if (name && origin && title && message) {
    const serviceId = 'service_9h1vb5a';
    const templateId = 'template_rz58fq3';
    const userId = 'user_oXBkuj6qOKvsyEwH5nctj';
    const templateParams = {
      name,
      origin,
      title,
      message
      };

    emailjs.send(serviceId, templateId, templateParams, userId)
    .then(response => console.log(response))
    .then(error => console.log(error));
      setName('');
      setOrigin('');
      setTitle('');
      setMessage('');
      setEmailSent(true);
    } else {
      alert('Please fill in all fields.');
    }
  }

  return (
    <div className="share-form">
      <ul>
        <li className="theLi"><input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} /></li>
        <li className="theLi"><input type="text" placeholder="Origin" value={origin} onChange={e => setOrigin(e.target.value)} /></li>
        <li className="theLi"><input type="titexttle" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} /></li>
        <li className="theLi"><textarea placeholder="text" value={message} onChange={e => setMessage(e.target.value)}></textarea></li>
        <li className="theLi"><button className="theButton" onClick={submit}>Send Message</button></li>
        <li className="theLi"><span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span></li>
      </ul>
    </div>
  );
};

export default Share;