export const metadata = {
	metadataBase: new URL('https://aishwarya-pearala.com'),
	// Basic
	title: 'Aishwarya Pearala | Senior 3D Artist | Film, AR/VR & Real-Time',
	description:
		'Senior 3D Artist with 8+ years of experience in film (DreamWorks/Technicolor) Croods 2, AR/VR (Amazon), and real-time applications. Based in Whitby, Ontario — open to hybrid roles across GTA and remote across Canada & US.',

	keywords: [
		'Aishwarya Pearala',
		'3D Artist',
		'Senior 3D Artist',
		'3D Artist Ontario',
		'3D Artist Toronto',
		'3D Artist Canada',
		'3D Artist Remote',
		'Film 3D Artist',
		'AR VR 3D Artist',
		'Real-Time 3D Artist',
		'ZBrush Artist',
		'Maya Artist',
		'Substance Painter',
		'Unreal Engine Artist',
		'Environment Artist',
		'Hard Surface Artist',
		'DreamWorks',
		'The Croods',
		'Amazon AR VR',
		'Freelance 3D Artist',
		'Portfolio',
		'AR',
		'VR',
		'Real Time',
		'3D jobs',
		'3d artist portfolio',
	],

	authors: [{ name: 'Aishwarya Pearala' }],

	// Open Graph (Facebook, LinkedIn, WhatsApp previews)
	openGraph: {
		title: 'Aishwarya Pearala | Senior 3D Artist | Film, AR/VR & Real-Time',
		description:
			'Senior 3D Artist with 8+ years of experience. Film credits include The Croods: A New Age (DreamWorks/Technicolor). Previously at Amazon (AR/VR). Open to hybrid GTA and remote Canada/US roles.',
		url: 'https://aishwarya-pearala.com',
		siteName: 'Aishwarya Pearala Portfolio',
		images: [
			{
				url: '/assets/chamaleon_work1.png', // ← update with actual profile image path
				width: 1200,
				height: 630,
				alt: 'Aishwarya Pearala - Senior 3D Artist',
			},
		],
		type: 'website',
		locale: 'en_CA',
	},

	// Twitter / X
	twitter: {
		card: 'summary_large_image',
		title: 'Aishwarya Pearala | Senior 3D Artist | Film, AR/VR & Real-Time',
		description:
			'Senior 3D Artist with 8+ years of experience. Film credits include The Croods: A New Age (DreamWorks/Technicolor). Open to hybrid GTA and remote Canada/US roles.',
		images: ['/assets/logo2.jpg'],
	},
	// Canonical
	alternates: {
		canonical: 'https://aishwarya-pearala.com',
	},

	// Icons
	icons: {
		icon: '/assets/aish-logo.png',
		apple: '/assets/aish-logo.png',
	},

	// Robots
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
