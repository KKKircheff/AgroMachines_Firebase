import React, { InputHTMLAttributes } from 'react';
import './form-input-field.styles.scss';

interface FormInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const FormInputField: React.FC<FormInputFieldProps> = ({ label, ...otherProps }) => {
    return (
        <div className='form-input-wrapper'>
            <input className="form-input" {...otherProps} />
            {label &&
                <label
                    className={`${otherProps.value?.toString().length ? 'shrink' : ''
                        } form-input-label`}>
                    {label}
                </label>}
        </div>
    );
};

export default FormInputField;
