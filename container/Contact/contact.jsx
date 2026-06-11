'use client';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { AppWrap } from '../../wrapper';
import './contact.scss';
import { BsEmojiLaughing } from 'react-icons/bs';
const Contact = () => {
	const [showElement, setShowElement] = useState(false);
	const form = useRef();

	useEffect(() => {
		if (!showElement) {
			return;
		}

		setTimeout(function () {
			setShowElement(false);
		}, 3000);
		return;
	}, [showElement]);

	//Form Submission and Emailjs
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_wt8yo3q',
				'template_pi34ntz',
				form.current,
				'FTOcW_TujAR7wYLlq',
			)
			.then(
				(result) => {
					// Clears form/inputs after button is Selected
					form.current.reset();
					// Success text for form submission
					setTimeout(function () {
						setShowElement(true);
					}, 100);
				},
				(error) => {
					console.log(error.text);
				},
			);
	};

	return (
		<div className='contact-container'>
			<h2>Love to hear from you.</h2>
			<h2>Get in touch</h2>
			<form
				className='contact-form'
				ref={form}
				onSubmit={sendEmail}
				suppressHydrationWarning={true}
			>
				<label>Name</label>
				<input type='text' name='user_name' required />
				<label>Email*</label>
				<input type='email' required name='user_email' />
				<label>Message</label>
				<textarea name='message' />
				<input className='send-button' type='submit' value='Send' />
			</form>
			<p className={`success-text ${showElement ? '' : 'success-hidden'}`}>
				Thank you!! I will get in touch with you shortly.
			</p>
		</div>
	);
};

export default AppWrap(Contact, 'contact');
