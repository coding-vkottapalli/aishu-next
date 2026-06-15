'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import { images } from '../../constants';
import './header.scss';

const pdf = '/assets/resume/resume.pdf';

const Header = () => {
	return (
		<header id='home' className='intro section'>
			<motion.div
				className='intro__text'
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				<p className='intro__hi'>
					<span className='intro__wave'>👋</span> Hi, I&apos;m Aishwarya
				</p>
				<h1 className='intro__headline'>
					I&apos;m a 3D Environment &amp; Asset Artist creating game-ready
					environments, props and characters for film, games and AR/VR.
				</h1>
				<p className='intro__sub'>
					8+ years of experience — including <strong>The Croods: A New Age</strong>{' '}
					(DreamWorks / Technicolor) and asset work at <strong>Amazon</strong>.
					Based in Whitby, Ontario · open to GTA hybrid &amp; remote roles.
				</p>

				<div className='intro__cta'>
					<a href='#work' className='btn btn--primary'>
						See my work <FiArrowDown />
					</a>
					<a href={pdf} download='Aishwarya-Pearala-Resume.pdf' className='btn btn--ghost'>
						Download résumé <FiArrowUpRight />
					</a>
				</div>
			</motion.div>

			<motion.div
				className='intro__shots'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.15 }}
			>
				<img src={images.childhood} alt='Stylized 3D environment by Aishwarya Pearala' className='intro__shot intro__shot--lg' />
				<img src={images.chameleon} alt='Stylized 3D character by Aishwarya Pearala' className='intro__shot' />
				<img src={images.fairysHouse} alt='Stylized 3D prop by Aishwarya Pearala' className='intro__shot' />
			</motion.div>
		</header>
	);
};

export default Header;
