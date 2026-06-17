'use client';
import React from 'react';
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
					<div
						key={item.heading}
						className='skills__card reveal'
						style={{ animationDelay: `${i * 0.05}s` }}
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
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
