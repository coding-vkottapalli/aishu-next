'use client';
import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { abouts, accrd } from './about-data.js';

import { AppWrap } from '../../wrapper';
import './about.scss';

const About = () => {
	const [itemSelected, setItemSelected] = useState(null);

	const selectHandler = (item) => {
		if (itemSelected === item) {
			return setItemSelected(null);
		}
		return setItemSelected(item);
	};
	return (
		<Fragment>
			<div className='about-container'>
				<h2 className='head-text' style={{ marginTop: 35, fontSize: 35 }}>
					<span>"</span>Art is not what you <span>see,</span> <br />
					but what you make others <span>see."</span>
				</h2>

				{/* ONLY THIS CARD ELEMENT HAS BEEN MODIFIED */}
				<div className='app__about-me-card'>
					<div className='about-me__bio'>
						<p>
							I’m Aishwarya Pearala, a 3D Artist based in Canada with 8+ years
							of experience crafting high-quality assets for film, AR/VR, and
							real-time interactive media.
						</p>
						<p>
							My background spans global projects, including modeling
							environments for The Croods: A New Age (DreamWorks) and building
							hard-surface assets at Amazon. I handle everything from initial
							concept to final render, always focusing on clean topology and
							production-ready assets that make integration easy for other
							departments.
						</p>
						<p>
							I'm currently looking for remote roles across North America or
							hybrid positions in the GTA.
						</p>
					</div>

					<div className='about-me__skills-summary'>
						<h3>Core Toolkit</h3>
						<ul>
							<li>
								<strong>Modeling & Sculpting:</strong> Maya, Z-Brush
							</li>
							<li>
								<strong>Texturing & Rendering:</strong> Substance Painter
							</li>
							<li>
								<strong>Real-Time & Integration:</strong> Unreal Engine
							</li>
						</ul>
						<br />
						<h3>Languages</h3>
						<ul>
							<li>English</li>
							<li>Hindi</li>
							<li>Telugu</li>
						</ul>
					</div>
				</div>
				<h2 className='head-text' style={{ marginTop: 35, fontSize: 35 }}>
					Proffessional Skills
				</h2>
				<div className='app__profiles'>
					{abouts.map((about, index) => (
						<motion.div
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, type: 'tween' }}
							className='app__profile-item'
							key={about.title + index}
						>
							<img src={about.imgURL} alt={about.title} />

							<h2 className='bold-text'>{about.title}</h2>
							<p className='p-text app__profile-item-p-text'>
								{about.description}
							</p>
						</motion.div>
					))}
				</div>

				<div className='accordian__container-parent'>
					{accrd.map((item, i) => (
						<div key={item + i} className='accordian__container-item'>
							<div
								className='accordian__heading'
								onClick={() => selectHandler(i)}
							>
								<span className='accordian__heading-expand'>
									{itemSelected === i ? '-' : '+'}
								</span>
								<h2 className='accordian__heading-text'>{item.title}</h2>
							</div>

							<div className={`accordian__content`}>
								<div
									className={`accordian__content-text ${itemSelected === i ? 'accordian__content-active' : ''}`}
								>
									{item.content.map((itemContent, ind) => (
										<p key={ind}>{itemContent}</p>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Fragment>
	);
};

export default AppWrap(About, 'about');
