import type { TeamMember } from "@/lib/types";

// Core leadership & engineering team (SRS §8)
export const teamMembers: TeamMember[] = [
  {
    id: "tm-1",
    name: "Rakibul Islam Shakib",
    role: "",
    bio: "The dreamer who saw possibility where others saw limits.",
    specialties: ["Product Strategy", "Development", "Cloud Architecture"],
    socials: { github: "https://github.com/shakibbs", email: "rakibulislamshakib570@gmail.com" },
    image: "/images/team/shakib.jpg",
  },
  {
    id: "tm-2",
    name: "Sajid Mahmud",
    role: "",
    bio: "Turning ambition into reality through technology.",
    specialties: ["Frontend Development", "React", "Next.js"], // keeping some placeholder specialties or empty
    socials: { github: "https://github.com/saaaaajid", email: "sajidmahamud79@gmail.com" },
    image: "/images/team/sajid.jpg",
  },
  {
    id: "tm-3",
    name: "Ehsanul Haque Rohan",
    role: "",
    bio: "Refused to wait for opportunity. Chose to create it.",
    specialties: ["Machine Learning", "Data Science", "Python"], // keeping placeholders
    socials: { github: "https://github.com/Shimorikato123", email: "ehsanulrohan@gmail.com" },
    image: "/images/team/rohan.jpg",
  },
  {
    id: "tm-4",
    name: "Alamin",
    role: "",
    bio: "Solving complex problems with simple solutions.",
    specialties: ["Backend Development", "System Design", "Databases"], // keeping placeholders
    socials: { github: "https://github.com/alamin5g", email: "alaminvai5g@gmail.com" },
    image: "/images/team/alamin.jpg",
  },
  {
    id: "tm-5",
    name: "IKhtear Ahmed",
    role: "",
    bio: "Building the future one solution at a time.",
    specialties: ["Marketing", "Problem Solving", "Cloud"], // placeholders
    socials: { github: "#", email: "#" },
    image: "/images/team/ikhtear.jpg",
  },
];
