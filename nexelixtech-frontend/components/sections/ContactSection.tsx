'use client';

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Start Your Project
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground-muted">
            Book a discovery call or submit an RFP. Our engineering team responds within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cal.com Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 glow-border flex flex-col items-center justify-center min-h-[500px]"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Book a Discovery Call</h3>
              <p className="text-foreground-muted mb-8 max-w-md mx-auto">
                Schedule a 30-minute technical consultation directly with our engineering leadership to discuss your architecture and requirements.
              </p>
              <button className="bg-white text-black hover:bg-slate-200 px-8 py-3 rounded-xl font-medium transition-colors">
                Open Calendar (Cal.com)
              </button>
            </div>
          </motion.div>

          {/* RFP Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 lg:p-12 glow-border"
          >
            <h3 className="text-2xl font-bold mb-6">Submit an RFP</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Corporate Email</label>
                  <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Project Budget Range</label>
                <select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-foreground">
                  <option value="">Select a range...</option>
                  <option value="5k-15k">$5k - $15k (MVP)</option>
                  <option value="15k-50k">$15k - $50k (Platform Build)</option>
                  <option value="50k+">$50k+ (Enterprise)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Project Details</label>
                <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <div className="pt-2">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
