import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';

class SignInForm extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h2>Sign In</h2>

                <form onSubmit={handleSubmit}>
                    <p>
                        <label>
                            Email
                            <Field name="email" component="input" />
                        </label>
                    </p>
                    <p>
                        <label>
                            Password
                            <Field name="password" component="input" type="password" />
                        </label>
                    </p>
                    <p>
                        <input type="submit"/>
                    </p>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'auth'
})(SignInForm);