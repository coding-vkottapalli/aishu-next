'use client';
import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../../constants';
import './topbar.scss';

const pdf = '/assets/resume/resume.pdf';
const links = ['work', 'reel', 'about', 'skills', 'contact'];

const TopBar = () => {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState('home');

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
			{ rootMargin: '-45% 0px -45% 0px' },
		);
		['home', ...links].forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	return (
		<header className='tb'>
			<a href='#home' className='tb__brand'>
				<img src={images.logo} alt='Aishwarya Pearala logo' />
				<span className='tb__brand-text'>
					<strong>Aishwarya Pearala</strong>
					<em>3D Environment &amp; Asset Artist</em>
				</span>
			</a>

			<nav className='tb__nav'>
				{links.map((item) => (
					<a
						key={item}
						href={`#${item}`}
						className={active === item ? 'is-active' : ''}
					>
						{item}
					</a>
				))}
			</nav>

			<div className='tb__actions'>
				<a className='btn btn--primary tb__resume' href={pdf} download='Aishwarya-Pearala-Resume.pdf'>
					Résumé
				</a>
				<button className='tb__burger' aria-label='Menu' onClick={() => setOpen(true)}>
					<HiMenuAlt4 />
				</button>
			</div>

			<AnimatePresence>
				{open && (
					<motion.div
						className='tb__drawer'
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ duration: 0.35, ease: 'easeOut' }}
					>
						<button className='tb__close' aria-label='Close' onClick={() => setOpen(false)}>
							<HiX />
						</button>
						<nav>
							{links.map((item) => (
								<a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
									{item}
								</a>
							))}
						</nav>
						<a className='btn btn--primary' href={pdf} download='Aishwarya-Pearala-Resume.pdf' onClick={() => setOpen(false)}>
							Download Résumé
						</a>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default TopBar;
