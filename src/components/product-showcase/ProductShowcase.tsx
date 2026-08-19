"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LayoutDashboard, Compass, Brain, BookOpen, MessageSquare, CheckCircle2, ArrowRight, Circle, Target, ShieldCheck } from "lucide-react"

import { Container } from "@/components/ui/Container"
import { Surface } from "@/components/ui/Surface"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { demoData } from "@/data/demo"

type TabID = "overview" | "preparation" | "skill-gap" | "practice" | "interviews"

export function ProductShowcase() {
  const [activeTab, setActiveTab] = React.useState<TabID>("overview")

  const tabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "preparation", label: "Preparation", icon: Compass },
    { id: "skill-gap", label: "Skill Gap", icon: Brain },
    { id: "practice", label: "Practice", icon: BookOpen },
    { id: "interviews", label: "Interviews", icon: MessageSquare },
  ] as const

  return (
    <section className="py-24 bg-page border-t border-border/50" id="product-showcase">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">PRODUCT SHOWCASE</Badge>
          <h2 className="text-3xl font-bold text-primary-text mb-4">
            Everything in one place
          </h2>
          <p className="text-muted-text">
            Experience a focused command center designed to take you from day one to offer day.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-b from-accent/10 to-transparent rounded-[20px] blur-lg pointer-events-none" />
          
          <Surface className="relative overflow-hidden rounded-xl border border-border/80 bg-elevated/40 shadow-2xl flex flex-col md:flex-row h-auto md:h-[600px] backdrop-blur-xl">
            {/* Sidebar */}
            <div className="w-full md:w-56 border-b md:border-b-0 md:border-r border-border/50 bg-surface/50 p-4 md:py-6 md:px-3 shrink-0 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible">
              <div className="hidden md:flex items-center gap-2 mb-8 px-3">
                <div className="h-6 w-6 rounded bg-accent/10 flex items-center justify-center text-accent ring-1 ring-accent/30 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                  <Target className="h-3.5 w-3.5" />
                </div>
                <span className="font-bold text-[11px] tracking-widest text-primary-text uppercase">Workspace</span>
              </div>
              
              <nav className="flex flex-row md:flex-col gap-1 w-full" aria-label="Showcase tabs">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap focus:outline-none ${
                        isActive 
                          ? "text-primary-text" 
                          : "text-muted-text hover:text-secondary-text hover:bg-surface/50"
                      }`}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="activeTab" 
                          className="absolute inset-0 bg-elevated border border-border/80 shadow-sm rounded-md" 
                          initial={false}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <Icon className={`relative z-10 h-4 w-4 ${isActive ? "text-accent" : "text-muted-text"}`} />
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-page/80 flex flex-col overflow-hidden relative">
              {/* Top Context Bar */}
              <header className="h-14 border-b border-border/50 flex items-center justify-between px-6 shrink-0 bg-surface/30 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold text-secondary-text tracking-wide">
                    {demoData.user.targetRole}
                  </span>
                  <div className="h-4 w-px bg-border" />
                  <span className="text-xs font-medium text-success flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Readiness: {demoData.readinessScore}%
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-xs text-accent font-bold">
                    {demoData.user.firstName[0]}
                  </div>
                </div>
              </header>

              {/* Tab Content Area */}
              <main className="flex-1 overflow-y-auto p-6 md:p-8 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="h-full"
                  >
                    {activeTab === "overview" && <OverviewTab />}
                    {activeTab === "preparation" && <PreparationTab />}
                    {activeTab === "skill-gap" && <SkillGapTab />}
                    {activeTab === "practice" && <PracticeTab />}
                    {activeTab === "interviews" && <InterviewsTab />}
                  </motion.div>
                </AnimatePresence>
              </main>
            </div>
          </Surface>
        </div>
      </Container>
    </section>
  )
}

function OverviewTab() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Surface className="p-5 flex flex-col gap-4 bg-elevated/50">
          <span className="text-xs font-semibold text-muted-text uppercase tracking-wider">Overall Readiness</span>
          <div className="flex items-end gap-3">
            <span className="text-5xl font-bold tracking-tight text-primary-text">{demoData.readinessScore}%</span>
            <span className="text-sm text-success font-medium mb-1.5">On track</span>
          </div>
          <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
            <div className="h-full bg-success" style={{ width: `${demoData.readinessScore}%` }} />
          </div>
        </Surface>

        <Surface className="p-5 flex flex-col gap-4 bg-elevated/50">
          <span className="text-xs font-semibold text-muted-text uppercase tracking-wider">Today&apos;s Focus</span>
          <div className="flex flex-col gap-3">
            {demoData.todaysFocus.map(item => (
              <div key={item.task} className="flex items-center gap-3">
                {item.status === "completed" && <CheckCircle2 className="h-4 w-4 text-success" />}
                {item.status === "in-progress" && <ArrowRight className="h-4 w-4 text-accent" />}
                {item.status === "pending" && <Circle className="h-4 w-4 text-muted-text" />}
                <span className={`text-sm ${item.status === "completed" ? "text-muted-text line-through" : "text-primary-text"}`}>
                  {item.task}
                </span>
              </div>
            ))}
          </div>
        </Surface>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold text-primary-text">Skill Coverage</span>
          <div className="flex flex-col gap-3">
            {demoData.skills.slice(0, 3).map(skill => (
              <div key={skill.name} className="flex items-center gap-3">
                <span className="text-sm text-secondary-text w-12">{skill.name}</span>
                <div className="flex-1 h-1.5 bg-surface rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: `${skill.score}%` }} />
                </div>
                <span className="text-xs font-medium text-primary-text w-8 text-right">{skill.score}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold text-primary-text">Upcoming</span>
          <Surface className="p-4 bg-surface/50 border-dashed border-border/80">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-warning" />
              <span className="text-sm font-medium text-secondary-text">{demoData.upcoming[0].task}</span>
            </div>
          </Surface>
        </div>
      </div>
    </div>
  )
}

function PreparationTab() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold text-primary-text mb-2">Subject Preparation</h3>
      <div className="grid gap-4">
        {demoData.skills.map((skill) => (
          <Surface key={skill.name} className="p-4 flex items-center gap-6 bg-elevated/30">
            <span className="text-base font-semibold text-primary-text w-16">{skill.name}</span>
            <div className="flex-1 flex items-center gap-4">
              <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.score}%` }}
                  transition={{ duration: 0.5 }}
                  className={`h-full ${skill.score > 80 ? "bg-success" : skill.score > 65 ? "bg-accent" : "bg-warning"}`} 
                />
              </div>
              <span className="text-sm font-medium text-secondary-text w-10 text-right">{skill.score}%</span>
            </div>
          </Surface>
        ))}
      </div>
    </div>
  )
}

