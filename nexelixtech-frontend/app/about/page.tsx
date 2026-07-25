import { teamMembers } from "@/data/team";
import { stats } from "@/data/stats";
import Image from "next/image";


export const metadata = {
  title: "About Us | Nexelix Tech",
  description: "Learn about our mission, our engineering culture, and the leadership team driving innovation.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            We build what <span className="text-gradient-accent">others can't.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground-muted">
            Nexelix Tech is a premier software engineering agency dedicated to crafting highly scalable, performant, and intelligent digital products. We partner with visionary companies to turn complex challenges into elegant solutions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="glass-card p-10 rounded-3xl glow-border">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-foreground-muted leading-relaxed">
              To empower modern enterprises with next-generation software architecture. We believe in writing clean, modular code, leveraging the absolute bleeding-edge of technology, and maintaining an unwavering commitment to performance and accessibility.
            </p>
          </div>
          <div className="glass-card p-10 rounded-3xl glow-border">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-foreground-muted leading-relaxed">
              To be the global benchmark for engineering excellence. In an era where AI and Web3 are fundamentally reshaping the internet, we strive to be the bridge that helps traditional businesses seamlessly cross into the future.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-32">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="glass-card flex flex-col gap-y-3 p-8 rounded-2xl text-center">
                <dt className="text-sm font-medium leading-6 text-foreground-muted uppercase tracking-wider">{stat.label}</dt>
                <dd className="order-first font-display text-5xl font-bold tracking-tight text-accent-cyan">
                  {stat.prefix}{stat.value}{stat.suffix}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Meet our Leadership
            </h2>
            <p className="mt-4 text-lg text-foreground-muted">
              Decades of combined experience scaling systems for millions of users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="glass-card rounded-3xl p-6 text-center group">
                <div className="mx-auto h-40 w-40 rounded-full overflow-hidden bg-surface-muted mb-6 ring-4 ring-surface relative">
                  {member.image && member.image !== "" && !member.image.endsWith(".svg") ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-indigo-200 text-4xl font-bold">
                      {/* Fallback avatar since SVG might be missing */}
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-accent-cyan font-medium mt-1 mb-4">{member.role}</p>
                <p className="text-sm text-foreground-muted mb-6 line-clamp-3">
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.specialties.slice(0, 2).map((spec, idx) => (
                    <span key={idx} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-md text-slate-300">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-4 flex-wrap">
                  {member.socials.email && (
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.socials.email}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                      Gmail
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                      LinkedIn
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                      Twitter
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
