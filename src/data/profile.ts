// All site copy lives here. Edit this file to update the portfolio.

export const profile = {
	name: 'Janith Madarasinghe',
	role: 'Software Engineer',
	tagline: 'Backend, cloud and applied AI, where software meets the physical world.',
	location: 'Colombo, Sri Lanka',
	description:
		'Software engineer in Colombo, Sri Lanka, building the backend and cloud systems that language models and connected devices depend on. Founder of Code Dock.',

	// Leave a link empty ('') to hide it.
	links: {
		email: '', // e.g. 'you@example.com'
		github: '', // e.g. 'https://github.com/username'
		linkedin: '', // e.g. 'https://www.linkedin.com/in/username'
		codeDock: '', // e.g. 'https://codedock.dev'
	},
};

export const intro = [
	"I'm a software engineer in Colombo, Sri Lanka, working where AI meets the physical world. I build the backend and cloud systems that language models and connected devices depend on, and I'm happiest when software has to deal with real data from real things.",
	"I'm the founder of Code Dock and a software engineer at Cloud Eight Technologies. My interests lie in applied AI and IoT, and I studied software engineering at UCSC.",
];

export type Experience = {
	title: string;
	org: string;
	meta?: string;
	period?: string;
	linkKey?: keyof typeof profile.links;
	body: string[];
	progression?: { role: string; date: string }[];
	tags?: string[];
};

export const experience: Experience[] = [
	{
		title: 'Founder',
		org: 'Code Dock',
		period: 'Ongoing',
		linkKey: 'codeDock',
		body: [
			'Code Dock is a platform for software engineers built around two ideas. Stories are honest write-ups of how real systems were built and what went wrong. Playbooks are structured, step-by-step guides for doing a specific engineering task well.',
			"I started it because the most useful engineering knowledge I've picked up came from people explaining their actual decisions, and that kind of writing is hard to find in one place.",
		],
	},
	{
		title: 'Software Engineer',
		org: 'Cloud Eight Technologies',
		meta: 'Colombo',
		period: 'Nov 2023 – Present',
		progression: [
			{ role: 'Intern', date: 'Nov 2023' },
			{ role: 'Associate Engineer', date: 'May 2024' },
			{ role: 'Software Engineer', date: 'Nov 2025' },
		],
		body: [
			"Most of my work is on the backend of production products that serve many customers from one system. That means designing the data model, keeping each customer's data isolated in its own PostgreSQL schema, and writing migrations that can be run safely across every one of those schemas. It also means the less glamorous side: database access inside AWS networks, broken deployments, and the dependency failure that only shows up in one environment.",
			"More recently I've built AI features on top of that foundation. I work on retrieval pipelines that combine vector search with full-text search in PostgreSQL, wire language and embedding models into them, and research when it's worth fine-tuning a smaller open model on private data instead of calling a large hosted one.",
		],
		tags: ['PostgreSQL', 'Multi-tenancy', 'AWS', 'Vector search', 'Full-text search', 'RAG', 'Fine-tuning'],
	},
	{
		title: 'Contract Engineer',
		org: 'ideaBoost',
		meta: 'Remote',
		period: 'During university',
		body: ['Worked remotely as a contract engineer alongside my degree.'],
	},
];

export const interests = {
	lead: "Web and mobile apps are where most of my work ends up, but they aren't what draws me in. I'm most interested in systems that sense, decide and act: models that work on live data, and devices that feed them.",
	areas: [
		{
			title: 'Applied AI',
			body: "I work with retrieval, embeddings and fine-tuning, and I care as much about evaluating a model honestly as about training it. I've worked with quantised open models running locally, which is the same problem you face when you want intelligence on or near a device instead of in a distant data centre.",
			tags: ['Retrieval', 'Embeddings', 'Fine-tuning', 'Evaluation', 'Local models'],
		},
		{
			title: 'Hardware & IoT',
			body: "I've built embedded projects on Arduino in C++, including a Bluetooth-controlled robot that avoids obstacles on its own.",
			tags: ['Arduino', 'C++', 'Bluetooth', 'Embedded'],
		},
		{
			title: 'Teaching agents',
			body: "Outside work I'm comparing search, reinforcement learning and evolutionary approaches to teaching agents, with each agent's decisions drawn on screen so you can see why it acts.",
			tags: ['Search', 'Reinforcement learning', 'Evolutionary algorithms'],
		},
	],
};

export const principles = [
	{
		title: 'Few tools, well understood',
		body: 'I prefer a small number of well-understood tools over a large number of fashionable ones. PostgreSQL can do far more than most teams ask of it: relational data, tenant isolation, full-text search and vector search can all live in one database you already know how to back up.',
	},
	{
		title: 'Security is design',
		body: 'I treat security and data isolation as part of the design, not something added before launch.',
	},
	{
		title: 'Written to be maintained',
		body: 'I write code expecting someone else to maintain it in two years, because usually that someone is me.',
	},
];

export const education = {
	degree: 'BSc (Hons) in Software Engineering',
	school: 'University of Colombo School of Computing',
	period: '2021 – 2025',
};
