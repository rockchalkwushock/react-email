import React from 'react';
import {Link} from 'react-router';

import Email from '../components/Email';

let EmailContainer;

export default EmailContainer = (props) => {
    let list = Object.keys(props.emails).map((id, index) => {
      let email = props.emails[index];
        return (
            <li key={index}>
                <Link to={'/inbox/' + email.id}>
                    From: {email.from}
                    To: {email.to}
                    Subject: {email.title}
                </Link>
            </li>
        );
    });

    return (
        <ul>
            {list}
        </ul>
    )
};
