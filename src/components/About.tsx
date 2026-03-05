'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

export default function About() {
  return (
    <section id="about" className="py-10! border-t border-border">
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 48px' }}>
        <div className="flex items-baseline gap-4 mb-10!">
          <span className="text-xs text-accent tracking-widest">03</span>
          <h2 className="font-sans text-4xl font-bold tracking-tight">About & Contact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface border border-border rounded-xl p-7!"
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
            className="bg-surface border border-border rounded-xl p-7!"
          >
            <h3 className="font-sans text-xl font-bold mb-2">Get in Touch</h3>
            <p className="text-[13px] text-muted mb-6 leading-relaxed">
              Available for freelance &amp; full-time. Reply within 24h.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
