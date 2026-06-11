'use client';
import React, { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { skillsData } from './skills-data';

import './skills.scss';

const Skills = () => {
	return (
		<Fragment>
			<div className='app__skills'>
				<motion.h2
					whileInView={{ opacity: [0, 1] }}
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 1, type: 'tween' }}
					className='head-text head-text-block'
				>
					Skills<span> & </span>Tools
				</motion.h2>

				<div className='skills__container'>
					{skillsData.map((item, i) => (
						<div key={item.heading + i} className='skills__item'>
							<div className='skills__item-heading'>
								<h2>{item.heading}</h2>
							</div>
							<div className='skills__item-rating'></div>
							<div className='skills__item-logo'>
								<img src={item.imgURL} alt='' />
							</div>
							<div className='skills__item-description'>
								<div className='skills__item-description-p'>
									{item.description.map((skill, i) => (
										<ul key={i}>
											<li>{skill}</li>
										</ul>
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

export default AppWrap(
	MotionWrap(Skills, 'app__skills'),
	'skills',
	'app__primarybg',
);
