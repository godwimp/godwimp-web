'use client';

import { motion } from 'framer-motion';

export default function TechStack() {
  const stackCategories = [
    {
      icon: '⚙️',
      name: 'Backend & Frameworks',
      items: [
        { icon: '🟥', name: 'NestJS', note: 'Main framework', usage: 'Production services', level: 5 },
        { icon: '🟩', name: 'Node.js', note: 'Express · Fastify', usage: 'REST & GraphQL APIs', level: 5 },
        { icon: '📘', name: 'TypeScript', note: 'Strict mode', usage: 'All projects', level: 5 },
      ],
    },
    {
      icon: '🗄️',
      name: 'Databases & Storage',
      items: [
        { icon: '🐘', name: 'PostgreSQL', note: 'Primary relational DB', usage: 'Complex queries & transactions', level: 5 },
        { icon: '⚡', name: 'Redis', note: 'Cache · queue · pub-sub', usage: 'BullMQ · sessions', level: 4 },
        { icon: '🍃', name: 'MongoDB', note: 'Document store', usage: 'Logs & flexible schemas', level: 3 },
      ],
    },
    {
      icon: '☁️',
      name: 'Infrastructure & DevOps',
      items: [
        { icon: '🐳', name: 'Docker', note: 'Containers', usage: 'All deployments', level: 4 },
        { icon: '📨', name: 'Message Queues', note: 'BullMQ · RabbitMQ', usage: 'Async processing', level: 4 },
        { icon: '🔒', name: 'Security', note: 'JWT · OAuth · Helmet', usage: 'Auth & protection', level: 5 },
      ],
    },
  ];

  return (
    <section id="stack" className="px-12 py-20 border-t border-border">
      <div className="flex items-baseline gap-4 mb-12">
        <span className="text-xs text-accent tracking-[0.1em]">02</span>
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
              <span className="font-sans text-[15px] font-bold">{category.name}</span>
            </div>

            <div className="p-3">
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
                  <div className="text-right max-w-[120px]">
                    <div className="text-[11px] text-accent leading-[1.4]">{item.usage}</div>
                    <div className="flex gap-0.5 mt-1 justify-end">
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
    </section>
  );
}
