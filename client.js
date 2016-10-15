import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';

import App from './src/routes/App';
import EmailContainer from './src/routes/EmailContainer';
import EmailListContainer from './src/routes/EmailListContainer';
import InboxContainer from './src/routes/InboxContainer';
import SpamContainer from './src/routes/SpamContainer';

let routes = (
    <Router history={hashHistory}>

        <Route path='/' component={App}>
            <Route path='/:mailbox_name'>
                <IndexRoute component={InboxContainer}/>

                <Route path='/:emailId' component={EmailContainer} />

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
    2) Open
*/
