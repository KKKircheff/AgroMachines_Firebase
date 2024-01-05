import './form-text-area.styles.scss';
import React from 'react';


export default function FormTextArea({ label = '', ...otherProps }) {
    const isRequired = otherProps.hasOwnProperty('required');
    return (
        <div className='form-textarea'>
            <textarea className="form-textarea__input"{...otherProps} />
            {label &&
                <label
                    className={`${otherProps.value.length ? 'form-textarea__shrink' : ''
                        } form-textarea__label`}>
                    {label}<span className="form-textarea__required">{isRequired && '*'}</span>
                </label>}
        </div>

    )
}