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
				<div className='app__about-me'>
					<p>
						An innovative and resourceful 3D Artist with 4+ years experience in
						creating and delivering world class 3D models. Experienced in
						creating AR and VR ready models.
						<br /> Self-motivated and a hard working professional accustomed to
						performing well under pressure and completing all projects within
						given schedule.
						<br /> On recently moving to Canada, I am ready and excited to
						explore interesting career opportunities in 3D Art.
					</p>
				</div>
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
