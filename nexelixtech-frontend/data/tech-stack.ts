export type TechItem = {
  name: string;
  category: string;
  note?: string;
  featured?: boolean;
};

export const techStack: TechItem[] = [
  // Languages
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "PHP", category: "Languages" },
  { name: "C#", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },

  // Frontend
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Spring Boot", category: "Backend", note: "Java" },
  { name: "Django", category: "Backend", note: "Python" },
  { name: "Laravel", category: "Backend", note: "PHP" },
  { name: ".NET", category: "Backend", note: "C#" },
  { name: "Odoo", category: "Backend", note: "ERP" },

  // Infra
  { name: "PostgreSQL", category: "Infra" },
  { name: "Docker", category: "Infra" },
  { name: "AWS", category: "Infra", featured: true },
];
