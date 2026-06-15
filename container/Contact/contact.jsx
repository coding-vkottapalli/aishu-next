'use client';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FiArrowUpRight } from 'react-icons/fi';
import './contact.scss';

const pdf = '/assets/resume/resume.pdf';

const links = [
	{ label: 'ArtStation', href: 'https://www.artstation.com/aishpearala' },
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/aishwarya-pearala-806358159/',
	},
	{ label: 'Instagram', href: 'https://www.instagram.com/aishwarya_pearala/' },
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
		<section id='contact' className='contact'>
			<div className='contact__inner'>
				<div className='contact__statement'>
					<span className='sec-eyebrow'>Contact</span>
					<h2 className='contact__title'>
						Let&apos;s build something worth looking at.
					</h2>
					<p className='contact__sub'>
						Hiring a 3D Environment &amp; Asset Artist for a film, game or AR/VR
						project? Tell me about it — I reply quickly.
					</p>

					<div className='contact__links'>
						<a
							href={pdf}
							download='Aishwarya-Pearala-Resume.pdf'
							className='btn btn--primary'
						>
							Download Résumé <FiArrowUpRight />
						</a>
						<div className='contact__socials'>
							{links.map((l) => (
								<a key={l.label} href={l.href} target='_blank' rel='noreferrer'>
									{l.label} <FiArrowUpRight />
								</a>
							))}
						</div>
					</div>
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
						<textarea id='message' name='message' rows={4} required />
					</div>
					<button
						className='btn btn--primary contact__submit'
						type='submit'
						disabled={sending}
					>
						{sending ? 'Sending…' : 'Send Message'}
					</button>
					<p className={`contact__success ${sent ? 'is-visible' : ''}`}>
						Thank you! I&apos;ll get back to you shortly.
					</p>
				</form>
			</div>

			<footer className='contact__footer'>
				<span>© {new Date().getFullYear()} Aishwarya Pearala</span>
				<span>3D Environment &amp; Asset Artist · Whitby, Ontario</span>
			</footer>
		</section>
	);
};

export default Contact;
