import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';

import App from './src/routes/App';
import EmailContainer from './src/routes/EmailContainer';
import MailboxContainer from './src/routes/MailboxContainer';

let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path='/:mailbox_name'>
                <IndexRoute component={MailboxContainer}/>
                <Route path=':emailId'>
                    <IndexRoute component={EmailContainer}/>
                </Route>
            </Route>
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(routes, document.getElementById('app'));
})

/*
    NOTE: React Routes
    1) To keep the Parent rendering must keep component with Route:
      <Route path='/' component={App}>
    2) Component either in Route or IndexRoute NOT BOTH!
*/
