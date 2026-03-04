'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
      <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,136,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="absolute left-32 transform max-w-[800px]">
=======
    <div className="min-h-screen flex items-center px-12 pt-[120px] pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
      <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,136,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[800px]">
>>>>>>> 6dade488c8b37cd1f5ca7e86b54a6d8a9b1790ad
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs text-accent tracking-[0.15em] uppercase mb-6"
        >
          <span className="w-6 h-px bg-accent" />
<<<<<<< HEAD
          Backend & Data Engineer · NestJS, Microservices, Security
=======
          Backend Engineer · NestJS Specialist
>>>>>>> 6dade488c8b37cd1f5ca7e86b54a6d8a9b1790ad
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-[clamp(52px,7vw,96px)] font-extrabold leading-[0.95] tracking-[-3px] mb-6"
        >
          Building systems <em className="not-italic text-transparent [-webkit-text-stroke:1px_rgba(0,255,136,0.5)]">that scale</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[15px] text-muted leading-[1.8] max-w-[480px] mb-10"
        >
          I design and build backend infrastructure — microservices, security tools, and npm packages.
          The stuff users never see but always feel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-12"
        >
          <div>
            <span className="font-sans text-[32px] font-extrabold text-accent block">8+</span>
            <span className="text-xs text-muted tracking-[0.1em]">Production services</span>
          </div>
          <div>
            <span className="font-sans text-[32px] font-extrabold text-accent block">99.9%</span>
            <span className="text-xs text-muted tracking-[0.1em]">Avg uptime</span>
          </div>
          <div>
<<<<<<< HEAD
            <span className="font-sans text-[32px] font-extrabold text-accent block">~10K</span>
=======
            <span className="font-sans text-[32px] font-extrabold text-accent block">~500K</span>
>>>>>>> 6dade488c8b37cd1f5ca7e86b54a6d8a9b1790ad
            <span className="text-xs text-muted tracking-[0.1em]">Daily requests handled</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
