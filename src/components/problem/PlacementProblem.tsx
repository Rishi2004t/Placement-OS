"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Target } from "lucide-react"

import { Container } from "@/components/ui/Container"
import { Surface } from "@/components/ui/Surface"

export function PlacementProblem() {
  const scatteredTopics = ["DSA", "SQL", "DBMS", "CN", "OS", "Projects", "Aptitude", "Interviews"]

  return (
    <section className="py-24 md:py-32 bg-page border-t border-border/50 relative overflow-hidden" id="placement-problem">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary-text mb-6">
            Too many resources.<br />
            <span className="text-secondary-text">No clear direction.</span>
          </h2>
          <p className="text-lg text-muted-text">
            Placement preparation doesn&apos;t fail because students lack material. It gets messy because everything lives somewhere different — and nobody tells you what matters next.
          </p>
        </div>

        <div className="flex flex-col items-center max-w-5xl mx-auto">
          {/* Scattered Preparation */}
          <div className="w-full">
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {scatteredTopics.map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-5 py-2.5 rounded-lg border border-border/80 bg-surface/50 text-secondary-text text-sm font-medium shadow-sm backdrop-blur-sm hover:border-accent/40 transition-colors cursor-default"
                >
                  {topic}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Transition / Convergence */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="my-10 flex flex-col items-center gap-2"
          >
            <div className="h-12 w-px bg-gradient-to-b from-border/0 via-accent/50 to-accent" />
          </motion.div>

          {/* Focused Preparation */}
          <div className="w-full max-w-md">
            <Surface className="p-1 rounded-2xl bg-gradient-to-b from-accent/20 to-transparent">
              <div className="bg-elevated rounded-xl p-8 flex flex-col items-center text-center gap-6 border border-border shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5" />
                
                <div className="relative flex flex-col items-center gap-2">
                  <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent ring-1 ring-accent/30 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold tracking-tight text-primary-text mt-2">PlacementOS</span>
                </div>

                <div className="w-full h-px bg-border/80 relative" />
                
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="flex items-center gap-2 text-accent font-semibold tracking-wide uppercase text-sm"
                >
                  <Target className="h-4 w-4" />
                  Clear Next Step
                </motion.div>
              </div>
            </Surface>
          </div>
        </div>
      </Container>
    </section>
  )
}
