import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Calm Speaker',
    tag: 'Audio • Object UI',
    summary:
      'A domestic speaker with tactile controls and soft geometry. Designed for intuitive use and quiet presence.',
    image:
      'https://images.unsplash.com/photo-1526178612703-5cd3a2b2b662?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Field Lamp',
    tag: 'Lighting • CMF',
    summary:
      'Portable task light with balanced weight and magnetic charging. Diffuse optics for visual comfort.',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Studio Headphones',
    tag: 'Wearables • Ergonomics',
    summary:
      'Acoustic performance with modular pads and repairable components. Considered assembly and finish.',
    image:
      'https://images.unsplash.com/photo-1518441311845-05db6f2f90fa?q=80&w=1600&auto=format&fit=crop',
  },
];

const Card = ({ project, index }) => (
  <motion.a
    href="#"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
  >
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
    <div className="p-5">
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold tracking-[-0.01em]">{project.title}</h3>
        <span className="text-xs uppercase tracking-wide text-neutral-500">{project.tag}</span>
      </div>
      <p className="mt-2 text-neutral-600">{project.summary}</p>
      <div className="mt-4 inline-flex items-center text-sm font-medium text-neutral-900">
        View case study <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
      </div>
    </div>
  </motion.a>
);

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-neutral-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.01em] sm:text-3xl">Selected Work</h2>
            <p className="mt-2 max-w-2xl text-neutral-600">
              A concise set of projects showing process, decisions, and outcomes. Each case study balances visuals with short narrative captions.
            </p>
          </div>
          <a href="#" className="hidden text-sm font-medium text-neutral-900 hover:underline sm:inline">
            Full archive
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Card key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
