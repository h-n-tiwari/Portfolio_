import type { Skill } from '@/types';
import { fetchSkills } from '@/lib/api';

// Human-readable names for each category key
const categoryLabels: Record<string, string> = {
  languages: 'Programming Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  blockchain: 'Blockchain & Web3',
  databases: 'Databases & ORM',
  devTools: 'Dev Tools',
};

// Style for each skill level badge
const levelStyles: Record<Skill['level'], { label: string; className: string }> = {
  proficient: {
    label: 'Proficient',
    className: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
  },
  learning: {
    label: 'Learning',
    className: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
  },
  familiar: {
    label: 'Familiar with',
    className: 'bg-slate-700/50 text-slate-400 border border-slate-700',
  },
};

// A single skill row
function SkillBadge({ skill }: { skill: Skill }) {
  const style = levelStyles[skill.level];
  return (
    <div className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800">
      <span className="text-sm text-slate-200 font-medium">{skill.name}</span>
      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${style.className}`}>
        {style.label}
      </span>
    </div>
  );
}

export default async function Skills() {
  const skills = await fetchSkills();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Skills</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6" />
          <p className="text-slate-400 text-sm">
            Technologies I work with daily, am currently learning, or have used in projects.
          </p>
        </div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Object.entries(skills) as [keyof typeof skills, Skill[]][]).map(([key, categorySkills]) => (
            <div key={key}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                {categoryLabels[key]}
              </h3>
              <div className="space-y-2">
                {categorySkills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap gap-4 pt-6 border-t border-slate-900">
          {Object.entries(levelStyles).map(([level, style]) => (
            <span key={level} className={`text-xs px-2 py-0.5 rounded-full font-medium ${style.className}`}>
              {style.label}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
