import React from 'react';

const ErrorField = ({ input, type, meta: { error, touched } }) => {
    const errorText = touched && error && <div style={{color: 'red'}}>{error}</div>

    return (
        <div>
            <label>
                {input.name}
                    <input {...input} type={type} />
                {errorText}
            </label>
        </div>
    );
};

export default ErrorField;