'use client';
import React, { Fragment } from 'react';
// import { motion } from 'framer-motion';
// import { useState } from 'react';

import { AppWrap } from '../../wrapper';
import './noteworthy.scss';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Noteworthy = () => {
	return (
		<Fragment>
			<div className='noteworthy-container'>
				<div className='noteworthy-container__title'>
					<div>
						<h2 className='head-text head-text__p'>
							My Creative <span>Portfolio</span> Section
						</h2>
					</div>
				</div>
				<div className='noteworthy-container__section1'>
					<div className='section1__text'>
						<h3>
							<FaQuoteLeft className='section1__text-icon1' />
							I had an exciting idea of bringing to life a three-dimensional
							representation of the ancient and mystical temple of Nataraja
							Swamy, which has been lost in time. I have meticulously crafted an
							interpretation of the temple's environmental design, with the aim
							to create a stunning visual experience for the viewer.
							<FaQuoteRight className='section1__text-icon2' />
						</h3>
					</div>
					<div className='section1__video'>
						<div className='section1__video-frame'></div>
						<iframe
							width='860'
							height='515'
							src='https://www.youtube.com/embed/cVC6ND38NB0?si=eRgdtUbGVF-mAG7L&amp;start=2'
							title='YouTube video player'
							// frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
						></iframe>
					</div>
				</div>
				{/* <div className='noteworthy-container__section2'>
					<FaQuoteLeft />
					hello
				</div> */}
			</div>
		</Fragment>
	);
};
export default AppWrap(Noteworthy, 'noteworthy');
