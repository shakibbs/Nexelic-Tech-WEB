'use client';

import { useState } from 'react';
import { estimatorOptions } from '@/data/estimator';

export function EstimatorWidget() {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());

  const toggleOption = (id: string) => {
    const newSet = new Set(selectedOptions);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedOptions(newSet);
  };

  const selectedData = estimatorOptions.filter(o => selectedOptions.has(o.id));
  const totalPrice = selectedData.reduce((acc, curr) => acc + curr.basePriceUSD, 0);
  const totalDays = selectedData.reduce((acc, curr) => acc + curr.estimatedDays, 0);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Project Cost & Timeline Estimator
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground-muted">
            Get an instant baseline estimate for your next project by selecting the options below.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            {estimatorOptions.map((opt) => {
              const isSelected = selectedOptions.has(opt.id);
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleOption(opt.id)}
                  className={`glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300 ${isSelected ? 'ring-2 ring-indigo-500 bg-white/5' : 'hover:bg-white/5'}`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">{opt.label}</h3>
                    <span className="text-sm bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-md">
                      $
                    </span>
                  </div>
                  <p className="text-sm text-foreground-muted mt-2">{opt.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="relative">
            <div className="sticky top-24 glass-card p-8 rounded-3xl glow-border">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Estimated Total</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-foreground-muted">Base Cost</span>
                  <span className="font-semibold text-3xl text-indigo-400">$</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-foreground-muted">Estimated Timeline</span>
                  <span className="font-semibold text-xl">{totalDays} Days</span>
                </div>
              </div>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-medium transition-colors mt-6">
                Export PDF Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
