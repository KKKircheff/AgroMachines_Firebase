import React, { InputHTMLAttributes } from 'react';
import './form-input-field.styles.scss';

interface FormInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const FormInputField: React.FC<FormInputFieldProps> = ({ label, ...otherProps }) => {
    const isRequired = otherProps.hasOwnProperty('required');
    return (
        <div className='form-input'>
            <input className="form-input__field" {...otherProps} id={label} />
            {label &&
                <label
                    htmlFor={label}
                    className={`${otherProps.value?.toString().length ? 'form-input--shrink' : ''
                        } form-input__label`}
                >
                    {label}
                    {isRequired && <span>*</span>}
                </label>}
        </div>
    );
};

export default FormInputField;
