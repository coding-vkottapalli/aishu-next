'use client';
import React, { useEffect, useRef, useState } from 'react';
import { images } from '../../constants';
import './process.scss';

const STAGE_LABELS = ['Wireframe', 'MatCap + Surface', 'Final Render'];
const STAGE_CAPTIONS = [
	'Clean, even topology built to hold detail and deform predictably.',
	'A matcap pass refines form and surface — shape locked before any color.',
	'Textures, materials and lighting brought together for the final piece.',
];

const breakdowns = [
	{
		title: 'Antique Telephone',
		tag: '3D Reality',
		blurb:
			'A study in hard-surface modeling and realistic materials. The aim was to capture the ornate detail of a vintage telephone — the filigree, brass and enamel — while keeping clean, even topology, then bring it to life with PBR texturing.',
		stages: [images.telephoneBd1, images.telephoneBd2, images.telephoneBd3],
	},
	{
		title: 'Ancient Lantern',
		tag: '3D Stylized',
		blurb:
			'An exploration of a stylized workflow. I translated an old stone-and-metal lantern into a stylized form with hand-tuned surfacing and a warm, glowing final pass — aiming for something readable and characterful rather than photoreal.',
		stages: [images.lanternBd1, images.lanternBd2, images.lanternBd3],
	},
];

/*
 * Safe scroll reveal: the row renders fully visible on the server / first
 * paint. Only after mount (JS confirmed) does it "arm" — hiding the tiles —
 * then an IntersectionObserver reveals them with a stagger when scrolled into
 * view. If JS or the observer is unavailable, the content stays visible.
 */
const ProcessRow = ({ item }) => {
	const ref = useRef(null);
	const [armed, setArmed] = useState(false);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el || typeof IntersectionObserver === 'undefined') return;

		setArmed(true);
		const obs = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setInView(true);
					obs.disconnect();
				}
			},
			{ threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`process__row ${armed ? 'is-armed' : ''} ${
				inView ? 'is-in' : ''
			}`}
		>
			<div className='process__row-head'>
				<span className='work__card-tag'>{item.tag}</span>
				<h3>{item.title}</h3>
			</div>

			{item.blurb && <p className='process__row-blurb'>{item.blurb}</p>}

			<div className='process__stages'>
				{item.stages.map((src, i) => (
					<figure key={i} className='process__stage' style={{ '--i': i }}>
						<div className='process__stage-media'>
							<img
								src={src}
								alt={`${item.title} — ${STAGE_LABELS[i]} stage`}
								loading='lazy'
							/>
							<span className='process__stage-step'>{i + 1}</span>
						</div>
						<figcaption>
							<span className='process__stage-label'>{STAGE_LABELS[i]}</span>
							<span className='process__stage-caption'>
								{STAGE_CAPTIONS[i]}
							</span>
						</figcaption>
					</figure>
				))}
			</div>
		</div>
	);
};

const Process = () => {
	return (
		<section id='process' className='section process'>
			<div className='process__head reveal'>
				<span className='eyebrow'>Process</span>
				<h2 className='section-title'>
					From wireframe to <span>final render</span>
				</h2>
				<p className='section-intro'>
					Every asset moves through the same pipeline — clean topology, a matcap
					pass to lock the form, then textures and lighting. Here&apos;s how two
					pieces came together.
				</p>
			</div>

			{breakdowns.map((item) => (
				<ProcessRow key={item.title} item={item} />
			))}
		</section>
	);
};

export default Process;
