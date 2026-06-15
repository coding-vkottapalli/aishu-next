'use client';
import React, { useState, useEffect } from 'react';
import SocialMedia from './socialmedia';

const sections = ['home', 'work', 'about', 'skills', 'contact'];

const SideRails = () => {
	const [active, setActive] = useState('home');

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActive(entry.target.id);
				});
			},
			{ rootMargin: '-45% 0px -45% 0px' },
		);

		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	return (
		<>
			<div className='app__navigation'>
				{sections.map((item) => (
					<a
						key={item}
						href={`#${item}`}
						aria-label={`Go to ${item}`}
						className='app__navigation-dot'
						style={
							active === item
								? { background: 'var(--accent)', transform: 'scale(1.4)' }
								: {}
						}
					/>
				))}
			</div>
			<SocialMedia />
		</>
	);
};

export default SideRails;
