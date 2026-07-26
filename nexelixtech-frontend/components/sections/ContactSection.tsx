'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to send message');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong.');
    }
  };

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
              <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Book a Discovery Call</h3>
              <p className="text-foreground-muted mb-8 max-w-md mx-auto">
                Schedule a 30-minute technical consultation directly with our engineering leadership to discuss your architecture and requirements.
              </p>
              <button className="bg-white text-black hover:bg-slate-200 px-8 py-3 rounded-xl font-medium transition-colors">
                Open Calender(Upcoming)
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
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold">Message Sent!</h4>
                <p className="text-foreground-muted">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-purple-400 hover:text-purple-300 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input required type="text" name="Name" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Corporate Email</label>
                    <input required type="email" name="Email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Details</label>
                  <textarea required name="Details" rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Tell us about your requirements..."></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm font-medium">{errorMessage}</p>
                )}

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full flex justify-center items-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
