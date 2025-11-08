import React from 'react';
import { Mail, FileText, ArrowRight } from 'lucide-react';

const ServicesContact = () => {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold tracking-[-0.01em] sm:text-3xl">Services</h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            I partner with teams to bring products from idea to launch. I’m comfortable stepping in across the process and owning outcomes with clarity and craft.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Industrial Design</h3>
              <ul className="mt-3 space-y-2 text-neutral-700">
                <li>Research & insights</li>
                <li>Concept & CMF strategy</li>
                <li>Prototyping & DFM</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Product Experience</h3>
              <ul className="mt-3 space-y-2 text-neutral-700">
                <li>Object UI & interaction</li>
                <li>Design systems</li>
                <li>Design ops & specs</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="contact" className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="mt-2 text-neutral-700">Open to collaborations and new briefs. Based in — but working globally.</p>
          <div className="mt-4 space-y-3">
            <a
              href="mailto:you@example.com"
              className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50"
            >
              <span className="inline-flex items-center gap-2"><Mail size={16} /> Email</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50"
            >
              <span className="inline-flex items-center gap-2"><FileText size={16} /> Resume</span>
              <ArrowRight size={16} />
            </a>
          </div>
          <p className="mt-3 text-xs text-neutral-500">Response time: within 48 hours.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesContact;
