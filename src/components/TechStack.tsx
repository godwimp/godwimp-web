'use client';

import { motion } from 'framer-motion';

interface StackItem {
  icon: string;
  name: string;
  note: string;
  usage: string;
  level: number;
}

interface StackCategory {
  icon: string;
  name: string;
  items: StackItem[];
}

const stackCategories: StackCategory[] = [
  {
    icon: '💻',
    name: 'Languages',
    items: [
      { icon: '📘', name: 'TypeScript', note: 'Strict mode', usage: 'All projects', level: 5 },
      { icon: '🟨', name: 'JavaScript', note: 'Node.js · Browser', usage: 'APIs & frontends', level: 5 },
      { icon: '🐘', name: 'PHP', note: 'Laravel apps', usage: 'Web applications', level: 4 },
      { icon: '🗃️', name: 'SQL', note: 'PostgreSQL · MySQL · Oracle', usage: 'Complex queries', level: 4 },
      { icon: '🐍', name: 'Python', note: 'Scripting', usage: 'Automation & tools', level: 4 },
    ],
  },
  {
    icon: '⚙️',
    name: 'Frameworks & Libraries',
    items: [
      { icon: '🟥', name: 'NestJS', note: 'Main framework', usage: 'Production - scalable services', level: 5 },
      { icon: '🔺', name: 'Laravel', note: 'PHP framework', usage: 'Backend services for web apps', level: 5 },
      { icon: '📨', name: 'BullMQ', note: 'Job queues', usage: 'Async processing', level: 4 },
      { icon: '🚀', name: 'Express.js', note: 'REST APIs', usage: 'Lightweight services', level: 3 },
      { icon: '⚛️', name: 'React.js', note: 'Inertia.js · Next.js', usage: 'Frontend UIs', level: 2 },
    ],
  },
  {
    icon: '🗄️',
    name: 'Databases & Tools',
    items: [
      { icon: '🐘', name: 'PostgreSQL', note: 'PostGIS · Prisma', usage: 'Primary DB · geospatial', level: 5 },
      { icon: '🐬', name: 'MySQL / Oracle', note: 'TypeORM · Sequelize', usage: 'Relational workloads', level: 4 },
      { icon: '📄', name: 'Git · Swagger', note: 'GitHub · GitLab · OpenAPI', usage: 'VCS & API docs', level: 4 },
      { icon: '⚡', name: 'Redis', note: 'Cache · pub-sub', usage: 'Sessions & queues', level: 3 },
      { icon: '🐳', name: 'Docker · VPS', note: 'Containers · Linux', usage: 'Deployments & servers', level: 3 },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-10! border-t border-border">
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 48px' }}>
        <div className="flex items-baseline gap-4 mb-10!">
          <span className="text-xs text-accent tracking-widest">02</span>
          <h2 className="font-sans text-4xl font-bold tracking-tight">Tech Stack</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stackCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-surface border border-border rounded-xl overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-border flex items-center gap-2.5">
                <span className="text-lg">{category.icon}</span>
                <span className="font-mono text-[15px] font-bold">{category.name}</span>
              </div>

              <div className="p-3!">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors hover:bg-[rgba(255,255,255,0.04)] cursor-default"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{item.icon}</span>
                      <div>
                        <div className="text-[13px]">{item.name}</div>
                        <div className="text-[11px] text-muted">{item.note}</div>
                      </div>
                    </div>
                    <div className="text-right max-w-30">
                      <div className="text-[11px] text-accent leading-[1.4]">{item.usage}</div>
                      <div className="flex gap-0.5 mt-1! justify-end">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < item.level ? 'bg-accent' : 'bg-border'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
