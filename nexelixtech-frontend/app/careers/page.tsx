import { careers } from "@/data/careers";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

export const metadata = {
  title: "Careers | Nexelix Tech",
  description: "Join our elite team of engineers and designers to build the future of software.",
};

export default function CareersPage() {
  return (
    <div className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Join the <span className="text-gradient-accent">Vanguard</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground-muted">
            We are always looking for exceptional talent who refuse to settle for mediocrity. Come build next-generation software with us.
          </p>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass-card p-8 rounded-2xl glow-border">
              <h3 className="font-display text-xl font-bold text-white mb-2">Remote-First</h3>
              <p className="text-foreground-muted text-sm">Work from anywhere in the world on a flexible schedule.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl glow-border">
              <h3 className="font-display text-xl font-bold text-white mb-2">Elite Hardware</h3>
              <p className="text-foreground-muted text-sm">Top-tier MacBook Pros and WFH stipends for everyone.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl glow-border">
              <h3 className="font-display text-xl font-bold text-white mb-2">Bleeding Edge</h3>
              <p className="text-foreground-muted text-sm">Always work with the absolute latest tech stacks.</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white mb-8">Open Positions</h2>
          
          <div className="space-y-6">
            {careers.map((job) => (
              <div key={job.id} className="glass-card p-8 rounded-2xl transition-all hover:border-accent-cyan/50 hover:shadow-lg hover:shadow-accent-cyan/10">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted">
                      <span className="flex items-center">
                        <Briefcase className="mr-1.5 h-4 w-4 text-accent-indigo" />
                        {job.department} ({job.type})
                      </span>
                      <span className="flex items-center">
                        <MapPin className="mr-1.5 h-4 w-4 text-accent-cyan" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 px-6 py-2.5 text-sm font-semibold text-white transition-colors">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-foreground-muted mb-6">
                  {job.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Requirements</h4>
                  <ul className="list-disc list-inside space-y-1 text-foreground-muted text-sm">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
