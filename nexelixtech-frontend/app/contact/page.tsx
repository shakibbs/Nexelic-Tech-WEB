import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact Us | Nexelix Tech",
  description: "Get in touch with our team to discuss your next software engineering project.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 sm:pt-24 lg:pt-32">
      <ContactSection />
    </div>
  );
}
