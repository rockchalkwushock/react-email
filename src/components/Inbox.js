import React from 'react';
import {Link} from 'react-router';

let Inbox;

export default Inbox = (props) => {
    return (
        <div className='inbox'>
            <strong>
                <Link to={'/inbox/'}>
                    Inbox
                </Link>
            </strong>
        </div>
    );
};
