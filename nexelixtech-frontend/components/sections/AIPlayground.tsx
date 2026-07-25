"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Database, FileText, BrainCircuit, Terminal, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const nodes = [
  { id: "doc", label: "Document", icon: FileText, color: "text-blue-400" },
  { id: "vdb", label: "Vector DB", icon: Database, color: "text-emerald-400" },
  { id: "llm", label: "LLM Agent", icon: BrainCircuit, color: "text-indigo-400" },
  { id: "out", label: "Output", icon: Terminal, color: "text-cyan-400" },
];

// Live AI Capabilities Playground (SRS §6 - Section 5)
export function AIPlayground() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveNode(0);

    // Sequence the active nodes
    setTimeout(() => setActiveNode(1), 800);
    setTimeout(() => setActiveNode(2), 1600);
    setTimeout(() => setActiveNode(3), 2400);
    setTimeout(() => {
      setActiveNode(null);
      setIsRunning(false);
    }, 3200);
  };

  return (
    <section className="cv-auto mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-accent-cyan">Capabilities</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Live AI Architecture
        </h2>
        <p className="mt-4 text-foreground-muted">
          Watch how our custom RAG (Retrieval-Augmented Generation) pipeline processes data in real-time.
        </p>
      </div>

      <div className="mt-16 overflow-hidden rounded-2xl card-solid p-8 sm:p-12 border border-border/50 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isActive = activeNode === index;
            const isPast = activeNode !== null && index < activeNode;

            return (
              <div key={node.id} className="relative flex flex-col items-center">
                {/* Connecting Line (Desktop) */}
                {index < nodes.length - 1 && (
                  <div className="hidden md:block absolute left-[50%] top-8 h-[2px] w-[calc(100%+2rem)] lg:w-[calc(100%+4rem)] bg-border z-[-1]">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent-indigo to-accent-cyan"
                      initial={{ width: "0%" }}
                      animate={{ width: isPast ? "100%" : "0%" }}
                      transition={{ duration: 0.8, ease: "linear" }}
                    />
                  </div>
                )}
                {/* Connecting Line (Mobile) */}
                {index < nodes.length - 1 && (
                  <div className="md:hidden absolute top-[50%] left-8 w-[2px] h-[calc(100%+2rem)] bg-border z-[-1]">
                    <motion.div
                      className="w-full bg-gradient-to-b from-accent-indigo to-accent-cyan"
                      initial={{ height: "0%" }}
                      animate={{ height: isPast ? "100%" : "0%" }}
                      transition={{ duration: 0.8, ease: "linear" }}
                    />
                  </div>
                )}

                <motion.div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-surface border ${
                    isActive ? "border-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.5)]" : "border-border"
                  } transition-colors duration-300`}
                  animate={{
                    scale: isActive ? 1.1 : 1,
                  }}
                >
                  <Icon className={`h-8 w-8 ${isActive || isPast ? node.color : "text-foreground-muted"}`} />
                </motion.div>
                <p className={`mt-4 font-display text-sm font-semibold ${isActive ? "text-foreground" : "text-foreground-muted"}`}>
                  {node.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Button
            size="lg"
            onClick={runSimulation}
            disabled={isRunning}
            className="w-48 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Play className="h-4 w-4" />
              {isRunning ? "Simulating..." : "Run Simulation"}
            </span>
            {isRunning && (
              <motion.div
                className="absolute inset-0 bg-accent-cyan/20 z-0"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 3.2, ease: "linear" }}
              />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
