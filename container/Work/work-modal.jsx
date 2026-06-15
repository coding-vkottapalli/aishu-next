'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import { SiSketchfab } from 'react-icons/si';
import './work-modal.scss';

const WorkModal = ({ work, onClose }) => {
	const images = work.subImages?.length ? work.subImages : [work.imgURL];
	const [index, setIndex] = useState(0);
	const [show3D, setShow3D] = useState(false);

	const has3D = Boolean(work.codeLink);
	const lastIndex = images.length - 1;

	const prev = () => setIndex((i) => (i === 0 ? lastIndex : i - 1));
	const next = () => setIndex((i) => (i === lastIndex ? 0 : i + 1));

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		const onKey = (e) => {
			if (e.key === 'Escape') onClose();
			if (e.key === 'ArrowLeft') prev();
			if (e.key === 'ArrowRight') next();
		};
		window.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = 'auto';
			window.removeEventListener('keydown', onKey);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lastIndex]);

	return (
		<motion.div
			className='wm'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={onClose}
		>
			<motion.div
				className='wm__panel'
				initial={{ scale: 0.96, y: 16 }}
				animate={{ scale: 1, y: 0 }}
				exit={{ scale: 0.96, y: 16 }}
				transition={{ duration: 0.25 }}
				onClick={(e) => e.stopPropagation()}
			>
				<button className='wm__close' onClick={onClose} aria-label='Close'>
					<FiX />
				</button>

				<div className='wm__stage'>
					{show3D && has3D ? (
						<iframe
							title={work.title}
							className='wm__iframe'
							src={work.codeLink}
							frameBorder='0'
							allow='autoplay; fullscreen; xr-spatial-tracking'
							allowFullScreen
						/>
					) : (
						<>
							<img
								key={index}
								src={images[index]}
								alt={`${work.title} — ${work.tags[0]} 3D art by Aishwarya Pearala (view ${index + 1})`}
								className='wm__img'
							/>
							{images.length > 1 && (
								<>
									<button className='wm__nav wm__nav--left' onClick={prev} aria-label='Previous'>
										<FiChevronLeft />
									</button>
									<button className='wm__nav wm__nav--right' onClick={next} aria-label='Next'>
										<FiChevronRight />
									</button>
									<div className='wm__counter'>
										{index + 1} / {images.length}
									</div>
								</>
							)}
						</>
					)}
				</div>

				<div className='wm__info'>
					<span className='wm__tag'>{work.tags[0]}</span>
					<h3 className='wm__name'>{work.title}</h3>
					<p className='wm__desc'>{work.description}</p>
					{work.description2 && <p className='wm__meta'>{work.description2}</p>}

					<div className='wm__actions'>
						{has3D && (
							<button
								className={`btn ${show3D ? 'btn--ghost' : 'btn--primary'}`}
								onClick={() => setShow3D((s) => !s)}
							>
								<SiSketchfab /> {show3D ? 'Back to renders' : 'View 3D Model'}
							</button>
						)}
						{work.projectLink && (
							<a className='btn btn--ghost' href={work.projectLink} target='_blank' rel='noreferrer'>
								<FiExternalLink /> Project page
							</a>
						)}
					</div>

					{images.length > 1 && !show3D && (
						<div className='wm__thumbs'>
							{images.map((img, i) => (
								<button
									key={i}
									className={`wm__thumb ${i === index ? 'is-active' : ''}`}
									onClick={() => setIndex(i)}
								>
									<img src={img} alt={`thumbnail ${i + 1}`} />
								</button>
							))}
						</div>
					)}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default WorkModal;
