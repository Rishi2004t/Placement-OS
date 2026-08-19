"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ShieldAlert, Crosshair, TrendingUp, Target } from "lucide-react"

import { Container } from "@/components/ui/Container"
import { Surface } from "@/components/ui/Surface"
import { Badge } from "@/components/ui/Badge"
import { demoData } from "@/data/demo"

export function PlacementReadiness() {
  // Sort areas by score to create visual hierarchy (lowest first)
  const sortedAreas = [...demoData.preparationAreas].sort((a, b) => a.score - b.score)
  
  // Extract top 3 highest priority items for "Focus Next"
  const focusNext = demoData.preparationAreas
    .filter(area => area.priority === "High" || area.priority === "Medium")
    .sort((a, b) => {
      if (a.priority === "High" && b.priority !== "High") return -1
      if (b.priority === "High" && a.priority !== "High") return 1
      return a.score - b.score
    })
    .slice(0, 3)

  return (
    <section className="py-24 bg-page relative border-t border-border/50" id="readiness">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">PLACEMENT READINESS</Badge>
          <h2 className="text-3xl font-bold text-primary-text mb-4">
            Know how ready you actually are.
          </h2>
          <p className="text-muted-text">
            Your readiness is not one number. It is a view of the skills that matter for the role you want.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visualization */}
          <div className="flex justify-center lg:justify-end w-full relative">
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-accent/5 blur-[80px] rounded-full z-0 pointer-events-none" />
            
            <Surface className="relative z-10 p-8 sm:p-12 w-full max-w-[400px] aspect-square rounded-full flex flex-col items-center justify-center border border-border/80 bg-surface/30 shadow-2xl backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-2 rounded-full border border-dashed border-border/50 pointer-events-none" />
              
              <div className="absolute top-10 flex flex-col items-center gap-1">
                <span className="text-[10px] font-bold tracking-widest text-accent uppercase flex items-center gap-1.5 bg-accent/10 px-2 py-0.5 rounded">
                  <Target className="h-3 w-3" />
                  Software Engineer
                </span>
                <span className="text-[10px] font-bold tracking-widest text-secondary-text uppercase mt-1">
                  Placement Readiness
                </span>
              </div>

              {/* Circular Visualization SVG */}
              <div className="absolute inset-4">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {/* Background Track */}
                  <circle 
                    cx="50" cy="50" r="44" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    className="text-border" 
                  />
                  {/* Progress Arc */}
                  <motion.circle 
                    cx="50" cy="50" r="44" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="text-accent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                    initial={{ strokeDasharray: "0 276.5" }}
                    whileInView={{ strokeDasharray: `${(demoData.readinessScore / 100) * 276.5} 276.5` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
              </div>

              <div className="flex flex-col items-center justify-center gap-1 mt-6">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-6xl sm:text-7xl font-bold tracking-tighter text-primary-text drop-shadow-sm"
                >
                  {demoData.readinessScore}%
                </motion.span>
                <span className="text-[10px] font-medium text-muted-text uppercase tracking-widest bg-elevated px-2 py-0.5 rounded-full mt-4 border border-border">
                  Live Profile Analysis
                </span>
              </div>
            </Surface>
          </div>

          {/* Right Column: Breakdown & Focus Next */}
          <div className="flex flex-col gap-10 w-full max-w-xl mx-auto lg:mx-0">
            
            {/* Skill Breakdown Hierarchy */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4 text-accent" />
                <h3 className="text-[11px] font-bold tracking-widest text-primary-text uppercase">
                  Skill Breakdown
                </h3>
              </div>
              
              <div className="flex flex-col gap-4">
                {/* Group by status conceptually without changing data structure */}
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-success border-b border-border/50 pb-1">Strong</span>
                  {sortedAreas.filter(a => a.score > 80).map((area) => (
                    <div key={area.id} className="flex items-center gap-4 group">
                      <span className="w-32 text-sm font-medium text-secondary-text truncate group-hover:text-primary-text transition-colors">{area.name}</span>
                      <div className="flex-1 h-1 bg-surface rounded-full overflow-hidden"><div className="h-full bg-success/80" style={{width: `${area.score}%`}} /></div>
                      <span className="w-8 text-right text-xs font-bold text-success">{area.score}%</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent border-b border-border/50 pb-1">Watch</span>
                  {sortedAreas.filter(a => a.score > 65 && a.score <= 80).map((area) => (
                    <div key={area.id} className="flex items-center gap-4 group">
                      <span className="w-32 text-sm font-medium text-secondary-text truncate group-hover:text-primary-text transition-colors">{area.name}</span>
                      <div className="flex-1 h-1 bg-surface rounded-full overflow-hidden"><div className="h-full bg-accent/80" style={{width: `${area.score}%`}} /></div>
                      <span className="w-8 text-right text-xs font-bold text-accent">{area.score}%</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-warning border-b border-border/50 pb-1">High Priority</span>
                  {sortedAreas.filter(a => a.score <= 65).map((area) => (
                    <div key={area.id} className="flex items-center gap-4 group">
                      <span className="w-32 text-sm font-medium text-secondary-text truncate group-hover:text-primary-text transition-colors">{area.name}</span>
                      <div className="flex-1 h-1 bg-surface rounded-full overflow-hidden"><div className="h-full bg-warning/80" style={{width: `${area.score}%`}} /></div>
                      <span className="w-8 text-right text-xs font-bold text-warning">{area.score}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Focus Next Panel */}
            <Surface className="p-6 rounded-xl border-accent/20 bg-accent/5 flex flex-col gap-5 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              
              <div className="flex items-center gap-2">
                <Crosshair className="h-5 w-5 text-accent" />
                <h3 className="text-[11px] font-bold tracking-widest text-primary-text uppercase">
                  Focus Next
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {focusNext.map((item, index) => (
                  <div key={item.id} className="flex flex-col gap-2 p-3 rounded-lg bg-surface border border-border/80 shadow-sm">
                    <span className="text-[10px] font-bold text-muted-text">0{index + 1}</span>
                    <span className="text-sm font-bold text-primary-text leading-tight">{item.name}</span>
                    <div className="flex items-center gap-1.5 mt-auto pt-2">
                      {item.priority === "High" ? (
                        <ShieldAlert className="h-3 w-3 text-warning" />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      )}
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${item.priority === 'High' ? 'text-warning' : 'text-secondary-text'}`}>
                        {item.priority} Priority
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Surface>

          </div>
        </div>
      </Container>
    </section>
  )
}
