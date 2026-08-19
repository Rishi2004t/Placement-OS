"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, RotateCcw, AlertTriangle, CheckCircle2, Activity, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { analyzeJobDescription, type AnalysisResult } from "@/lib/skillAnalyzer"

const SAMPLE_JD = `Software Engineer

Requirements:
Java
SQL
Data Structures and Algorithms
REST APIs
Git
Docker

Nice to have:
System Design`

export function RoleAnalyzer() {
  const [input, setInput] = React.useState("")
  const [state, setState] = React.useState<"IDLE" | "ANALYZING" | "RESULT" | "ERROR">("IDLE")
  const [result, setResult] = React.useState<AnalysisResult | null>(null)

  const handleAnalyze = () => {
    if (!input.trim()) return

    setState("ANALYZING")
    
    // Controlled delay for perceived interaction
    setTimeout(() => {
      const analysis = analyzeJobDescription(input)
      if (analysis) {
        setResult(analysis)
        setState("RESULT")
      } else {
        setState("ERROR")
      }
    }, 1200)
  }

  const handleReset = () => {
    setInput("")
    setResult(null)
    setState("IDLE")
  }

  const handleSample = () => {
    setInput(SAMPLE_JD)
  }

  return (
    <section className="py-24 bg-page relative border-t border-border/50" id="role-analyzer">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Intro & Input */}
          <div className="flex-1 w-full max-w-xl flex flex-col justify-between">
            <div className="mb-8">
              <Badge variant="outline" className="mb-4">SKILL GAP ANALYSIS</Badge>
              <h2 className="text-3xl font-bold text-primary-text mb-4">
                Know what the job expects.
              </h2>
              <p className="text-muted-text">
                Paste a role description and see where your preparation is strong, where the gaps are, and what deserves your attention next.
              </p>
            </div>

            <div className="flex flex-col flex-1 bg-surface/50 border border-border/80 rounded-2xl p-6 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold tracking-widest text-secondary-text uppercase">Role Description</span>
                <span className="text-[11px] font-medium text-muted-text">Paste any SDE job description</span>
              </div>
              
              <div className="relative flex-1 flex flex-col">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Software Engineer Requirements:..."
                  className="w-full flex-1 min-h-[250px] p-4 rounded-xl border border-border bg-elevated text-sm text-primary-text placeholder:text-muted-text focus:outline-none focus:ring-1 focus:ring-accent resize-none transition-shadow font-mono"
                  aria-label="Job description input"
                  disabled={state === "ANALYZING" || state === "RESULT"}
                />
                
                {state === "IDLE" && (
                  <div className="absolute bottom-4 right-4">
                    <button 
                      onClick={handleSample}
                      className="text-[11px] font-bold uppercase tracking-wide text-accent hover:text-accent-hover transition-colors px-3 py-1.5 rounded-md bg-accent/10 border border-accent/20"
                    >
                      Try sample role
                    </button>
                  </div>
                )}
              </div>

              <AnimatePresence mode="wait">
                {state === "ERROR" && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 text-warning text-sm font-medium p-3 rounded-lg bg-warning/10 border border-warning/20 mt-4"
                  >
                    <AlertTriangle className="h-4 w-4 shrink-0" />
                    <span>We couldn&apos;t identify enough known skills from this role.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-6">
                {state !== "RESULT" ? (
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    onClick={handleAnalyze}
                    disabled={!input.trim() || state === "ANALYZING"}
                  >
                    {state === "ANALYZING" ? (
                      <>
                        <Search className="mr-2 h-4 w-4 animate-pulse" />
                        Analyzing role...
                      </>
                    ) : (
                      <>
                        Analyze Role <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                ) : (
                  <Button variant="secondary" onClick={handleReset} className="w-full">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Analyze another role
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Results */}
          <div className="flex-1 w-full flex flex-col">
            <div className="flex-1 bg-elevated/40 border border-border/80 rounded-2xl p-1 shadow-xl flex flex-col">
              {/* Header */}
              <div className="px-5 py-4 border-b border-border/50 bg-surface/30 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-widest text-secondary-text uppercase flex items-center gap-2">
                  <Activity className="h-3.5 w-3.5 text-accent" />
                  Role Intelligence
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-medium text-muted-text uppercase tracking-widest">System Ready</span>
                </div>
              </div>

              <div className="flex-1 p-5 md:p-6 flex flex-col relative overflow-hidden bg-surface/20">
                <AnimatePresence mode="wait">
                  {state === "IDLE" || state === "ERROR" ? (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col items-center justify-center text-center gap-6"
                    >
                      <div className="h-16 w-16 rounded-2xl bg-surface border border-border/50 flex items-center justify-center text-muted-text shadow-sm">
                        <Search className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-primary-text uppercase tracking-widest mb-2">Ready to Analyze</h4>
                        <p className="text-sm text-secondary-text mb-6">Paste a job description to generate:</p>
                        <div className="flex flex-col gap-3 text-left w-48 mx-auto">
                          <div className="flex items-center gap-3 text-sm text-muted-text"><CheckCircle2 className="h-4 w-4 text-secondary-text" /> Required skills</div>
                          <div className="flex items-center gap-3 text-sm text-muted-text"><CheckCircle2 className="h-4 w-4 text-secondary-text" /> Skill gaps</div>
                          <div className="flex items-center gap-3 text-sm text-muted-text"><CheckCircle2 className="h-4 w-4 text-secondary-text" /> Priority areas</div>
                          <div className="flex items-center gap-3 text-sm text-muted-text"><CheckCircle2 className="h-4 w-4 text-secondary-text" /> Preparation direction</div>
                        </div>
                      </div>
                    </motion.div>
                  ) : state === "ANALYZING" ? (
                    <motion.div
                      key="analyzing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 flex flex-col items-center justify-center gap-6"
                    >
                      <div className="relative flex h-16 w-16 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-20"></span>
                        <div className="h-16 w-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                          <Search className="h-8 w-8" />
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-accent uppercase tracking-widest">Extracting skills...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col gap-6"
                    >
                      {result && (
                        <div className="flex flex-col gap-6">
                          
                          {/* Match Header */}
                          <div className="flex items-center justify-between p-4 rounded-xl bg-surface border border-border/80 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                            <div className="flex flex-col">
                              <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest mb-1">Target Role</span>
                              <h3 className="text-lg font-bold text-primary-text line-clamp-1">{result.jobTitle}</h3>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest mb-1">Role Match</span>
                              <span className="text-2xl font-bold text-accent">{result.readinessScore}%</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Strong */}
                            <div className="flex flex-col gap-3 p-4 rounded-xl bg-surface/50 border border-success/20">
                              <span className="text-[10px] font-bold text-success uppercase tracking-widest flex items-center gap-1.5">
                                <CheckCircle2 className="h-3.5 w-3.5" /> Matched Skills
                              </span>
                              <div className="flex flex-col gap-2">
                                {result.strong.length > 0 ? result.strong.map(skill => (
                                  <div key={skill} className="flex items-center gap-2">
                                    <span className="text-success text-sm">✓</span>
                                    <span className="text-sm font-medium text-primary-text">{skill}</span>
                                  </div>
                                )) : (
                                  <span className="text-xs text-muted-text italic">None identified</span>
                                )}
                              </div>
                            </div>

                            {/* Needs Attention */}
                            <div className="flex flex-col gap-3 p-4 rounded-xl bg-surface/50 border border-warning/20">
                              <span className="text-[10px] font-bold text-warning uppercase tracking-widest flex items-center gap-1.5">
                                <AlertTriangle className="h-3.5 w-3.5" /> Skill Gaps
                              </span>
                              <div className="flex flex-col gap-2">
                                {result.needsAttention.length > 0 ? result.needsAttention.map(skill => (
                                  <div key={skill} className="flex items-center gap-2">
                                    <span className="text-warning text-sm">⚠</span>
                                    <span className="text-sm font-medium text-primary-text">{skill}</span>
                                  </div>
                                )) : (
                                  <span className="text-xs text-success italic">No major gaps found</span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Recommended Next */}
                          {result.recommendedNext.length > 0 && (
                            <div className="flex flex-col gap-3 p-4 rounded-xl bg-surface/80 border border-border shadow-sm mt-2 relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Next Action</span>
                                <span className="text-[10px] font-bold text-warning uppercase bg-warning/10 px-2 py-0.5 rounded text-warning">High Priority</span>
                              </div>
                              <div className="flex flex-col gap-2 relative z-10">
                                {result.recommendedNext.slice(0, 2).map((rec, index) => (
                                  <div key={index} className="flex items-center gap-3">
                                    <ArrowRight className="h-4 w-4 text-accent shrink-0" />
                                    <span className="text-sm font-bold text-primary-text">{rec}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
