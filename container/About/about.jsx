'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { abouts, accrd } from './about-data.js';
import { images } from '../../constants';
import './about.scss';

const toolkit = [
	{ label: 'Modeling & Sculpting', value: 'Maya · ZBrush · Blender' },
	{ label: 'Texturing & Look-Dev', value: 'Substance Painter · Photoshop · Procreate' },
	{ label: 'Real-Time & Render', value: 'Unreal Engine · V-Ray · Arnold · KeyShot' },
];

const About = () => {
	const experience = accrd.find((a) => a.title === 'Work Experience')?.content || [];
	const education = accrd.find((a) => a.title === 'Education')?.content || [];

	return (
		<section id='about' className='section about'>
			<div className='about__top'>
				<motion.div
					className='about__intro'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span className='eyebrow'>About</span>
					<h2 className='section-title'>
						Turning ideas into <span>production-ready 3D</span>
					</h2>

					<div className='about__bio'>
						<p>
							I&apos;m <strong>Aishwarya Pearala</strong>, a 3D Environment &amp;
							Asset Artist based in Whitby, Ontario, with 8+ years crafting
							high-quality assets for film, AR/VR and real-time interactive
							media.
						</p>
						<p>
							My background spans global productions — modeling environments for{' '}
							<strong>The Croods: A New Age</strong> (DreamWorks / Technicolor)
							and building hard-surface assets at <strong>Amazon</strong>. I own
							the full pipeline from concept to final render, with a focus on
							clean topology and assets that drop straight into any engine.
						</p>
						<p>
							Currently open to <strong>hybrid roles across the GTA</strong> and{' '}
							<strong>remote roles across Canada &amp; the US</strong>.
						</p>
					</div>

					<div className='about__toolkit'>
						{toolkit.map((t) => (
							<div key={t.label} className='about__toolkit-row'>
								<span className='about__toolkit-label'>{t.label}</span>
								<span className='about__toolkit-value'>{t.value}</span>
							</div>
						))}
						<div className='about__toolkit-row'>
							<span className='about__toolkit-label'>Languages</span>
							<span className='about__toolkit-value'>English · Hindi · Telugu</span>
						</div>
					</div>
				</motion.div>

				<motion.div
					className='about__visual'
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.7 }}
				>
					<div className='about__portrait'>
						<img
							src={images.headshot}
							alt='Aishwarya Pearala, 3D Environment & Asset Artist'
						/>
					</div>
					<blockquote className='about__quote'>
						“Art is not what you see, but what you make others see.”
						<cite>— Edgar Degas</cite>
					</blockquote>
				</motion.div>
			</div>

			{/* What I do — disciplines as tags */}
			<div className='about__disciplines'>
				<h3 className='about__disciplines-label'>What I do</h3>
				<div className='about__disciplines-tags'>
					{abouts.map((about) => (
						<span key={about.title} className='about__discipline-tag'>
							{about.title}
						</span>
					))}
				</div>
			</div>

			{/* Experience timeline */}
			<div className='about__career'>
				<div className='about__career-col'>
					<h3 className='about__career-title'>Experience</h3>
					<ul className='about__timeline'>
						{experience.map((line, i) => {
							const clean = line.replace(/^🏳️\s*/, '');
							const [role, ...rest] = clean.split('•');
							return (
								<li key={i} className='about__timeline-item'>
									<span className='about__timeline-role'>{role.trim()}</span>
									{rest.length > 0 && (
										<span className='about__timeline-meta'>
											{rest.join('•').trim()}
										</span>
									)}
								</li>
							);
						})}
					</ul>
				</div>

				<div className='about__career-col'>
					<h3 className='about__career-title'>Education</h3>
					<ul className='about__timeline'>
						<li className='about__timeline-item'>
							<span className='about__timeline-role'>
								{education[1] || 'B.A. 3D Animation & Visual Effects'}
							</span>
							<span className='about__timeline-meta'>{education[0]}</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
