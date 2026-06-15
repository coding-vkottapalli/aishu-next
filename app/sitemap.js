const base = 'https://aishwarya-pearala.com';

export default function sitemap() {
	return [
		{
			url: base,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{ url: `${base}/#reel`, changeFrequency: 'monthly', priority: 0.85 },
		{ url: `${base}/#work`, changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${base}/#about`, changeFrequency: 'yearly', priority: 0.7 },
		{ url: `${base}/#skills`, changeFrequency: 'yearly', priority: 0.6 },
		{ url: `${base}/#contact`, changeFrequency: 'yearly', priority: 0.8 },
	];
}
