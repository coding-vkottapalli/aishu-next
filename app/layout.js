// Declare the site as dark so browsers (incl. Chrome's Auto Dark Mode) don't
// force-recolor it and black out the images. Renders <meta name="color-scheme">.
export const viewport = {
	colorScheme: 'dark',
	themeColor: '#0b0c0f',
};

export const metadata = {
	metadataBase: new URL('https://aishwarya-pearala.com'),
	// Basic
	title:
		'Aishwarya Pearala — Senior 3D Environment & Asset Artist | Toronto, Canada',
	description:
		'Senior 3D Environment & Asset Artist in the Greater Toronto Area. ZBrush, Maya, Unreal Engine, Substance Painter, Blender. Film credit: The Croods: A New Age (DreamWorks/Technicolor); ex-Amazon AR/VR. Open to GTA hybrid & remote Canada/US roles.',

	keywords: [
		'Aishwarya Pearala',
		// Role + location combos (highest recruiter intent)
		'Senior 3D Environment Artist Toronto',
		'3D Environment Artist GTA',
		'3D Environment Artist Ontario',
		'3D Environment Artist Canada',
		'3D Asset Artist Toronto',
		'3D Environment Artist remote Canada',
		'Remote 3D Artist US',
		'Game Environment Artist Toronto',
		'Film Environment Artist',
		'Freelance 3D Artist Toronto',
		// Tool-stack searches
		'Unreal Engine Environment Artist',
		'ZBrush Artist',
		'Maya Artist',
		'Substance Painter Artist',
		'Blender Artist',
		// Discipline + credentials
		'3D Asset Artist',
		'Prop Artist',
		'Hard Surface Artist',
		'AR VR 3D Artist',
		'DreamWorks',
		'The Croods A New Age',
		'Amazon AR VR',
		'3D artist portfolio',
	],

	authors: [{ name: 'Aishwarya Pearala' }],

	// Open Graph (Facebook, LinkedIn, WhatsApp previews)
	openGraph: {
		title:
			'Aishwarya Pearala — Senior 3D Environment & Asset Artist | Toronto',
		description:
			'Senior 3D Environment & Asset Artist (GTA). ZBrush · Maya · Unreal · Substance. Film credit: The Croods: A New Age (DreamWorks/Technicolor); ex-Amazon AR/VR. Open to hybrid GTA & remote Canada/US roles.',
		url: 'https://aishwarya-pearala.com',
		siteName: 'Aishwarya Pearala — 3D Environment & Asset Artist',
		images: [
			{
				url: '/assets/3d-stylized/childhood_work3.png',
				width: 1200,
				height: 630,
				alt: 'Stylized 3D environment diorama by Aishwarya Pearala, Senior 3D Environment & Asset Artist',
			},
		],
		type: 'website',
		locale: 'en_CA',
	},

	// Twitter / X
	twitter: {
		card: 'summary_large_image',
		title:
			'Aishwarya Pearala — Senior 3D Environment & Asset Artist | Toronto',
		description:
			'Senior 3D Environment & Asset Artist (GTA). ZBrush · Maya · Unreal · Substance. Film credit: The Croods: A New Age (DreamWorks/Technicolor). Open to hybrid GTA & remote roles.',
		images: ['/assets/3d-stylized/childhood_work3.png'],
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
