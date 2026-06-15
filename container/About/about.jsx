'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { accrd } from './about-data.js';
import { images } from '../../constants';
import './about.scss';

const disciplines = ['Modeling', 'Sculpting', 'Texturing', 'Lighting', 'Rendering'];

const About = () => {
	const experience =
		accrd.find((a) => a.title === 'Work Experience')?.content || [];
	const education = accrd.find((a) => a.title === 'Education')?.content || [];

	return (
		<section id='about' className='about'>
			<div className='about__grid'>
				<motion.div
					className='about__intro'
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className='sec-eyebrow'>About</span>
					<h2 className='about__lead'>
						I make 3D that ships — clean, optimized and production-ready.
					</h2>

					<div className='about__bio'>
						<p>
							I&apos;m <strong>Aishwarya Pearala</strong>, a 3D Environment &amp;
							Asset Artist in Whitby, Ontario, with 8+ years across film, games
							and AR/VR.
						</p>
						<p>
							My background spans global productions — modeling environments for{' '}
							<strong>The Croods: A New Age</strong> (DreamWorks / Technicolor)
							and building hard-surface assets at <strong>Amazon</strong>. I own
							the full pipeline from concept to final render, with a focus on
							clean topology that drops straight into any engine.
						</p>
						<p>
							Currently open to <strong>hybrid roles across the GTA</strong> and{' '}
							<strong>remote roles across Canada &amp; the US</strong>.
						</p>
					</div>

					<div className='about__tags'>
						<span className='about__tags-label'>What I do</span>
						<div className='about__tags-list'>
							{disciplines.map((d) => (
								<span key={d} className='about__tag'>
									{d}
								</span>
							))}
						</div>
					</div>
				</motion.div>

				<motion.figure
					className='about__portrait'
					initial={{ opacity: 0, scale: 0.96 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
				>
					<img
						src={images.headshot}
						alt='Aishwarya Pearala, Senior 3D Environment & Asset Artist'
					/>
					<figcaption>
						“Art is not what you see, but what you make others see.”
						<cite>— Edgar Degas</cite>
					</figcaption>
				</motion.figure>
			</div>

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
