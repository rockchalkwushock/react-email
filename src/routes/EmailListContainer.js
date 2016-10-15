import React from 'react';
import {Link} from 'react-router';

let EmailListContainer;

export default EmailListContainer = (props) => {
    let list = Object.keys(props.emails).map((id, index) => {
      let email = props.emails[index];
      console.log(props.type + '/' + email.id);
        return (
            <li key={index}>
                <Link to={'/' + props.type + '/' + email.id}>
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
