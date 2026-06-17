'use client';
import React, { useState, useEffect } from 'react';
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
		<div
			className='workmodal reveal-fade'
			onClick={onClose}
		>
			<div
				className='workmodal__panel reveal-scale'
				onClick={(e) => e.stopPropagation()}
			>
				<button className='workmodal__close' onClick={onClose} aria-label='Close'>
					<FiX />
				</button>

				<div className='workmodal__stage'>
					{show3D && has3D ? (
						<iframe
							title={work.title}
							className='workmodal__iframe'
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
								className='workmodal__img'
							/>
							{images.length > 1 && (
								<>
									<button
										className='workmodal__nav workmodal__nav--left'
										onClick={prev}
										aria-label='Previous image'
									>
										<FiChevronLeft />
									</button>
									<button
										className='workmodal__nav workmodal__nav--right'
										onClick={next}
										aria-label='Next image'
									>
										<FiChevronRight />
									</button>
									<div className='workmodal__counter'>
										{index + 1} / {images.length}
									</div>
								</>
							)}
						</>
					)}
				</div>

				<div className='workmodal__info'>
					<div className='workmodal__info-head'>
						<span className='work__card-tag'>{work.tags[0]}</span>
						<h3>{work.title}</h3>
					</div>

					<p className='workmodal__desc'>{work.description}</p>
					{work.description2 && (
						<p className='workmodal__meta'>{work.description2}</p>
					)}

					<div className='workmodal__actions'>
						{has3D && (
							<button
								className={`btn ${show3D ? 'btn--ghost' : 'btn--primary'}`}
								onClick={() => setShow3D((s) => !s)}
							>
								<SiSketchfab />
								{show3D ? 'Back to renders' : 'View 3D Model'}
							</button>
						)}
						{work.projectLink && (
							<a
								className='btn btn--ghost'
								href={work.projectLink}
								target='_blank'
								rel='noreferrer'
							>
								<FiExternalLink /> Project page
							</a>
						)}
					</div>

					{images.length > 1 && !show3D && (
						<div className='workmodal__thumbs'>
							{images.map((img, i) => (
								<button
									key={i}
									className={`workmodal__thumb ${i === index ? 'is-active' : ''}`}
									onClick={() => setIndex(i)}
								>
									<img src={img} alt={`thumbnail ${i + 1}`} />
								</button>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default WorkModal;
