'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-10! border-t border-border">
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 48px' }}>
        <div className="flex items-baseline gap-4 mb-10!">
          <span className="text-xs text-accent tracking-[0.1em]">03</span>
          <h2 className="font-sans text-4xl font-bold tracking-tight">About & Contact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface border border-border rounded-xl p-7"
          >
            <h3 className="font-sans text-xl font-bold mb-4">Who I Am</h3>
            <div className="text-[14px] text-muted leading-[1.8] space-y-3">
              <p>
                Backend engineer focused on building scalable microservices and security tools.
                I specialize in NestJS, TypeScript, and distributed systems.
              </p>
              <p>
                When I&apos;m not writing code, I&apos;m probably exploring security vulnerabilities,
                optimizing database queries, or contributing to open-source packages.
              </p>
              <p>
                My approach: clean architecture, proper testing, and infrastructure that doesn&apos;t
                wake you up at 3 AM.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface border border-border rounded-xl p-7"
          >
            <h3 className="font-sans text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <div className="text-[11px] text-accent2 tracking-[0.1em] uppercase mb-2">Email</div>
                <a
                  href="mailto:fadhiel@godwimp.me"
                  className="text-[14px] text-text hover:text-accent transition-colors"
                >
                  fadhiel@godwimp.me
                </a>
              </div>

              <div>
                <div className="text-[11px] text-accent2 tracking-[0.1em] uppercase mb-2 flex items-center gap-2">
                  Work Email
                </div>
                <a
                  href="mailto:work@godwimp.me"
                  className="text-[14px] text-text hover:text-accent transition-colors"
                >
                  work@godwimp.me
                </a>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="text-[11px] text-muted">
                  Available for freelance projects and full-time opportunities
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
