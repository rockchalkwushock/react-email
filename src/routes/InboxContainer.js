import React from 'react';
import {Link} from 'react-router';

import EmailListContainer from './EmailListContainer';
import EMAILS from '../data/email_library';

let InboxContainer;

export default InboxContainer = (props) => {
  console.log(props);
  return (
      <div>
      <h2>{props.params.mailbox_name}</h2>
      <EmailListContainer emails={EMAILS[props.params.mailbox_name]} type={props.params.mailbox_name} />
      </div>
  );
};
