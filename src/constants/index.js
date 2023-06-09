import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  comfySloth,
  githubSearchUsers,
  gpt3,
  dalle,
  fitnessExercises,
  dashboard,
  threejs,
  travelFriends,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
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
    name: 'Redux Toolkit',
    icon: redux,
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
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Comfy Sloth',
    description:
      'Online platform that offers a wide selection of furniture options to suit any style and budget, providing a convenient and efficient solution for furnishing your home.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'stripe',
        color: 'green-text-gradient',
      },
      {
        name: 'styled-components',
        color: 'pink-text-gradient',
      },
    ],
    image: comfySloth,
    source_code_link: 'https://github.com/viettu2k/comfy-sloth',
    demo_link: 'https://viettu2k-comfy-sloth-store.netlify.app/',
  },
  {
    name: 'GitHub Search Users',
    description:
      'The website allows users to search for GitHub users based on their username. Users can view the repositories and projects of the searched user.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'auth0',
        color: 'green-text-gradient',
      },
      {
        name: 'styled-components',
        color: 'pink-text-gradient',
      },
    ],
    image: githubSearchUsers,
    source_code_link: 'https://github.com/viettu2k/github-search-users',
    demo_link: 'https://viettu2k-github-search-users.netlify.app',
  },
  {
    name: 'GPT3',
    description:
      "A GPT3 landing page offers a concise and visually appealing overview of GPT-3's capabilities and features, along with clear instructions and get started.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
    ],
    image: gpt3,
    source_code_link: 'https://github.com/viettu2k/gpt3',
    demo_link: 'https://gpt3-viettu2k.netlify.app/',
  },
  {
    name: 'Dall-E Clone',
    description:
      'The DALL-E website showcases the capabilities of this model by allowing users to input descriptions of images and generating unique visual outputs based on the given prompts.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'open-ai',
        color: 'pink-text-gradient',
      },
    ],
    image: dalle,
    source_code_link: 'https://github.com/viettu2k/dalle-ui',
    demo_link: 'https://dalle-ui-viettu2k.onrender.com/',
  },
  {
    name: 'Fitness Exercises',
    description:
      'This fitness exercises website is a comprehensive online resource for individuals looking to improve their physical health and wellness.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'MUI',
        color: 'green-text-gradient',
      },
      {
        name: 'rapid-api',
        color: 'pink-text-gradient',
      },
    ],
    image: fitnessExercises,
    source_code_link: 'https://github.com/viettu2k/fitness-exercises',
    demo_link: 'https://fitness-exercises-v2v7.onrender.com/',
  },
  {
    name: 'Dashboard',
    description:
      'A dashboard website is a centralized platform that provides users with a concise and visually appealing overview of important information, data, and metrics.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: '@syncfusion',
        color: 'pink-text-gradient',
      },
    ],
    image: dashboard,
    source_code_link: 'https://github.com/viettu2k/dashboard',
    demo_link: 'https://dashboard-viettu2k.netlify.app/',
  },
  {
    name: 'Travel Friends',
    description:
      'Travel Friends is an innovative online platform designed to revolutionize the way people plan and organize their travel experiences.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'context-api',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: travelFriends,
    source_code_link: 'https://github.com/viettu2k/travel-website',
    demo_link: 'https://travel-friends.netlify.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
