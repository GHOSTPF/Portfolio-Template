import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: '',
    title: 'Seja Bem-Vindo',
  },
  {
    id: 'about',
    title: 'Sobre',
  },
  {
    id: 'skills',
    title: 'Habilidades',
  },
  {
    id: 'projects',
    title: 'Projetos',
  },
  {
    id: 'work',
    title: 'Experiência',
  },
  {
    id: 'contact',
    title: 'Contato',
  },
];

const services = [
  {
    title: 'Desenvolvedor Frontend',
    icon: frontend,
  },
  {
    title: 'Desenvolvedor Backend',
    icon: backend,
  },
  {
    title: 'Design',
    icon: ux,
  },
  {
    title: 'Desenvolvedor Mobile',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: redux,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Desenvolvedor Full-Stack em Projetos Escolares',
    company_name: 'IFPB',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Janeiro 2021 - Dezembro 2023',
  },
  {
    title: 'Projeto Barbearia',
    company_name: 'Marcos Barbearia',
    icon: microverse,
    iconBg: '#333333',
    date: 'Junho 2023 - Julho 2023',
  },
  {
    title: 'Desenvolvedor Plêno',
    company_name: 'Remake Sistemas',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Abril 2024 - Agora',
  },
  {
    title: 'Desenvolvedor Full-Stack Mobile',
    company_name: 'Seu Marcos Barbearia',
    icon: dcc,
    iconBg: '#333333',
    date: 'Janeiro 2025',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Barbearia',
    description: 'Sistema estilo agendamento via email, com localização, serviços e tudo mais sobre o projeto.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/GHOSTPF/Barbearia',
    demo: 'https://pablo.mateustavares.com.br/TCC%20-%20PI/',
  },
  {
    id: 'project-2',
    name: 'SST',
    description:
      'Um sistema educacional feito com PHP para alunos do IFPB, no curso de Informatica.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/GHOSTPF/Start_Soft_tech',
    demo: 'https://pablo.mateustavares.com.br/SITE%20NOVO/',
  },
  {
    id: 'project-3',
    name: 'Projeto Resort',
    description: 'Projeto de Aprendizado e aprimoração em TailWind.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/GHOSTPF/Projeto-Resort-Tailwind',
    demo: 'https://oasis-costeiro-resort.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Marcos Barbearia',
    description: "Projeto com fins Financeiros sobre um sistema de agendamento mobile em conjunto com um dashboard administrativo.",
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/GHOSTPF',
    demo: 'https://github.com/GHOSTPF',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
