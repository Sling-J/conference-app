import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";

import SignInForm from '../auth/SignInForm';
import SignUpForm from '../auth/SignUpForm';

class AuthPage extends Component {
    handleSignIn = values => console.log('----', values);
    handleSignUp = values => console.log('----', values);

    render() {
        return (
            <div>
                <h1>Auth Page</h1>

                <NavLink to="/auth/sign-in" activeStyle={{color: 'red'}}>Sign in </NavLink>
                <NavLink to="/auth/sign-up" activeStyle={{color: 'red'}}>Sign Up </NavLink>

                <Route path="/auth/sign-in" render={() => <SignInForm onSubmit={this.handleSignIn}/>} />
                <Route path="/auth/sign-up" render={() => <SignUpForm onSubmit={this.handleSignUp}/>} />
            </div>
        );
    }
}

export default AuthPage;