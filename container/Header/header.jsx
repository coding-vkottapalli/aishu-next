'use client';
import React from 'react';
import { FiArrowDown, FiDownload } from 'react-icons/fi';
import { images } from '../../constants';
import './header.scss';

const pdf = '/assets/resume/resume.pdf';

const credentials = [
	{ value: '8+', label: 'Years experience' },
	{ value: 'Croods 2', label: 'DreamWorks / Technicolor' },
	{ value: 'Amazon', label: 'AR / VR' },
];

const Header = () => {
	return (
		<header id='home' className='hero'>
			<div className='hero__glow' aria-hidden='true' />

			<div className='hero__inner'>
				<div className='hero__content reveal'>
					<span className='eyebrow'>
						3D Asset and Environment Artist · Whitby, ON
					</span>

					<h1 className='hero__title'>
						Aishwarya <span>Pearala</span>
					</h1>

					<p className='hero__tagline'>
						I build <strong>game-ready environments, props &amp; stylized
						assets</strong> for film, games and AR/VR — from first sculpt to
						final render.
					</p>

					<div className='hero__roles'>
						{[
							'Environment Art',
							'Prop & Asset',
							'AR / VR Ready',
							'Texturing',
							'Lighting',
						].map((r) => (
							<span key={r} className='hero__chip'>
								{r}
							</span>
						))}
					</div>

					<div className='hero__cta'>
						<a href='#work' className='btn btn--primary'>
							View Work <FiArrowDown />
						</a>
						<a
							href={pdf}
							download='Aishwarya-Pearala-Resume.pdf'
							className='btn btn--ghost'
						>
							<FiDownload /> Download Resume
						</a>
					</div>

					<dl className='hero__stats'>
						{credentials.map((c) => (
							<div key={c.label} className='hero__stat'>
								<dt>{c.value}</dt>
								<dd>{c.label}</dd>
							</div>
						))}
					</dl>
				</div>

				<div className='hero__visual reveal-scale' style={{ animationDelay: '0.15s' }}>
					<img
						src={images.chameleon}
						alt='Stylized 3D chameleon character render by Aishwarya Pearala, 3D Asset and Environment Artist in Toronto'
						className='hero__subject'
					/>
					<div className='hero__visual-ring' aria-hidden='true' />
				</div>
			</div>

			<a href='#work' className='hero__scroll' aria-label='Scroll to work'>
				<span>Scroll</span>
				<FiArrowDown />
			</a>
		</header>
	);
};

export default Header;
