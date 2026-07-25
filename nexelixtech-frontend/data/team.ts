import type { TeamMember } from "@/lib/types";

// Core leadership & engineering team (SRS §8)
export const teamMembers: TeamMember[] = [
  {
    id: "tm-1",
    name: "Rakibul Islam Shakib",
    role: "",
    bio: "The dreamer who saw possibility where others saw limits.",
    specialties: ["Product Strategy", "Full Stack-Development", "Cloud Architecture"],
    socials: { github: "https://github.com/shakibbs", email: "shakib@nexelixtech.com" },
    image: "/images/team/shakib.jpg",
  },
  {
    id: "tm-2",
    name: "Md.Sajid Mahamud",
    role: "",
    bio: "Turning ambition into reality through technology.",
    specialties: ["Angular", ".NET"], // keeping some placeholder specialties or empty
    socials: { github: "https://github.com/saaaaajid", email: "sajid@nexelixtech.com" },
    image: "/images/team/sajid.jpg",
  },
  {
    id: "tm-3",
    name: "Ehsanul Haque Rohan",
    role: "",
    bio: "Refused to wait for opportunity. Chose to create it.",
    specialties: ["Machine Learning", "Data Science", "Python"], // keeping placeholders
    socials: { github: "https://github.com/Shimorikato123", email: "rohan@nexelixtech.com" },
    image: "/images/team/rohan.jpg",
  },
  {
    id: "tm-4",
    name: "Alamin",
    role: "",
    bio: "Solving complex problems with simple solutions.",
    specialties: ["Backend Development", "System Design", "Databases"], // keeping placeholders
    socials: { github: "https://github.com/alamin5g", email: "alamin@nexelixtech.com" },
    image: "/images/team/alamin.jpg",
  },
  {
    id: "tm-5",
    name: "IKhtear Ahmed",
    role: "",
    bio: "Building the future one solution at a time.",
    specialties: ["Marketing", "Problem Solving", "Cloud"], // placeholders
    socials: { github: "#", email: "choton@nexelixtech.com" },
    image: "/images/team/ikhtear.jpg",
  },
];
