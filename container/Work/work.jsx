'use client';
import React, { useState, useMemo } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { SiSketchfab } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

import WorkModal from './work-modal';
import './work.scss';
import { categories, workData } from './work-data';

const Work = () => {
	const [activeFilter, setActiveFilter] = useState('All');
	const [activeWork, setActiveWork] = useState(null);

	const filtered = useMemo(() => {
		if (activeFilter === 'All') return workData;
		return workData.filter((w) => w.tags.includes(activeFilter));
	}, [activeFilter]);

	return (
		<section id='work' className='section work'>
			<div className='work__head'>
				<div>
					<span className='eyebrow'>Selected Work</span>
					<h2 className='section-title'>
						Portfolio <span>&amp; Projects</span>
					</h2>
					<p className='section-intro'>
						Stylized characters, realistic props and production-ready AR/VR
						assets. Click any piece to view breakdowns and spin the interactive
						3D model.
					</p>
				</div>
			</div>

			<div className='work__filter'>
				{categories.map((item) => (
					<button
						key={item}
						className={`work__filter-pill ${
							activeFilter === item ? 'is-active' : ''
						}`}
						onClick={() => setActiveFilter(item)}
					>
						{item}
					</button>
				))}
			</div>

			<motion.div layout className='work__grid'>
				<AnimatePresence mode='popLayout'>
					{filtered.map((work) => {
						const has3D = Boolean(work.codeLink);
						return (
							<motion.article
								layout
								key={work.title}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								transition={{ duration: 0.35 }}
								className='work__card'
								onClick={() => setActiveWork(work)}
							>
								<div className='work__card-media'>
									<img
										src={work.imgURL}
										alt={`${work.title} — ${work.tags[0]} 3D art by Aishwarya Pearala`}
										loading='lazy'
									/>
									<div className='work__card-overlay'>
										<div className='work__card-actions'>
											<span className='work__action'>
												<AiFillEye />
											</span>
											{has3D && (
												<span className='work__action work__action--3d'>
													<SiSketchfab />
												</span>
											)}
										</div>
									</div>
								</div>
								<div className='work__card-body'>
									<h4>{work.title}</h4>
									<span className='work__card-tag'>{work.tags[0]}</span>
								</div>
							</motion.article>
						);
					})}
				</AnimatePresence>
			</motion.div>

			<AnimatePresence>
				{activeWork && (
					<WorkModal work={activeWork} onClose={() => setActiveWork(null)} />
				)}
			</AnimatePresence>
		</section>
	);
};

export default Work;
