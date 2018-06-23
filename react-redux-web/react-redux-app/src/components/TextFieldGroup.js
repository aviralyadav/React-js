import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({type, field, value, label, error, onChange}) => {
    return (
        <div className={classnames('form-group', { 'has-error': error })}>
            <label className="control-label">{label}</label>
            <input 
                type={type}
                onChange={onChange}
                name={field}
                value={value}
                className="form-control"
            />
            {error && <span className="help-block" >{error}</span>}
        </div>
    );
}

TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;