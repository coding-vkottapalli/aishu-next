'use client';
import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaArtstation } from 'react-icons/fa';
import { SiSketchfab } from 'react-icons/si';

const SocialMedia = () => (
	<div className='app__social'>
		<div>
			<a href='https://www.artstation.com/aishpearala' target='_blank' rel='noreferrer' aria-label='ArtStation'>
				<FaArtstation />
			</a>
		</div>
		<div>
			<a href='https://sketchfab.com/aishpearala' target='_blank' rel='noreferrer' aria-label='Sketchfab'>
				<SiSketchfab />
			</a>
		</div>
		<div>
			<a
				href='https://www.linkedin.com/in/aishwarya-pearala-806358159/'
				target='_blank'
			>
				<BsLinkedin />
			</a>
		</div>
		<div>
			<a href='https://www.facebook.com/Aishwarya.Pearala' target='_blank'>
				<FaFacebookF />
			</a>
		</div>
		<div>
			<a href='https://www.instagram.com/aishwarya_pearala/' target='_blank'>
				<BsInstagram />
			</a>
		</div>
	</div>
);

export default SocialMedia;
