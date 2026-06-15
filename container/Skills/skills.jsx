'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from './skills-data';
import './skills.scss';

const Skills = () => {
	return (
		<section id='skills' className='section skills'>
			<div className='skills__head'>
				<span className='eyebrow'>Skills &amp; Tools</span>
				<h2 className='section-title'>
					My <span>creative pipeline</span>
				</h2>
				<p className='section-intro'>
					An end-to-end toolset covering modeling, sculpting, texturing,
					lighting and real-time integration — whatever the project needs.
				</p>
			</div>

			<div className='skills__grid'>
				{skillsData.map((item, i) => (
					<motion.div
						key={item.heading}
						className='skills__card'
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: i * 0.05 }}
					>
						<div className='skills__card-head'>
							<div className='skills__card-logo'>
								<img src={item.imgURL} alt={`${item.heading} logo`} />
							</div>
							<h3>{item.heading}</h3>
						</div>
						<div className='skills__card-tags'>
							{item.description.map((skill, idx) => (
								<span key={idx} className='skills__tag'>
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
