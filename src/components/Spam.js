import React from 'react';

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
