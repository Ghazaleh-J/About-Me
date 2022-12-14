import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [errorMessage, setErrorMessage] = useState('');
      const { name, email, message } = formState;
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          console.log('Submit Form', formState);
        }
      };
    
      const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };

      const isFormValid = !!(formState.email && formState.message && formState.name && validateEmail(formState.email))
    
      return (
        <div name="contact" className="bg-gradient-to-b  from-pink-50 to-white w-full text-gray h-screen p-4">
          <div className="flex flex-col p-4 justify-center max-w-screen-lg max-auto h-full">
            <div className="pb-8">
              <p className="text4xl font-bold inline">Contact</p>
              <p className="py-6">In order to get in touch with me, please send me an email to<a href='mailto:ghazaleh.javadi@outlook.com' className='text-pink-500 font-bold'> ghazaleh.javadi@outlook.com </a> or submit the form below:</p>
            </div>
            <div className="flex justify-center items-center">
              <form action="https://getform.io/f/35b882b9-81ac-4166-b26e-0d8f439e8a5e" method="POST" className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" defaultValue={name} onChange={handleChange} placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md focus:outline-none"></input>
                <input type="text" name="email" defaultValue={email} onChange={handleChange} placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"></input>
                <textarea name="message" defaultValue={message} onChange={handleChange} placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2 rounded-md focus:outline-none"></textarea>
                 {errorMessage && (
                  <div>
                    <p className="error-text">{errorMessage}</p>
                  </div>
                 )}
                <button disabled={!isFormValid} className="text-white bg-gradient-to-b from-gray-500 to-zinc-500 px-6 py-3 my-8 mx-auto flex item-center rounded-md hover:scale-110 duration-300" onSubmit={handleSubmit}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
    

   
    

