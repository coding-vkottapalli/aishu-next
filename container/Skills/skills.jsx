'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from './skills-data';
import './skills.scss';

const Skills = () => {
	return (
		<section id='skills' className='section skills'>
			<div className='sec-head'>
				<span className='sec-eyebrow'>Tools</span>
				<span className='sec-title'>Software &amp; skills</span>
				<span className='sec-note'>End-to-end pipeline</span>
			</div>

			<div className='skills__list'>
				{skillsData.map((item, i) => (
					<motion.div
						key={item.heading}
						className='skills__row'
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.45, delay: i * 0.04 }}
					>
						<div className='skills__row-tool'>
							<span className='skills__row-logo'>
								<img src={item.imgURL} alt={`${item.heading} logo`} />
							</span>
							<h3>{item.heading}</h3>
						</div>
						<div className='skills__row-caps'>
							{item.description.map((skill, idx) => (
								<span key={idx} className='skills__cap'>
									{skill}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Skills;
