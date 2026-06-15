import './globals.scss';
import { About, Header, Contact, Skills, Work, Reel } from '../container';
import { TopBar } from '../components';

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
								jobTitle: 'Senior 3D Environment & Asset Artist',
								description:
									'Senior 3D Environment & Asset Artist with 8+ years of experience in film, games, AR/VR and real-time applications.',
								url: 'https://aishwarya-pearala.com',
								image: 'https://aishwarya-pearala.com/assets/headshot.jpg',
								sameAs: [
									'https://www.artstation.com/aishpearala',
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
								knowsAbout: [
									'3D Environment Art',
									'3D Asset Art',
									'Hard Surface Modeling',
									'ZBrush',
									'Maya',
									'Substance Painter',
									'Unreal Engine',
									'Blender',
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
								name: 'Aishwarya Pearala — 3D Environment & Asset Artist',
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
				<TopBar />
				<main>
					<Header />
					<Work />
					<Reel />
					<About />
					<Skills />
					<Contact />
				</main>
			</div>
		</>
	);
}
