export const profile = {
	name: 'Janith Madarasinghe',
	handle: 'Janithpm',
	role: 'Software Engineer',
	tagline: 'Software Engineer building web, mobile and AI systems.',
	location: 'Sri Lanka',
	description:
		'Software engineer in Sri Lanka building web, mobile and AI systems, with a focus on IoT and robotics.',

	links: {
		email: 'janithmadarasinghe@gmail.com',
		github: 'https://github.com/Janithpm',
		linkedin: 'https://www.linkedin.com/in/janithpm',
		x: 'https://x.com/Janith_pm',
		codeDock: 'https://code-dock.dev',
	},
};

export const intro = [
	'I am a software engineer based in Sri Lanka, working across web, mobile, AI, IoT and robotics. I design, train and integrate AI systems, build the web and mobile products that put them in people\'s hands, and connect software to the physical world through devices and robots.',
	'I enjoy owning the whole journey from an early idea to software people rely on every day, and I pick up whatever a problem calls for, whether that is a new language, a new platform or an entirely new field. I care about systems that are reliable, secure and easy to maintain, and alongside my professional work I build and maintain products and developer tools of my own.',
];

export type Project = {
	name: string;
	role: string;
	summary: string;
	links: { label: string; href: string }[];
};

export const projects: Project[] = [
	{
		name: 'Code Dock',
		role: 'Founder',
		summary:
			'A platform for software engineers: Stories of how real systems were built, and Playbooks for carrying out an engineering task well.',
		links: [{ label: 'code-dock.dev', href: 'https://code-dock.dev' }],
	},
	{
		name: 'Code Dock Notes',
		role: 'Creator & maintainer',
		summary:
			'An offline-first notes workspace that keeps your Markdown notes in your own GitHub repositories, installable as a progressive web app.',
		links: [
			{ label: 'notes.code-dock.dev', href: 'https://www.notes.code-dock.dev/' },
			{ label: 'GitHub', href: 'https://github.com/Janithpm/note-app' },
		],
	},
	{
		name: 'email-kit',
		role: 'Author & maintainer',
		summary:
			'A type-safe email template compiler that turns TSX into HTML, plain text and a typed module, with accessibility and email-client checks on every build.',
		links: [
			{ label: 'Docs', href: 'https://email-kit.github.io/docs-site/' },
			{ label: 'GitHub', href: 'https://github.com/email-kit/email-kit' },
		],
	},
	{
		name: 'vibepg',
		role: 'Author & maintainer',
		summary:
			'A command-line tool for running local PostgreSQL in Docker, with generated credentials stored in the OS keychain.',
		links: [
			{ label: 'Website', href: 'https://vibepg.github.io/' },
			{ label: 'GitHub', href: 'https://github.com/vibepg/vibepg-cli' },
		],
	},
	{
		name: 'SREC',
		role: 'Creator & maintainer',
		summary:
			'A Chrome extension that records the current tab with its audio, adds optional microphone narration, and saves the result as an MP4.',
		links: [
			{ label: 'Download', href: 'https://github.com/Janithpm/srec/releases/latest' },
			{ label: 'GitHub', href: 'https://github.com/Janithpm/srec' },
		],
	},
	{
		name: 'No Shorts for YouTube',
		role: 'Creator & maintainer',
		summary:
			'A lightweight Chrome extension that removes YouTube Shorts from youtube.com.',
		links: [{ label: 'GitHub', href: 'https://github.com/Janithpm/no-shorts' }],
	},
];

export const education = {
	degree: 'BSc (Hons) in Software Engineering',
	school: 'University of Colombo School of Computing',
	period: '2021 – 2025',
	summary:
		'A broad grounding in software engineering, computer science theory and mathematics, with in-depth study of machine learning, deep learning, artificial intelligence and robotics.',
};

export type Experience = {
	role: string;
	org: string;
	location: string;
	period: string;
	progression?: { role: string; date: string }[];
	summary: string;
};

export const experience: Experience[] = [
	{
		role: 'Software Engineer',
		org: 'Cloud Eight Technologies',
		location: 'Australia & Sri Lanka',
		period: 'Nov 2023 – Present',
		progression: [
			{ role: 'Intern', date: 'Nov 2023' },
			{ role: 'Associate Engineer', date: 'May 2024' },
			{ role: 'Software Engineer', date: 'Nov 2025' },
		],
		summary:
			'Design and build AI systems, from retrieval-augmented generation (RAG) pipelines and agentic workflows to models fine-tuned for domain-specific tasks. Develop the production web and mobile applications they power, owning features end to end from the database and APIs to deployment on AWS and Google Cloud.',
	},
	{
		role: 'Software Engineer',
		org: 'ideaBoost',
		location: 'Sri Lanka (remote)',
		period: 'Mar 2022 – Aug 2023',
		summary: 'Designed and built web platforms with React, Next.js and TypeScript, working across responsive interfaces and the APIs behind them.',
	},
];

export const contact = {
	title: 'Get in touch',
	body: 'I am open to conversations about engineering roles, collaborations and interesting problems across web, mobile, AI, IoT and robotics.',
};
