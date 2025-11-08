import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[540px] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient top/bottom to improve legibility; does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-14 sm:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl md:text-6xl"
        >
          Designing clarity.
          <span className="block font-normal text-neutral-200">Where function, story, and aesthetics align.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-5 max-w-2xl text-neutral-300"
        >
          I’m a product and industrial designer crafting purposeful objects and experiences with minimal form, measured emotion, and tactile detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
          >
            View Portfolio
            <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-white/40 bg-white/5 px-5 py-3 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            About
          </a>
        </motion.div>

        {/* Tagline suggestions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-xs text-neutral-400"
        >
          <span className="mr-2 font-medium text-neutral-300">Tagline options:</span>
          <span className="mr-3">• Designing clarity</span>
          <span className="mr-3">• Where function meets emotion</span>
          <span>• Stories shaped into objects</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
