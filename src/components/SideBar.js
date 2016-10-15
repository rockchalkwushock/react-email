import React from 'react';

import Inbox from './Inbox';
import Spam from './Spam';

let SideBar;

export default SideBar = (props) => {
    return (
        <div className='sidebar'>
            <Inbox/>
            <Spam/>
        </div>
    );
};
