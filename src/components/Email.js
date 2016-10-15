import React from 'react';

let Email;

export default Email = (props) => {
  return (
    <div className='email'>
      <p><strong>From: {props.emails.from}</strong></p>
      <p><strong>To: {props.emails.to}</strong></p>
      <p><strong>Subject: {props.emails.title}</strong></p>
      <p><strong>Content: {props.emails.content}</strong></p>
    </div>
  );
};
