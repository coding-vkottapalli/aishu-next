'use client';
import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';

import { images } from '../../constants';
import './navbar.scss';

const pdf = '/assets/resume/resume.pdf';
const links = ['home', 'work', 'about', 'skills', 'contact'];

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<nav className={`app__navbar ${scrolled ? 'app__navbar--scrolled' : ''}`}>
			<a href='#home' className='app__navbar-logo'>
				<img src={images.logo} alt='Aishwarya Pearala logo' />
				<span className='app__navbar-name'>Aishwarya Pearala</span>
			</a>

			<ul className='app__navbar-links'>
				{links.map((item) => (
					<li key={`link-${item}`}>
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>

			<div className='app__navbar-actions'>
				<a
					className='btn btn--primary navbar__resume'
					href={pdf}
					download='Aishwarya-Pearala-Resume.pdf'
				>
					<FiDownload /> Resume
				</a>

				<button
					className='app__navbar-burger'
					aria-label='Open menu'
					onClick={() => setToggle(true)}
				>
					<HiMenuAlt4 />
				</button>
			</div>

			{toggle && (
				<div className='app__navbar-drawer'>
					<button
						className='app__navbar-close'
						aria-label='Close menu'
						onClick={() => setToggle(false)}
					>
						<HiX />
					</button>
					<ul>
						{links.map((item) => (
							<li key={item}>
								<a href={`#${item}`} onClick={() => setToggle(false)}>
									{item}
								</a>
							</li>
						))}
					</ul>
					<a
						className='btn btn--primary'
						href={pdf}
						download='Aishwarya-Pearala-Resume.pdf'
						onClick={() => setToggle(false)}
					>
						<FiDownload /> Download Resume
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
