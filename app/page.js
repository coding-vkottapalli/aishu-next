import './globals.scss';
import { About, Header, Contact, Skills, Work } from '../container';
import { Navbar } from '../components';
import { SideRails } from '../components/sm-navigation';

export default function Home() {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@graph': [
							{
								'@type': 'Person',
								'@id': 'https://aishwarya-pearala.com/#person',
								name: 'Aishwarya Pearala',
								jobTitle: '3D Asset and Environment Artist',
								description:
									'3D Asset and Environment Artist with 8+ years of experience in film, games, AR/VR and real-time applications.',
								url: 'https://aishwarya-pearala.com',
								image: 'https://aishwarya-pearala.com/assets/headshot.jpg',
								sameAs: [
									'https://www.artstation.com/aishpearala',
									'https://sketchfab.com/aishpearala',
									'https://www.linkedin.com/in/aishwarya-pearala-806358159/',
									'https://www.instagram.com/aishwarya_pearala/',
									'https://www.facebook.com/Aishwarya.Pearala',
								],
								address: {
									'@type': 'PostalAddress',
									addressLocality: 'Whitby',
									addressRegion: 'Ontario',
									addressCountry: 'CA',
								},
								worksFor: {
									'@type': 'Organization',
									name: 'Freelance / Independent',
								},
								knowsAbout: [
									'3D Environment Art',
									'3D Asset Art',
									'Hard Surface Modeling',
									'ZBrush',
									'Maya',
									'Substance Painter',
									'Unreal Engine',
									'Blender',
									'3D Modeling',
									'Texturing',
									'Lighting',
									'Rendering',
									'AR/VR',
									'Film Production',
								],
							},
							{
								'@type': 'WebSite',
								'@id': 'https://aishwarya-pearala.com/#website',
								url: 'https://aishwarya-pearala.com',
								name: 'Aishwarya Pearala — 3D Asset and Environment Artist',
								inLanguage: 'en-CA',
								about: { '@id': 'https://aishwarya-pearala.com/#person' },
							},
							{
								'@type': 'ProfilePage',
								'@id': 'https://aishwarya-pearala.com/#profilepage',
								url: 'https://aishwarya-pearala.com',
								mainEntity: { '@id': 'https://aishwarya-pearala.com/#person' },
								isPartOf: { '@id': 'https://aishwarya-pearala.com/#website' },
							},
						],
					}),
				}}
			/>
			<div className='app'>
				<Navbar />
				<SideRails />
				<main>
					<Header />
					<Work />
					<About />
					<Skills />
					<Contact />
				</main>
			</div>
		</>
	);
}
