"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Target, Search, ShieldCheck, ArrowRight } from "lucide-react"

import { Container } from "@/components/ui/Container"

export function PlacementWorkflow() {
  const steps = [
    {
      num: "01",
      title: "TARGET ROLE",
      desc: "Paste the job description",
      icon: Target
    },
    {
      num: "02",
      title: "SKILL GAP",
      desc: "Identify required skills",
      icon: Search
    },
    {
      num: "03",
      title: "READINESS",
      desc: "Measure current strength",
      icon: ShieldCheck
    },
    {
      num: "04",
      title: "NEXT ACTION",
      desc: "Know what to practice next",
      icon: ArrowRight
    }
  ]

  return (
    <section className="py-24 bg-page border-t border-border/50 relative overflow-hidden" id="workflow">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary-text mb-4">
            From job description to next action.
          </h2>
          <p className="text-lg text-muted-text">
            PlacementOS turns a target role into a measurable preparation loop.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px bg-border/80" />
          {/* Active Path Line (Desktop) */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute top-[28px] left-[10%] h-px bg-gradient-to-r from-accent to-accent/20"
          />

          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-[28px] w-px bg-border/80" />
          {/* Active Path Line (Mobile) */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="md:hidden absolute top-0 left-[28px] w-px bg-gradient-to-b from-accent to-accent/20"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex md:flex-col items-center md:text-center gap-6 md:gap-4 relative group"
                >
                  <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-surface border border-border shadow-md z-10 group-hover:border-accent/50 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex flex-col md:items-center">
                    <span className="text-[10px] font-bold text-muted-text mb-1">{step.num}</span>
                    <h3 className="text-sm font-bold text-primary-text mb-1">{step.title}</h3>
                    <p className="text-xs font-medium text-secondary-text">{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
