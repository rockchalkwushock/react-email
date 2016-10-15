import React from 'react';
import {Link} from 'react-router';

let Email;

export default Email = (props) => {
  console.log(props);
  return (
    <div className='email'>
      <p><strong>From: {props.email.from}</strong></p>
      <p><strong>To: {props.email.to}</strong></p>
      <p><strong>Subject: {props.email.title}</strong></p>
      <p><strong>Content: {props.email.content}</strong></p>
    </div>
  );
};
