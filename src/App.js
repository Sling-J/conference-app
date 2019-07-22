import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';
import store from './redux';

import Root from './components/Root';

const App = () => {
    return (
        <Fragment>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Root/>
                </ConnectedRouter>
            </Provider>
        </Fragment>
    );
};

export default App;