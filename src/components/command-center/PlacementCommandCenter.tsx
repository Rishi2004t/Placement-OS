"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Activity, Target, ShieldCheck, Circle, TrendingUp } from "lucide-react"
import { demoData } from "@/data/demo"

export function PlacementCommandCenter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative flex flex-col rounded-2xl border border-border/80 bg-surface/80 p-1 shadow-2xl overflow-hidden backdrop-blur-xl"
    >
      <div className="flex flex-col bg-elevated rounded-xl border border-border/50 overflow-hidden relative">
        {/* Top Status Row */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border/50 bg-surface/50">
          <div className="flex items-center gap-2">
            <Activity className="h-3.5 w-3.5 text-accent" />
            <span className="text-[10px] font-bold tracking-widest text-secondary-text uppercase">
              Live Placement Profile
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-[10px] font-medium text-muted-text">Tracking preparation</span>
          </div>
        </div>

        <div className="p-5 md:p-6 grid gap-6">
          
          {/* Target Role & Readiness */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5 p-4 rounded-lg bg-surface border border-border/50">
              <span className="text-[10px] font-bold tracking-widest text-muted-text uppercase">Target Role</span>
              <div className="flex items-center gap-2 mt-1">
                <Target className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-primary-text">{demoData.user.targetRole}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 p-4 rounded-lg bg-surface border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-success/80" />
              <span className="text-[10px] font-bold tracking-widest text-muted-text uppercase">Readiness</span>
              <div className="flex items-center gap-2 mt-1">
                <ShieldCheck className="h-4 w-4 text-success" />
                <span className="text-sm font-bold text-primary-text">{demoData.readinessScore}%</span>
              </div>
            </div>
          </div>

          {/* Skill Signals */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold tracking-widest text-secondary-text uppercase">Skill Signals</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {demoData.skills.slice(0, 5).map((skill) => {
                let colorClass = "text-warning bg-warning/10 border-warning/20"
                if (skill.score > 80) colorClass = "text-success bg-success/10 border-success/20"
                else if (skill.score > 65) colorClass = "text-accent bg-accent/10 border-accent/20"
                
                return (
                  <div key={skill.name} className="flex items-center justify-between px-3 py-2 rounded-md bg-surface border border-border/50">
                    <span className="text-xs font-medium text-secondary-text truncate mr-2">{skill.name}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${colorClass}`}>
                      {skill.score}%
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Priorities & Checkpoint */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-border/50">
            <div className="flex flex-col gap-3">
              <h3 className="text-[10px] font-bold tracking-widest text-primary-text uppercase flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-accent" />
                Today&apos;s Focus
              </h3>
              <div className="flex flex-col gap-2">
                {demoData.todaysFocus.slice(0, 2).map((item, i) => (
                  <div key={item.task} className="flex items-start gap-2">
                    <span className="text-xs font-bold text-muted-text mt-0.5">{i + 1}.</span>
                    <span className="text-xs font-medium text-primary-text leading-tight">{item.task}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Next Checkpoint
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 p-2 rounded-md bg-accent/5 border border-accent/20">
                  <Circle className="h-3.5 w-3.5 text-accent shrink-0" />
                  <span className="text-xs font-medium text-primary-text truncate">{demoData.upcoming[0]?.task || "System Design Basics"}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Subtle outer glow highlight */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/5" />
    </motion.div>
  )
}
