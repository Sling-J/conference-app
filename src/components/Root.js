import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import AdminPage from './routes/AdminPage';
import AuthPage from './routes/AuthPage';

const Root = () => (
    <Fragment>
        <Route path="/admin" component={AdminPage} />
        <Route path="/auth" component={AuthPage} />
    </Fragment>
);

export default Root;