function SkillGapTab() {
  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Surface className="p-5 flex flex-col gap-4 bg-elevated/30 border-success/20">
          <span className="text-xs font-semibold text-success uppercase tracking-wider">Strong</span>
          <div className="flex flex-col gap-2">
            {demoData.skillGap.strong.map(skill => (
              <div key={skill} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span className="text-sm text-primary-text">{skill}</span>
              </div>
            ))}
          </div>
        </Surface>

        <Surface className="p-5 flex flex-col gap-4 bg-elevated/30 border-warning/20">
          <span className="text-xs font-semibold text-warning uppercase tracking-wider">Needs Attention</span>
          <div className="flex flex-col gap-2">
            {demoData.skillGap.needsAttention.map(skill => (
              <div key={skill} className="flex items-center gap-2">
                <Target className="h-4 w-4 text-warning" />
                <span className="text-sm text-primary-text">{skill}</span>
              </div>
            ))}
          </div>
        </Surface>
      </div>

      <div className="flex flex-col gap-4 mt-auto">
        <h4 className="text-sm font-semibold text-primary-text">Recommended Next</h4>
        <div className="flex flex-col gap-3">
          {demoData.skillGap.recommendedNext.map(rec => (
            <Surface key={rec} className="p-4 flex items-center gap-3 bg-surface hover:bg-surface-hover transition-colors cursor-pointer">
              <Compass className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-secondary-text">{rec}</span>
              <ArrowRight className="h-4 w-4 text-muted-text ml-auto" />
            </Surface>
          ))}
        </div>
      </div>
    </div>
  )
}

function PracticeTab() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <h3 className="text-lg font-bold text-primary-text">Practice Queue</h3>
        <Badge variant="secondary">Today</Badge>
      </div>
      
      <div className="flex flex-col gap-4">
        {demoData.practice.today.map((item, index) => {
          const isComplete = item.completed === item.total
          return (
            <Surface key={index} className="p-5 flex items-center justify-between bg-elevated/50">
              <div className="flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isComplete ? "bg-success/10 text-success" : "bg-surface border border-border text-secondary-text"}`}>
                  {isComplete ? <CheckCircle2 className="h-5 w-5" /> : <span className="text-sm font-medium">{item.completed}/{item.total}</span>}
                </div>
                <span className={`text-base font-medium ${isComplete ? "text-secondary-text line-through" : "text-primary-text"}`}>
                  {item.label}
                </span>
              </div>
              {!isComplete && <Button variant="secondary" size="sm">Resume</Button>}
            </Surface>
          )
        })}
      </div>
    </div>
  )
}

function InterviewsTab() {
  return (
    <div className="flex flex-col gap-6 h-full">
      <h3 className="text-lg font-bold text-primary-text mb-2">Upcoming Interviews</h3>
      
      <Surface className="p-6 flex flex-col gap-6 bg-accent/5 border-accent/20">
        <div>
          <Badge className="bg-accent text-accent-text hover:bg-accent mb-4">Next Mock Interview</Badge>
          <h4 className="text-xl font-bold text-primary-text mb-1">{demoData.interviews.nextMock.role}</h4>
          <p className="text-sm text-secondary-text">Scheduled for tomorrow, 10:00 AM</p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold text-muted-text uppercase">Topics Covered</span>
          <div className="flex flex-wrap gap-2">
            {demoData.interviews.nextMock.topics.map(topic => (
              <Badge key={topic} variant="secondary" className="bg-surface">{topic}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-4 border-t border-accent/10 pt-6">
          <Button variant="primary" className="w-full sm:w-auto">Start mock</Button>
        </div>
      </Surface>
    </div>
  )
}
