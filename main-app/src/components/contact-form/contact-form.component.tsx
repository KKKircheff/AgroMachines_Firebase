import FormInputField from '../ui/form-input-field/form-input-field.component'
import FormTextArea from "../ui/form-text-area-field/form-text-area.component";
// import Button from "../button/button.component"
import { Button } from 'primereact/button';
import { useState } from "react";

import './contact-form.style.scss'

type ContactInfo = {
    name: string
    company: string
    phonenumber: string
    email: string
    message: string
    time_stamp: number
    created: string
}

const contactInfo = {
    name: '',
    company: '',
    phonenumber: '',
    email: '',
    message: '',
    time_stamp: 0,
    created: '',
}



interface FieldsRegex {
    [key: string]: RegExp;
}

const fieldsRegex: FieldsRegex = {
    name: /^[A-Za-z\u0400-\u04FF\s]{0,35}$/,
    company: /^[A-Za-z\u0400-\u04FF\s\d-]{0,35}$/,
    email: /^[A-Za-z\u0400-\u04FF0-9._%+-@]{0,40}$/,
    phonenumber: /^[0-9+\-()\s]{0,20}$/,
    message: /^[\s\S]{0,400}$/,
    fullPhoneNumber: /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/,
    fullEmailAddress: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

export default function ContatForm() {

    const [formValues, setFormValues] = useState(contactInfo);
    const [isFormValid, setIsFormValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const clearFormFields = () => {
        setFormValues(contactInfo);
    }

    const validateField = (regex: RegExp, value: string) => {
        return regex.test(value);
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setIsFormValid(true);
        const isValidFieldValue = validateField(fieldsRegex[name], value);
        if (!isValidFieldValue) {
            return
        }
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    // const encode = (data: any) => {
    //     return Object.keys(data)
    //         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    //         .join("&");
    // }

    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();

    //     const { name, email, message, phonenumber } = formValues;

    //     if (!name || !email || !phonenumber || !message) {
    //         setIsFormValid(false);
    //         setErrorMessage("Моля попълнете всички задължителни полетa във формата!");
    //         return;
    //     }
    //     if (!validateField(fieldsRegex.fullEmailAddress, email)) {
    //         setIsFormValid(false);
    //         setErrorMessage('Грешно въведен мейл адреса!');
    //         return
    //     }
    //     if (!validateField(fieldsRegex.fullPhoneNumber, phonenumber)) {
    //         setIsFormValid(false);
    //         setErrorMessage('Грешно въведен телефонен номер!');
    //         return
    //     }

    //     fetch(`/`, {
    //         method: `POST`,
    //         headers: { 'Content-Type': `application/x-www-form-urlencoded` },
    //         body: encode({
    //             'form-name': 'contact-form__v1',
    //             ...formValues,
    //         }),
    //     })
    //         .then((response) => {
    //             console.log(response);
    //             alert('Вашето запитване е прието. Ще се свържем с вас в рамките на един работен ден')
    //         })
    //         .catch(error => alert(`Error: ${error}`))
    //     clearFormFields();
    // }

    const contactTemplate = (formValues: ContactInfo, created: Date, time_stamp: number) => {
        return ({
            // to: "contact@reddigit.net",
            to: ["kircheff@protonmail.com"],
            message: {
                subject: "New contact request reddigit.net",
                text: "Some text that maybe is needed",
                html:
                    `<code>
                  <body>
                  <p>NEW CONTACT REQUEST</p>
                  <p>on AGRO-MACHINES.NL</p>
                  <p>Created: ${created}</p>
                  <p>Name: ${formValues.name}</p>
                  <p>Company: ${formValues.company}</p>
                  <p>Phone number: ${formValues.phonenumber}</p>
                  <p>email: ${formValues.email}</p>
                  <p>message: ${formValues.message}</p>
                  </body>
                  </code>`,
            },
            name: formValues.name,
            company: formValues.company,
            email: formValues.email,
            phone: formValues.phonenumber,
            userMesssage: formValues.message,
            created,
            time_stamp
        })
    }

    const handleSubmit = async () => {
        const { name, email, message, phonenumber, company } = formValues;
        const { addDoc, collection, onSnapshot } = await import('firebase/firestore');
        const { db } = await import("../../utils/firebase-utils");

        if (!name || !email || !phonenumber || !message) {
            setIsFormValid(false);
            setErrorMessage("Моля попъленете всички задължителни полета.");
            return;
        }
        if (!validateField(fieldsRegex.fullEmailAddress, email)) {
            setIsFormValid(false);
            setErrorMessage("Моля попълнете коректен емайл адрес.");
            return;
        }
        if (!validateField(fieldsRegex.fullPhoneNumber, phonenumber)) {
            setIsFormValid(false);
            setErrorMessage("Моля попълнете коректен телефонен номер.");
            return;
        }
        const created = new Date();
        const time_stamp = created.getTime();
        const emailRef = collection(db, 'Contact_messages');
        await addDoc(emailRef, contactTemplate(formValues, created, time_stamp)).then(onSnapshot(emailRef, snapshot => {
            return snapshot.docs.map(email => email.data());
        }))
        alert("Благодаря за контакта. Вашето съобщение беше прието. Ще се свържем с вас в рамките на работния ден.");
        clearFormFields();
    }

    return (
        <div className='u-c-w' style={{ background: 'white' }}>
            <div id='contact-form-container' className="contact-form-container" data-aos="fade-int">
                <h2>Контакт с нас</h2>
                <p>ако имате въпрос относно някой от нашите продукти или имате нужда от съдействие в Нидерландия за закупуване на земеделска техника</p>
                <div>
                    <FormInputField
                        label='Имена'
                        type='text'
                        name='name'
                        autoComplete='off'
                        onChange={handleChange}
                        value={formValues.name}
                    />

                    <FormInputField
                        label='Компния /опция/'
                        type='text'
                        name='company'
                        autoComplete='off'
                        onChange={handleChange}
                        value={formValues.company}
                    />

                    <FormInputField
                        label='Телефон за контакт'
                        type='text'
                        name='phonenumber'
                        autoComplete='off'
                        onChange={handleChange}
                        value={formValues.phonenumber}
                    />

                    <FormInputField
                        label='Email'
                        type='email'
                        name='email'
                        autoComplete='off'
                        onChange={handleChange}
                        value={formValues.email}
                    />

                    <FormTextArea
                        label='Запитване'
                        type='text'
                        rows='8'
                        cols='100'
                        name='message'
                        onChange={handleChange}
                        value={formValues.message}
                    />

                    <div className="buttons-container">
                        {/* <Button type='submit' buttonType={'primary'}>изпрати</Button> */}
                        {/* <Button onClick={() => handleSubmit()} buttonType={'primary'}>изпрати</Button> */}
                        <Button label="изпрати" onClick={() => handleSubmit()} />

                    </div>
                    {!isFormValid && <div className="form-error-message">{errorMessage}</div>}
                </div>
            </div>
        </div>
    )
}