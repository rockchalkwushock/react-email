import React from 'react';
import {Link} from 'react-router';

import EmailContainer from './EmailContainer';
import EMAILS from '../data/email_library';

let InboxContainer;

export default InboxContainer = (props) => {
  return (
      <div>
      <h2>Inbox:</h2>
      <EmailContainer emails={EMAILS.inbox} />
      </div>
  );
};
