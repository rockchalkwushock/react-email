import React from 'react';
import {Link} from 'react-router';

let Spam;

export default Spam = (props) => {
  return (
        <div className='spam'>
            <strong>
                <Link to={'/spam/'}>
                    Spam
                </Link>
            </strong>
        </div>
    );
};
