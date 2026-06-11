'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './header.scss';

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
};

const Header = () => {
	return (
		<div id='home' className='app__header app__flex'>
			<motion.div
				whileInView={{
					x: [-100, 0],
					opacity: [0, 1],
				}}
				transition={{
					duration: 0.5,
				}}
				className='app__header-info'
			>
				<div className='app__header-badge'>
					<div className='badge-cmp app__flex'>
						<span> 👋 </span>
						<div style={{ marginLeft: 20 }}>
							<p className='p-text'>Hello, I am </p>
							<h1 className='head-text'>Aishwarya Pearala</h1>
						</div>
					</div>

					<div className='tag-cmp app__flex'>
						<p className='p-text'>3D Artist </p>
						<p className='p-text'>2D Artist </p>
						<p className='p-text'>3D Asset Artist</p>
						<p className='p-text'>3D Character Artist</p>
						<p className='p-text'>3D Environment Artist</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{
					opacity: [0, 1],
				}}
				transition={{
					duration: 0.5,
					delayChildren: 0.5,
				}}
				className='app__header-img'
			>
				<img src={images.profile} alt='profile_bg' />
				<motion.img
					whileInView={{
						scale: [0, 1],
					}}
					transition={{
						duration: 1,
						ease: 'easeInOut',
					}}
					src={images.circle}
					alt='profile_circle'
					className='overlay_circle'
				/>
			</motion.div>

			<motion.div
				variant={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className='app__header-circles'
			>
				{[
					images.tool01,
					images.tool02,
					images.tool03,
					images.tool04,
					images.tool05,
					images.tool06,
				].map((circle, index) => {
					return (
						<div
							className='circle-cmp app__flex circle-cmp1'
							key={`circle-${index}`}
						>
							<img src={circle} alt='profile_bg' />
						</div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, 'home');
