'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-size-[48px_48px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-150 h-150 bg-[radial-gradient(circle,rgba(0,255,136,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full">
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '96px 48px 0' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs text-accent tracking-[0.15em] uppercase mb-6"
          >
            <span className="w-6 h-px bg-accent" />
            Backend & Data Engineer · NestJS, Microservices, Security
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[clamp(40px,7vw,96px)] font-extrabold leading-[0.95] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-3px] mb-6"
          >
            Building systems{' '}
            <em className="not-italic text-transparent [-webkit-text-stroke:1px_rgba(0,255,136,0.5)]">
              that scale
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[14px] sm:text-[15px] text-muted leading-[1.8] mt-3! max-w-120"
          >
            I design and build backend infrastructure — microservices, security tools, and npm packages.
            The stuff users never see but always feel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 sm:gap-12 mt-10"
          >
            <div>
              <span className="font-sans text-[32px] font-extrabold text-accent block">8+</span>
              <span className="text-xs text-muted tracking-widest">Production services</span>
            </div>
            <div>
              <span className="font-sans text-[32px] font-extrabold text-accent block">99.9%</span>
              <span className="text-xs text-muted tracking-widest">Avg uptime</span>
            </div>
            <div>
              <span className="font-sans text-[32px] font-extrabold text-accent block">~10K</span>
              <span className="text-xs text-muted tracking-widest">Daily requests handled</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
