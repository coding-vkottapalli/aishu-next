import './globals.scss'; // or globals.scss if you rename it
import { About, Header, Contact, Skills, Work } from '../container';
import { Navbar } from '../components';

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
						jobTitle: 'Senior 3D Artist',
						description:
							'3D Artist with 8+ years of experience in film, AR/VR, and real-time applications.',
						url: 'https://aishwarya-pearala.com',
						sameAs: [
							'https://www.artstation.com/aishpearala',
							'https://www.linkedin.com/in/aishwarya-pearala', // ← add real LinkedIn if she has one
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
							'AR/VR',
							'Film Production',
							'Environment Art',
							'Hard Surface Modeling',
						],
					}),
				}}
			/>
			<div className='app'>
				<Navbar />
				<Header />
				<About />
				{/* <Noteworthy /> */}
				<Work />
				<Skills />
				<Contact />
			</div>
		</>
	);
}
