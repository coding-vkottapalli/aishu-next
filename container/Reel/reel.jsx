'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';
import { images } from '../../constants';
import './reel.scss';

/*
 * Demo reel section.
 * To go live: set `reelUrl` to a Vimeo/YouTube embed URL (autoplay on click),
 * or replace the <iframe> branch with a local <video> tag. Until then it shows
 * a poster + play button placeholder.
 */
const reelUrl = null; // e.g. 'https://player.vimeo.com/video/XXXXXXXXX?autoplay=1'
const poster = images.childhood;

const Reel = () => {
	const [playing, setPlaying] = useState(false);
	const live = Boolean(reelUrl);

	return (
		<section id='reel' className='section reel'>
			<div className='sec-head'>
				<span className='sec-eyebrow'>Showreel</span>
				<span className='sec-title'>Demo reel</span>
				<span className='sec-note'>~90 seconds · best full-screen</span>
			</div>

			<motion.div
				className='reel__stage'
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
			>
				{live && playing ? (
					<iframe
						className='reel__video'
						src={reelUrl}
						title='Aishwarya Pearala — Showreel 2026'
						frameBorder='0'
						allow='autoplay; fullscreen; picture-in-picture'
						allowFullScreen
					/>
				) : (
					<button
						className='reel__poster'
						onClick={() => live && setPlaying(true)}
						aria-label={live ? 'Play showreel' : 'Showreel coming soon'}
						type='button'
					>
						<img src={poster} alt='Showreel preview — 3D work by Aishwarya Pearala' />
						<span className='reel__scrim' />
						<span className='reel__play'>
							<FiPlay />
						</span>
						<span className='reel__badge'>
							{live ? 'Showreel 2026 · 1:30' : 'Showreel 2026 · Coming soon'}
						</span>
					</button>
				)}
			</motion.div>
		</section>
	);
};

export default Reel;
