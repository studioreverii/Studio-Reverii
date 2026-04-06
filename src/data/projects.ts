export interface Project {
  slug: string;
  order: number;
  title: string;
  year: number;
  description: string;
  narrative: string[];
  images: string[];
  coverImage: string;
  aspectRatio: '16/9' | '1/1' | 'mixed';
  credits: {
    brand?: string;
    collection?: string;
    creativeDirection?: string;
    photography: string;
    model?: string;
    cast?: string;
    assistant?: string;
    wardrobe?: string;
    fashionDesigner?: string;
    location: string;
    date: string;
  };
}

export function imgPath(slug: string, filename: string): string {
  return `/images/${slug}/${filename}`;
}

export const projects: Project[] = [
  {
    slug: 'bluebird',
    order: 1,
    title: 'Bluebird 2026',
    year: 2026,
    description: 'In 1850, Miss Dalia waited from summer until winter.',
    narrative: [
      'In 1850, Miss Dalia waited from summer until winter, full of hope. She did not wait for her beloved Hermes to arrive — only a heavy letter came instead. Expectations fell away. The snow was silent.',
      'In the end, the signs had always been there.',
    ],
    images: [
      'bluebird-01.jpeg',
      'bluebird-02.jpeg',
      'bluebird-03.jpeg',
      'bluebird-04.jpeg',
      'bluebird-05.jpeg',
      'bluebird-06.png',
    ],
    coverImage: 'bluebird-02.jpeg',
    aspectRatio: '16/9',
    credits: {
      brand: 'Atelier Reverdie',
      creativeDirection: 'Ki',
      photography: 'Olivia',
      model: 'Miss Bao',
      location: 'Chenshan Botanical Garden, Shanghai',
      date: 'February 8, 2026',
    },
  },
  {
    slug: 'reverie',
    order: 2,
    title: 'Reverie',
    year: 2024,
    description: "This is Miss Alora's dream. In her memory, a former lover reappears.",
    narrative: [
      "This is Miss Alora's dream. In her memory, a former lover reappears — Osric, the son of an earl. Their love could not be made public, kept secret by a feud between families. Yet love grew freely in that forest. But Osric's promises could not outlast the war. He left Alora with a forest, and a memory.",
      'At the start of summer, she wakes as if from a dream.',
    ],
    images: [
      'reverie-01.jpeg',
      'reverie-02.jpeg',
      'reverie-03.jpeg',
      'reverie-04.jpeg',
      'reverie-05.jpeg',
      'reverie-06.jpeg',
      'reverie-07.jpeg',
      'reverie-08.jpeg',
      'reverie-09.jpeg',
    ],
    coverImage: 'reverie-03.jpeg',
    aspectRatio: 'mixed',
    credits: {
      photography: 'Zhu Xiaokang',
      assistant: 'Lei Yan',
      wardrobe: 'RosettaSwan, Elywood',
      location: 'China',
      date: '2024',
    },
  },
  {
    slug: 'the-duchess',
    order: 3,
    title: 'The Duchess',
    year: 2025,
    description: 'A solitary duchess, confined to her castle, keeping company with red wine and bare branches.',
    narrative: [
      'A solitary duchess, confined to her castle, keeping company with red wine and bare branches. The gates stay locked. The chess pieces stay still. She has learned that waiting is its own kind of power.',
    ],
    images: [
      'duchess-01.jpeg',
      'duchess-02.jpeg',
      'duchess-03.jpeg',
      'duchess-04.jpeg',
      'duchess-05.jpeg',
      'duchess-06.jpeg',
      'duchess-07.jpeg',
      'duchess-08.jpeg',
      'duchess-09.jpeg',
    ],
    coverImage: 'duchess-01.jpeg',
    aspectRatio: '1/1',
    credits: {
      photography: 'Olivia',
      location: 'Thornbury Castle, England',
      date: '2025',
    },
  },
  {
    slug: 'deception',
    order: 4,
    title: 'Dislocation',
    year: 2025,
    description: 'The view from the manor window remains unchanged. Only the truth has disappeared.',
    narrative: [
      'The view from the manor window remains unchanged. Only the truth has disappeared. This is a story about two women — one real, one false — and the moment they meet.',
    ],
    images: [
      'deception-01.jpeg',
      'deception-02.jpeg',
      'deception-03.jpeg',
      'deception-04.jpeg',
      'deception-05.jpeg',
      'deception-06.jpeg',
      'deception-07.jpeg',
      'deception-08.jpeg',
      'deception-09.jpeg',
    ],
    coverImage: 'deception-04.jpeg',
    aspectRatio: 'mixed',
    credits: {
      creativeDirection: 'Ki',
      cast: 'Moli, Ki',
      photography: 'Meiqing, Olivia',
      location: 'Eltham Palace / Highgate Cemetery, London',
      date: '2025',
    },
  },
  {
    slug: 'the-clockmaker',
    order: 5,
    title: 'The Clockmaker',
    year: 2025,
    description: 'A rainstorm, an old shop, a vanishing craft.',
    narrative: [
      'I found a small Christmas tree in a narrow alley, and marveled at how the fairy lights looked dreamlike in the rain. That evening, we ducked into an old watch repair shop to shelter from the storm. The kind old man behind the counter spoke of Switzerland forty years ago, and of skills that no one learns anymore.',
      'I love these chance encounters. Sometimes all it takes to find someone is a rainstorm.',
    ],
    images: [
      'clockmaker-01.jpeg',
      'clockmaker-02.jpeg',
      'clockmaker-03.jpeg',
      'clockmaker-04.jpeg',
      'clockmaker-05.jpeg',
      'clockmaker-06.jpeg',
      'clockmaker-07.jpeg',
      'clockmaker-08.jpeg',
      'clockmaker-09.jpeg',
    ],
    coverImage: 'clockmaker-05.jpeg',
    aspectRatio: '16/9',
    credits: {
      photography: 'Shen Yixiang',
      location: 'Battersea Flower Station / R. Laucher Watchmaker & Jeweller, London',
      date: 'December 6, 2025',
    },
  },
  {
    slug: 'wild-flower',
    order: 6,
    title: 'Wild Flower',
    year: 2025,
    description: 'We found a wild flower growing in an abandoned church.',
    narrative: [
      'We found a wild flower growing in an abandoned church.',
    ],
    images: [
      'wildflower-01.jpeg',
      'wildflower-02.jpeg',
      'wildflower-03.jpeg',
      'wildflower-04.jpeg',
      'wildflower-05.jpeg',
      'wildflower-06.jpeg',
      'wildflower-07.jpeg',
      'wildflower-08.jpeg',
      'wildflower-09.jpeg',
    ],
    coverImage: 'wildflower-05.jpeg',
    aspectRatio: 'mixed',
    credits: {
      photography: 'Olivia',
      location: 'St Dunstan in the East Church Garden, London',
      date: '2025',
    },
  },
  {
    slug: 'ethereal',
    order: 7,
    title: 'Ethereal',
    year: 2025,
    description: "It was an honour to photograph Hayina Cao's runway collection.",
    narrative: [
      "It was an honour to photograph Hayina Cao's runway collection.",
    ],
    images: [
      'ethereal-01.jpeg',
      'ethereal-02.jpeg',
      'ethereal-03.jpeg',
      'ethereal-04.jpeg',
    ],
    coverImage: 'ethereal-01.jpeg',
    aspectRatio: 'mixed',
    credits: {
      fashionDesigner: 'Hayina Cao',
      collection: 'CSM BA Year 2 — Radical Body',
      photography: 'Hu Shirong',
      location: 'London',
      date: 'December 12, 2025',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
