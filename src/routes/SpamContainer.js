import React from 'react';
import {Link} from 'react-router';

import EmailContainer from './EmailContainer';
import EMAILS from '../data/email_library';

let SpamContainer;

export default SpamContainer = (props) => {
  return (
          <div>
          <h2>Spam:</h2>
          <EmailContainer emails={EMAILS} />
          </div>
      );
};
