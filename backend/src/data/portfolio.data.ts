export const portfolioInfo = {
  name: 'Happy',
  title: 'Full-Stack Web3 Developer',
  tagline: 'Building full-stack applications and exploring blockchain-powered products.',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  x: 'https://x.com/your-username',
  email: 'pmgc590@gmail.com',
};

export const projects = [
  {
    id: '1',
    name: 'Social Media Hub',
    description: 'A Web3-powered social media hub that brings multiple social platforms together in one place. Users can connect their MetaMask wallet, claim JENY tokens, and spend tokens when visiting supported social platforms. Built with Solidity smart contracts to manage token rewards and transactions.',
    technologies: ['Solidity', 'Hardhat', 'Ethers.js', 'Next.js', 'TypeScript'],
    githubUrl: 'https://github.com/your-username/web3-token-portfolio',
    liveUrl: null,
    status: 'in-progress',
    contractAddress: null,
    explorerUrl: null,
  },
  {
    id: '2',
    name: 'Voting dApp',
    description: 'A blockchain-based voting application with transparent, tamper-resistant on-chain vote recording.',
    technologies: ['Solidity', 'Hardhat', 'Ethers.js', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/your-username/voting-dapp',
    liveUrl: null,
    status: 'in-progress',
    contractAddress: null,
    explorerUrl: null,
  },
  {
    id: '3',
    name: 'Todo List Application',
    description: 'A full-stack CRUD application built with Node.js, Express, PostgreSQL, and Prisma. Clean REST API with a React frontend.',
    technologies: ['TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'React'],
    githubUrl: 'https://github.com/your-username/todo-app',
    liveUrl: null,
    status: 'completed',
    contractAddress: null,
    explorerUrl: null,
  },
  {
    id: '4',
    name: 'XSwap',
    description: 'A decentralized token swapping platform that allows users to connect their MetaMask wallet and exchange supported tokens directly on the blockchain. Built with Solidity smart contracts and Ethers.js to handle secure, transparent on-chain token swaps.',
    technologies: ['Solidity', 'Hardhat', 'Ethers.js', 'Next.js', 'JavaScript'],
    githubUrl: 'https://github.com/h-n-tiwari/X-Swap-17',
    liveUrl: null,
    status: 'completed',
    contractAddress: null,
    explorerUrl: null,
  },
];

export const skills = {
  languages: [
    { name: 'TypeScript', level: 'proficient' },
    { name: 'JavaScript', level: 'proficient' },
    { name: 'Solidity', level: 'proficient' },
  ],
  frontend: [
    { name: 'Next.js', level: 'proficient' },
    { name: 'React', level: 'proficient' },
    { name: 'Tailwind CSS', level: 'proficient' },
  ],
  backend: [
    { name: 'Node.js', level: 'proficient' },
    { name: 'Express.js', level: 'proficient' },
  ],
  blockchain: [
    { name: 'Hardhat', level: 'proficient' },
    { name: 'Ethers.js', level: 'proficient' },
  ],
  databases: [
    { name: 'PostgreSQL', level: 'proficient' },
    { name: 'Prisma', level: 'proficient' },
    { name: 'MongoDB', level: 'familiar' },
    { name: 'Better-SQLite3', level: 'familiar' },
  ],
  devTools: [
    { name: 'Git', level: 'proficient' },
    { name: 'GitHub', level: 'proficient' },
    { name: 'Postman', level: 'proficient' },
    { name: 'Thunder Client', level: 'proficient' },
  ],
};
