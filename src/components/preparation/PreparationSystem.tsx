"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, PenTool, Activity, TrendingUp, ChevronDown, ChevronUp, AlertCircle, PlayCircle } from "lucide-react"

import { Container } from "@/components/ui/Container"
import { Surface } from "@/components/ui/Surface"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { demoData } from "@/data/demo"
import { useAppState } from "@/lib/store"

export function PreparationSystem() {
  const { activePlan, readinessScore, setSelectedPracticeTopic } = useAppState()
  const [expandedId, setExpandedId] = React.useState<string | null>(null) // Default open CN or first item
  
  React.useEffect(() => {
    if (activePlan?.items.length && !expandedId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setExpandedId(activePlan.items[0].id)
    } else if (!activePlan && !expandedId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setExpandedId(demoData.preparationAreas[3].id)
    }
  }, [activePlan, expandedId])

  const steps = [
    { num: "01", title: "Learn", desc: "Understand the concept.", icon: BookOpen },
    { num: "02", title: "Practice", desc: "Solve problems and answer questions.", icon: PenTool },
    { num: "03", title: "Track", desc: "Measure your progress.", icon: Activity },
    { num: "04", title: "Improve", desc: "Focus on the weakest areas.", icon: TrendingUp },
  ]

  const handlePracticeNow = (topicId: string) => {
    setSelectedPracticeTopic(topicId)
    document.getElementById("simulator")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-24 bg-page border-t border-border/50 relative overflow-hidden" id="preparation">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Intro & Framework */}
          <div className="lg:col-span-5 flex flex-col gap-12 lg:sticky lg:top-32">
            <div>
              <Badge variant="outline" className="mb-4">PREPARATION PLAN</Badge>
              <h2 className="text-3xl font-bold text-primary-text mb-4">
                {activePlan ? "Your Preparation Plan" : "Turn skill gaps into a preparation plan."}
              </h2>
              {activePlan ? (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold tracking-widest text-secondary-text uppercase">Target Role:</span>
                    <span className="text-sm font-bold text-accent">{activePlan.targetRole}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold tracking-widest text-secondary-text uppercase">Readiness:</span>
                    <span className="text-sm font-bold text-primary-text">{readinessScore}%</span>
                  </div>
                </div>
              ) : (
                <p className="text-muted-text text-lg">
                  Know what deserves your attention next, instead of spreading your time across everything.
                </p>
              )}
            </div>

            {/* Framework Flow - Connected Loop */}
            {!activePlan && (
              <div className="flex flex-col gap-8 relative p-6 bg-surface/50 border border-border/80 rounded-2xl shadow-sm">
                <div className="absolute left-[41px] top-10 bottom-10 w-px bg-border/80 hidden sm:block" />
                
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div 
                      key={step.num}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex gap-5 relative z-10 group"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-elevated border border-border flex items-center justify-center text-accent shadow-sm group-hover:bg-accent/10 transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col pt-0.5">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{step.num}</span>
                          <h4 className="text-sm font-bold text-primary-text tracking-wide">{step.title}</h4>
                        </div>
                        <p className="text-xs text-secondary-text">{step.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Right Column: Preparation Areas */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full max-w-2xl mx-auto lg:mx-0">
            <h3 className="text-[11px] font-bold tracking-widest text-muted-text uppercase mb-2">
              {activePlan ? "Focus Next" : "Your Preparation Areas"}
            </h3>
            
            <div className="flex flex-col gap-3">
              {activePlan ? (
                activePlan.items.map((item, index) => {
                  const isExpanded = expandedId === item.id
                  return (
                    <Surface 
                      key={item.id}
                      className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'ring-1 ring-accent border-accent/30 bg-surface shadow-lg' : 'border-border/60 bg-elevated/40 hover:bg-surface/50 hover:border-border cursor-pointer'}`}
                      onClick={() => !isExpanded && setExpandedId(item.id)}
                    >
                      <div className="p-4 sm:p-5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-1">
                          <span className="font-bold text-primary-text min-w-32 sm:min-w-40 line-clamp-1">{index + 1}. {item.name}</span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-text">
                            {item.priority} Priority
                          </span>
                        </div>
                        <button 
                          className="p-1 text-muted-text hover:text-primary-text transition-colors shrink-0 focus:outline-none"
                          onClick={(e) => {
                            e.stopPropagation()
                            setExpandedId(isExpanded ? null : item.id)
                          }}
                        >
                          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-border/50 bg-surface/30 flex flex-col gap-6">
                              <div className="flex flex-col gap-2.5">
                                <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Revise</span>
                                <div className="flex flex-wrap gap-2">
                                  {item.focusTopics.map(topic => (
                                    <Badge key={topic} variant="secondary" className="bg-elevated/80 border border-border/80 text-xs">
                                      {topic}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-5 border-t border-border/50 mt-2">
                                <div className="flex flex-col gap-1.5">
                                  <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Recommended Action</span>
                                  <span className="text-sm font-medium text-primary-text">{item.recommendedAction}</span>
                                </div>
                                <Button 
                                  variant="primary" 
                                  size="lg" 
                                  className="w-full sm:w-auto shrink-0 group font-bold tracking-wide shadow-md"
                                  onClick={() => handlePracticeNow(item.topicId)}
                                >
                                  <PlayCircle className="mr-2 h-4 w-4" />
                                  Practice Now
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Surface>
                  )
                })
              ) : (
                demoData.preparationAreas.map((area) => {
                  const isExpanded = expandedId === area.id
                  return (
                    <Surface 
                      key={area.id}
                      className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'ring-1 ring-accent border-accent/30 bg-surface shadow-lg' : 'border-border/60 bg-elevated/40 hover:bg-surface/50 hover:border-border cursor-pointer'}`}
                      onClick={() => !isExpanded && setExpandedId(area.id)}
                    >
                      <div className="p-4 sm:p-5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-1">
                          <span className="font-bold text-primary-text min-w-32 sm:min-w-40 line-clamp-1">{area.name}</span>
                          <div className="hidden sm:block flex-1 h-1.5 bg-page rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${area.score > 80 ? 'bg-success' : area.score > 65 ? 'bg-accent' : 'bg-warning'}`} 
                              style={{ width: `${area.score}%` }} 
                            />
                          </div>
                          <span className="text-xs font-bold text-secondary-text w-10 text-right shrink-0">{area.score}%</span>
                        </div>
                        <button 
                          className="p-1 text-muted-text hover:text-primary-text transition-colors shrink-0 focus:outline-none"
                          onClick={(e) => {
                            e.stopPropagation()
                            setExpandedId(isExpanded ? null : area.id)
                          }}
                        >
                          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-border/50 bg-surface/30 flex flex-col gap-6">
                              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-2">
                                <div className="flex flex-col gap-1.5">
                                  <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Current Readiness</span>
                                  <span className={`text-xl font-bold ${area.score > 80 ? 'text-success' : area.score > 65 ? 'text-primary-text' : 'text-warning'}`}>
                                    {area.score}%
                                  </span>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                  <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Priority</span>
                                  <div className="flex items-center gap-1.5">
                                    {area.priority === "High" && <AlertCircle className="h-4 w-4 text-warning" />}
                                    <span className={`text-sm font-bold ${area.priority === 'High' ? 'text-warning' : 'text-primary-text'}`}>
                                      {area.priority}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col gap-2.5">
                                <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Focus Topics</span>
                                <div className="flex flex-wrap gap-2">
                                  {area.focusTopics.map(topic => (
                                    <Badge key={topic} variant="secondary" className="bg-elevated/80 border border-border/80 text-xs">
                                      {topic}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-5 border-t border-border/50 mt-2">
                                <div className="flex flex-col gap-1.5">
                                  <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Recommended Action</span>
                                  <span className="text-sm font-medium text-primary-text">{area.recommendedAction}</span>
                                </div>
                                <Button 
                                  variant="primary" 
                                  size="lg" 
                                  className="w-full sm:w-auto shrink-0 group font-bold tracking-wide shadow-md"
                                  onClick={() => handlePracticeNow(area.id)}
                                >
                                  <PlayCircle className="mr-2 h-4 w-4" />
                                  Start Preparation
                                </Button>
                              </div>

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Surface>
                  )
                })
              )}
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
