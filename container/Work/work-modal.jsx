'use client';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './work-modal.scss';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

import { BsXCircle } from 'react-icons/bs';

const WorkModal = (props) => {
	const [subImageIndex, setSubImageIndex] = useState(0);
	const rootModalBackdrop = document.getElementById('root-modal-backdrop');
	const rootModalOverlay = document.getElementById('root-modal-overlay');
	// console.log(props);
	document.body.style.overflow = 'hidden';

	const clickModalClose = () => {
		props.modalHandler();
		document.body.style.overflow = 'auto';
	};

	const imageNumber = props.subImagesArray.length - 1;

	const previousImage = () => {
		setSubImageIndex(subImageIndex === 0 ? imageNumber : subImageIndex - 1);
	};

	const nextImage = () => {
		setSubImageIndex(subImageIndex === imageNumber ? 0 : subImageIndex + 1);
	};

	// console.log(props.subTagArray.includes("2D Art"));

	return (
		<div className='modal-container'>
			{createPortal(
				<div className='work__modal-backdrop'></div>,
				rootModalBackdrop,
			)}
			{createPortal(
				<div className='work__modal-overlay'>
					<BsXCircle
						onClick={clickModalClose}
						className='modal-close-button'
					></BsXCircle>
					<div className='image-container'>
						{props.subTagArray[0] != '2D Art' ?
							<IoIosArrowDropleftCircle onClick={previousImage} />
						:	<p />}
						{props.subImagesArray.map((img, i) => {
							return (
								<img
									key={`image-${i}`}
									src={img}
									alt='work1'
									className={`${
										subImageIndex === i ? 'img-active' : 'imgMain'
									} ${
										props.subTagArray.includes('2D Art') ? 'img-active2' : ''
									} ${
										props.subTagArray.includes('3D Reality') ?
											'img-active3'
										:	''
									}`}
								/>
							);
						})}

						{props.subTagArray[0] != '2D Art' ?
							<IoIosArrowDroprightCircle onClick={nextImage} />
						:	<p />}
					</div>
				</div>,
				rootModalOverlay,
			)}
		</div>
	);
};

export default WorkModal;
