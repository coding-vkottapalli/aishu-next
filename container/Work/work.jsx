'use client';
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SiSketchfab } from 'react-icons/si';

import WorkModal from './work-modal';
import './work.scss';
import { categories, workData } from './work-data';

const Work = () => {
	const [filter, setFilter] = useState('All');
	const [activeWork, setActiveWork] = useState(null);

	const items = useMemo(
		() => (filter === 'All' ? workData : workData.filter((w) => w.tags.includes(filter))),
		[filter],
	);

	return (
		<section id='work' className='section work'>
			<div className='sec-head'>
				<span className='sec-eyebrow'>Work</span>
				<span className='sec-title'>Selected projects</span>
				<span className='sec-note'>Click a piece for breakdowns &amp; 3D model</span>
			</div>

			<div className='work__filters'>
				{categories.map((c) => (
					<button
						key={c}
						className={`work__filter ${filter === c ? 'is-active' : ''}`}
						onClick={() => setFilter(c)}
					>
						{c}
					</button>
				))}
			</div>

			<div className='work__wall'>
				{items.map((work) => {
					const has3D = Boolean(work.codeLink);
					return (
						<motion.button
							key={work.title}
							className='work__tile'
							onClick={() => setActiveWork(work)}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4 }}
						>
							<img
								src={work.imgURL}
								alt={`${work.title} — ${work.tags[0]} 3D art by Aishwarya Pearala`}
								loading='lazy'
							/>
							<span className='work__tile-info'>
								<span className='work__tile-name'>{work.title}</span>
								<span className='work__tile-cat'>{work.tags[0]}</span>
							</span>
							{has3D && (
								<span className='work__tile-3d' title='Interactive 3D model'>
									<SiSketchfab />
								</span>
							)}
						</motion.button>
					);
				})}
			</div>

			{activeWork && <WorkModal work={activeWork} onClose={() => setActiveWork(null)} />}
		</section>
	);
};

export default Work;
