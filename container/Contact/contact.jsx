'use client';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiDownload, FiSend } from 'react-icons/fi';
import { FaArtstation, FaLinkedinIn } from 'react-icons/fa';
import { SiSketchfab } from 'react-icons/si';
import './contact.scss';

const pdf = '/assets/resume/resume.pdf';

const contactMethods = [
	{
		icon: <FaArtstation />,
		label: 'ArtStation',
		value: 'artstation.com/aishpearala',
		href: 'https://www.artstation.com/aishpearala',
	},
	{
		icon: <SiSketchfab />,
		label: 'Sketchfab',
		value: 'sketchfab.com/aishpearala',
		href: 'https://sketchfab.com/aishpearala',
	},
	{
		icon: <FaLinkedinIn />,
		label: 'LinkedIn',
		value: 'Aishwarya Pearala',
		href: 'https://www.linkedin.com/in/aishwarya-pearala-806358159/',
	},
	{
		icon: <FiMapPin />,
		label: 'Based in',
		value: 'Whitby, Ontario — open to GTA & remote',
		href: null,
	},
];

const Contact = () => {
	const [sent, setSent] = useState(false);
	const [sending, setSending] = useState(false);
	const form = useRef();

	useEffect(() => {
		if (!sent) return;
		const t = setTimeout(() => setSent(false), 5000);
		return () => clearTimeout(t);
	}, [sent]);

	const sendEmail = (e) => {
		e.preventDefault();
		setSending(true);

		emailjs
			.sendForm(
				'service_wt8yo3q',
				'template_pi34ntz',
				form.current,
				'FTOcW_TujAR7wYLlq',
			)
			.then(
				() => {
					form.current.reset();
					setSending(false);
					setSent(true);
				},
				(error) => {
					setSending(false);
					console.log(error?.text);
				},
			);
	};

	return (
		<section id='contact' className='section contact'>
			<div className='contact__grid'>
				<div className='contact__intro'>
					<span className='eyebrow'>Get in touch</span>
					<h2 className='section-title'>
						Let&apos;s build something <span>great together</span>
					</h2>
					<p className='section-intro'>
						Looking for a 3D Asset and Environment Artist for your next film,
						game or AR/VR project? I&apos;d love to hear about it — drop me a
						message and I&apos;ll get back to you shortly.
					</p>

					<ul className='contact__methods'>
						{contactMethods.map((m) => (
							<li key={m.label} className='contact__method'>
								<span className='contact__method-icon'>{m.icon}</span>
								<span className='contact__method-text'>
									<span className='contact__method-label'>{m.label}</span>
									{m.href ? (
										<a href={m.href} target='_blank' rel='noreferrer'>
											{m.value}
										</a>
									) : (
										<span>{m.value}</span>
									)}
								</span>
							</li>
						))}
					</ul>

					<a
						href={pdf}
						download='Aishwarya-Pearala-Resume.pdf'
						className='btn btn--ghost contact__resume'
					>
						<FiDownload /> Download Resume
					</a>
				</div>

				<form
					className='contact__form'
					ref={form}
					onSubmit={sendEmail}
					suppressHydrationWarning={true}
				>
					<div className='contact__field'>
						<label htmlFor='user_name'>Name</label>
						<input id='user_name' type='text' name='user_name' required />
					</div>
					<div className='contact__field'>
						<label htmlFor='user_email'>Email</label>
						<input id='user_email' type='email' name='user_email' required />
					</div>
					<div className='contact__field'>
						<label htmlFor='message'>Message</label>
						<textarea id='message' name='message' rows={5} required />
					</div>

					<button className='btn btn--primary contact__submit' type='submit' disabled={sending}>
						<FiSend /> {sending ? 'Sending…' : 'Send Message'}
					</button>

					<p className={`contact__success ${sent ? 'is-visible' : ''}`}>
						Thank you! I&apos;ll get back to you shortly. 🎉
					</p>
				</form>
			</div>

			<footer className='contact__footer'>
				<span>© {new Date().getFullYear()} Aishwarya Pearala</span>
				<span>3D Asset and Environment Artist · Whitby, Ontario</span>
			</footer>
		</section>
	);
};

export default Contact;
