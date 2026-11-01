// About section — no data fetching needed, content is static
const highlights = [
  {
    emoji: '💻',
    title: 'Full-Stack Development',
    description:
      'Building end-to-end web applications with TypeScript, React, Next.js, Node.js, and Express. Focused on clean architecture and maintainable code.',
  },
  {
    emoji: '🌐',
    title: 'Blockchain & Web3',
    description:
      'Learning Solidity and smart contract development with Hardhat and Ethers.js. Interested in decentralized applications and on-chain logic.',
  },
  {
    emoji: '🗄️',
    title: 'Databases & APIs',
    description:
      'Designing REST APIs backed by PostgreSQL and Prisma. Comfortable with relational schemas, migrations, and typed query patterns.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">About Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            I'm a full-stack developer with a growing focus on Web3 and blockchain technology.
            I enjoy building applications from the database layer up to the user interface, and
            I'm currently deepening my knowledge of smart contract development with Solidity.
            I value clean code, thoughtful architecture, and shipping things that actually work.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500/40 transition-colors"
            >
              <div className="mb-4 text-2xl">{item.emoji}</div>
              <h3 className="text-slate-100 font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
