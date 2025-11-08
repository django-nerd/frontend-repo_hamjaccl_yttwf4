import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold tracking-[-0.01em] sm:text-3xl">About</h2>
          <p className="mt-4 text-sm uppercase tracking-wide text-neutral-500">Product & Industrial Designer</p>
        </div>
        <div className="md:col-span-3">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-lg leading-relaxed text-neutral-700"
          >
            I design with intention: balancing functional rigor, narrative coherence, and elegant restraint. My practice moves from research to sketch to prototype, iterating through tangible feedback. The result is work that feels inevitable—quietly confident, useful, and emotionally resonant.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-neutral-700"
          >
            I’m comfortable across hardware and digital touchpoints: CMF strategy, enclosure design, brand-aligned UX, and design for manufacture. I enjoy building simple systems that scale—products that communicate clearly and feel good in the hand.
          </motion.p>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Focus</p>
              <ul className="mt-2 space-y-1 text-sm text-neutral-800">
                <li>Industrial design</li>
                <li>Design systems</li>
                <li>UX for devices</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Tools</p>
              <ul className="mt-2 space-y-1 text-sm text-neutral-800">
                <li>Rhino / Fusion</li>
                <li>KeyShot</li>
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Values</p>
              <ul className="mt-2 space-y-1 text-sm text-neutral-800">
                <li>Clarity</li>
                <li>Craft</li>
                <li>Honesty</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Availability</p>
              <ul className="mt-2 space-y-1 text-sm text-neutral-800">
                <li>Studio collab</li>
                <li>Consulting</li>
                <li>New briefs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
