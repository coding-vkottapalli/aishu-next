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
						'@type': 'Person',
						name: 'Aishwarya Pearala',
						jobTitle: 'Senior 3D Environment & Asset Artist',
						description:
							'Senior 3D Environment & Asset Artist with 8+ years of experience in film, AR/VR, and real-time applications.',
						url: 'https://aishwarya-pearala.com',
						sameAs: [
							'https://www.artstation.com/aishpearala',
							'https://www.linkedin.com/in/aishwarya-pearala-806358159/',
						],
						address: {
							'@type': 'PostalAddress',
							addressLocality: 'Whitby',
							addressRegion: 'Ontario',
							addressCountry: 'CA',
						},
						knowsAbout: [
							'ZBrush',
							'Maya',
							'Substance Painter',
							'Unreal Engine',
							'3D Modeling',
							'Environment Art',
							'AR/VR',
							'Film Production',
							'Hard Surface Modeling',
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
