export interface Project {
  slug: string;
  title: string;
  year: number;
  client: string;
  description: string;
  narrative: string[];
  images: string[];
  coverImage: string;
  credits: {
    brand: string;
    creativeDirection: string;
    photography: string;
    model: string;
    location: string;
    date: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'bluebird-2026',
    title: 'Bluebird 2026',
    year: 2026,
    client: 'Bluebird Collective',
    description: 'A study in quiet arrival — dawn light and the architecture of stillness.',
    narrative: [
      'There is a particular quality of light that exists only in the hour before the world remembers itself. We found Bluebird in that hour — a study in the architecture of stillness, in the way a body can become a landscape and a landscape can hold its breath.',
      'This series was built around a single question: what does it feel like to arrive somewhere for the first time, every time? Each frame is a threshold. Each shadow, a room not yet entered.',
    ],
    images: [
      '/images/bluebird-2026/image-01.svg',
      '/images/bluebird-2026/image-02.svg',
      '/images/bluebird-2026/image-03.svg',
      '/images/bluebird-2026/image-04.svg',
    ],
    coverImage: '/images/bluebird-2026/cover.svg',
    credits: {
      brand: 'Bluebird Collective',
      creativeDirection: 'Ki',
      photography: 'Olivia',
      model: 'Maren V.',
      location: 'Eastern Coast, 2026',
      date: 'March 2026',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
