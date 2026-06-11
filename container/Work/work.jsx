'use client';
import React, { useState, useEffect, Fragment } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { SiSketchfab } from 'react-icons/si';
import { motion } from 'framer-motion';

import WorkModal from './work-modal';

import { AppWrap, MotionWrap } from '../../wrapper';
import './work.scss';
import { categories, workData } from './work-data';
import Noteworthy from '../Noteworthy/noteworthy';

const Work = () => {
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const [activeFilter, setActiveFilter] = useState('All');
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [modalOpen, setModalOpen] = useState(false);

	const [subImagesArray, setsubImagesArray] = useState([]);
	const [subtagArray, setSubTagArray] = useState([]);

	useEffect(() => {
		setWorks(workData);
		setFilterWork(workData);
	}, []);

	const modalHandler = (subImages, subTags) => {
		setModalOpen(!modalOpen);
		setsubImagesArray(subImages);
		setSubTagArray(subTags);
	};

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (item === 'All') {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};

	return (
		<>
			{modalOpen && (
				<WorkModal
					modalHandler={modalHandler}
					subImagesArray={subImagesArray}
					subTagArray={subtagArray}
				/>
			)}
			{/* <h2 className="head-text head-text__p">
				My Creative <span>Portfolio</span> Section
			</h2> */}
			<Noteworthy />
			<div className='app__work-filter'>
				{categories.map((item, index) => (
					<div
						key={index}
						onClick={() => handleWorkFilter(item)}
						className={`app__work-filter-item app__flex p-text ${
							activeFilter === item ? 'item-active' : ''
						}`}
					>
						{item}
					</div>
				))}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className='app__work-portfolio'
			>
				{filterWork.map((work, index) => (
					<Fragment key={index}>
						<div
							className={`app__work-item app__flex ${
								work.tags[0] == '3D Stylized' ? 'app__work-item-resize' : ''
							}`}
							onClick={
								work.tags[0] != '3D Stylized' && !work.tags.includes('No-Eye') ?
									() => modalHandler(work.subImages, work.tags)
								:	() => 'Thank you for visiting my Portfolio- Aishwarya'
							}
						>
							<a href={work?.codeLink} target='_blank' rel='noreferrer'>
								<div className='app__work-img app__flex'>
									<img
										src={work.imgURL}
										alt={work.name}
										style={{
											backgroundColor: '#D3D3D3',
										}}
									/>

									<motion.div
										whileHover={{ opacity: [0, 1] }}
										transition={{
											duration: 0.25,
											ease: 'easeInOut',
											staggerChildren: 0.5,
										}}
										className='app__work-hover app__flex'
									>
										{work.tags[0] != '3D Stylized' &&
											!work.tags.includes('No-Eye') && (
												<motion.div
													whileInView={{ scale: [0, 1] }}
													whileHover={{ scale: [1, 0.9] }}
													transition={{ duration: 0.25 }}
													className='app__flex'
													onClick={() =>
														modalHandler(work.subImages, work.tags)
													}
												>
													<AiFillEye />
												</motion.div>
											)}
										{work?.codeLink && (
											<motion.div
												whileInView={{ scale: [0, 1] }}
												whileHover={{ scale: [1, 0.9] }}
												transition={{ duration: 0.25 }}
												className='app__flex'
											>
												<SiSketchfab />
											</motion.div>
										)}
									</motion.div>
								</div>

								<div className='app__work-content app__flex'>
									<h4 className='bold-text'>{work.title}</h4>
									<p className='p-text-description' style={{ marginTop: 10 }}>
										{work.description}
									</p>
									<br />
									<p className='p-text-description2'>{work?.description2}</p>

									<div className='app__work-tag app__flex'>
										<p className='p-text'>{work.tags[0]}</p>
									</div>
								</div>
							</a>
						</div>
					</Fragment>
				))}
			</motion.div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Work, 'app__works'),
	'work',
	'app__primarybg',
);
