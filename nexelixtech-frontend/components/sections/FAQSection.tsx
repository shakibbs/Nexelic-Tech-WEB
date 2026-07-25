"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { faqs } from "@/data/faqs";

// FAQ accordion with live search filter (SRS §14)
export function FAQSection() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const filtered = useMemo(() => {
    if (!query.trim()) return faqs;
    const q = query.toLowerCase();
    return faqs.filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section id="faq" className="cv-auto mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-medium text-accent-cyan">FAQ</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Questions? We&apos;ve Got Answers
        </h2>
      </div>

      {/* Search */}
      <div className="relative mt-8">
        <Search
          className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions..."
          aria-label="Search frequently asked questions"
          className="w-full rounded-xl border border-border bg-card-solid py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-foreground-muted focus:border-accent-cyan focus:outline-none"
        />
      </div>

      {/* Accordion */}
      <div className="mt-6 space-y-3">
        {filtered.length === 0 && (
          <p className="py-8 text-center text-foreground-muted">
            No questions match &quot;{query}&quot;.
          </p>
        )}
        {filtered.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="overflow-hidden rounded-xl card-solid">
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-medium">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-accent-cyan transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-5 pb-4 text-sm text-foreground-muted">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
