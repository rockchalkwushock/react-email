import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';

import App from './src/routes/App';
import EmailContainer from './src/routes/EmailContainer';
import InboxContainer from './src/routes/InboxContainer';
import SpamContainer from './src/routes/SpamContainer';



let routes = (
    <Router history={hashHistory}>
        {/* Parent Path: Leads to Mailbox */}
        <Route path='/' component={App}>
            {/* Child Path: Leads to Inbox */}
            <Route path='/inbox' component={InboxContainer}>
                <IndexRoute component={InboxContainer}/>
                {/* Sibling Path: Leads to Emails in Inbox */}
                <Route path='/inbox/:emailId' component={EmailContainer}>
                    <IndexRoute component={EmailContainer}/>
                </Route>
            </Route>
            {/* Child Path: Leads to Spam */}
            <Route path='/spam' component={SpamContainer}>
                <IndexRoute component={SpamContainer}/>
                {/* Sibling Path: Leads to Emails in Spam */}
                <Route path='/spam/:emailId' component={EmailContainer}>
                    <IndexRoute component={EmailContainer}/>
                </Route>
            </Route>
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(routes, document.getElementById('app'));
})
