import React from 'react';
// import {Link} from 'react-router';

import Email from '../components/Email';
import EMAILS from '../data/email_library';

let EmailContainer;

export default EmailContainer = (props) => {
  return(
    <Email emails={EMAILS[props.params.mailbox_name]} id={EMAILS[props.params.mailbox_name.id]}/>
  );
};
