"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function About() {
  return (
    <section id="about" className="py-10! border-t border-border">
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 48px" }}>
        <div className="flex items-baseline gap-4 mb-10!">
          <span className="text-xs text-accent tracking-widest">03</span>
          <h2 className="font-sans text-4xl font-bold tracking-tight">
            About & Contact
          </h2>
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
                Backend & Data Engineer who enjoys building things that actually
                scale. From RESTful APIs and microservices to geospatial
                pipelines and security tooling — if it touches a server, I'm
                probably into it.
              </p>
              <p>
                Built 120+ endpoints, shipped a reusable backend core package
                used across multiple services, and wired up a honeypot that
                fingerprints attackers in real-time. Also done my share of data
                preprocessing, spatial analysis, and query optimization that
                made DBAs less angry.
              </p>
              <p>
                Outside of work, I moonlight as a teaching assistant — breaking
                down data structures, SQL, and OOP to 150+ students. Turns out
                explaining things to others is one of the best ways to actually
                understand them yourself.
              </p>
              <p>
                Clean architecture, automated everything, and infra that
                doesn&apos;t page you at 3 AM. That&apos;s the goal, always.
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
