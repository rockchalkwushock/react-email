import React from 'react';
import {Link} from 'react-router';

let Email;

export default Email = (props) => {
  return (
    <div className='email'>
      <p><strong>From: {email.from}</strong></p>
      <p><strong>To: {email.to}</strong></p>
      <p><strong>Subject: {email.title}</strong></p>
      <p><strong>Content: {email.content}</strong></p>
    </div>
  );
};
