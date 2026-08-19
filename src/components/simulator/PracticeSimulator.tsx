"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, CheckCircle2, XCircle, ChevronRight, Award, Brain, Target, RefreshCw } from "lucide-react"

import { Container } from "@/components/ui/Container"
import { Surface } from "@/components/ui/Surface"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { practiceQuestions, Question } from "@/data/questions"
import { useAppState } from "@/lib/store"

type SimulatorState = "TOPIC_SELECTION" | "PRACTICE_START" | "QUESTION" | "ANSWER" | "COMPLETION"

const TOPICS = [
  { id: "dsa", name: "DSA" },
  { id: "sql", name: "SQL" },
  { id: "dbms", name: "DBMS" },
  { id: "cn", name: "Computer Networks" },
  { id: "os", name: "Operating Systems" },
]

export function PracticeSimulator() {
  const { updateReadiness, selectedPracticeTopic, setSelectedPracticeTopic } = useAppState()
  
  const [currentState, setCurrentState] = React.useState<SimulatorState>("TOPIC_SELECTION")
  const [selectedTopic, setSelectedTopic] = React.useState<string | null>(null)
  
  const [questions, setQuestions] = React.useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)
  
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null)
  const [score, setScore] = React.useState(0)

  const handleTopicSelect = React.useCallback((topicId: string) => {
    setSelectedTopic(topicId)
    const topicQuestions = practiceQuestions.filter(q => q.topicId === topicId)
    setQuestions(topicQuestions)
    setCurrentState("PRACTICE_START")
  }, [])

  // Listen for global topic selection
  React.useEffect(() => {
    if (selectedPracticeTopic) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      handleTopicSelect(selectedPracticeTopic)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedPracticeTopic(null) // Reset after consuming
    }
  }, [selectedPracticeTopic, handleTopicSelect, setSelectedPracticeTopic])

  const handleStartPractice = () => {
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedOption(null)
    setCurrentState("QUESTION")
  }

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return
    
    if (selectedOption === questions[currentQuestionIndex].correctAnswerIndex) {
      setScore(s => s + 1)
    }
    
    setCurrentState("ANSWER")
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(i => i + 1)
      setSelectedOption(null)
      setCurrentState("QUESTION")
    } else {
      handleComplete()
    }
  }

  const handleComplete = () => {
    if (selectedTopic) {
      updateReadiness(selectedTopic, score)
    }
    setCurrentState("COMPLETION")
  }

  const handleRestart = () => {
    setSelectedTopic(null)
    setQuestions([])
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedOption(null)
    setCurrentState("TOPIC_SELECTION")
  }

  return (
    <section className="py-24 bg-page relative border-t border-border/50" id="simulator">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">PRACTICE ARENA</Badge>
          <h2 className="text-3xl font-bold text-primary-text mb-4">
            Turn preparation into practice.
          </h2>
          <p className="text-muted-text">
            Test what you know, identify weak areas, and improve your placement readiness.
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {currentState === "TOPIC_SELECTION" && (
              <motion.div
                key="topic_selection"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              >
                {TOPICS.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleTopicSelect(topic.id)}
                    className="p-6 rounded-xl border border-border/80 bg-surface/50 hover:border-accent hover:bg-accent/5 transition-all text-left group flex flex-col items-start gap-4"
                    aria-label={`Select topic ${topic.name}`}
                  >
                    <div className="h-10 w-10 rounded-lg bg-elevated border border-border flex items-center justify-center group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-text mb-1">{topic.name}</h3>
                      <p className="text-xs text-muted-text">5 questions</p>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}

            {currentState === "PRACTICE_START" && selectedTopic && (
              <motion.div
                key="practice_start"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
              >
                <Surface className="p-8 sm:p-12 text-center rounded-2xl border border-accent/20 bg-accent/5 flex flex-col items-center">
                  <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 ring-1 ring-accent/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    <Play className="h-8 w-8 ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-text mb-2">
                    {TOPICS.find(t => t.id === selectedTopic)?.name} Practice
                  </h3>
                  <p className="text-secondary-text mb-8 max-w-md">
                    You are about to start a 5-question mock test. Your score will directly impact your Placement Readiness.
                  </p>
                  <div className="flex items-center gap-4">
                    <Button variant="secondary" onClick={handleRestart}>Cancel</Button>
                    <Button onClick={handleStartPractice} className="gap-2">
                      Start Practice <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </Surface>
              </motion.div>
            )}

            {(currentState === "QUESTION" || currentState === "ANSWER") && questions.length > 0 && (
              <motion.div
                key="question_view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Surface className="rounded-2xl border border-border/80 overflow-hidden">
                  <div className="px-6 py-4 border-b border-border/50 bg-elevated/50 flex items-center justify-between">
                    <Badge variant="outline" className="bg-surface">{TOPICS.find(t => t.id === selectedTopic)?.name}</Badge>
                    <span className="text-sm font-medium text-secondary-text">
                      Question {currentQuestionIndex + 1} / {questions.length}
                    </span>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-medium text-primary-text mb-8 leading-relaxed">
                      {questions[currentQuestionIndex].question}
                    </h3>
                    
                    <div className="flex flex-col gap-3 mb-8">
                      {questions[currentQuestionIndex].options.map((option, idx) => {
                        const isSelected = selectedOption === idx
                        const isCorrect = idx === questions[currentQuestionIndex].correctAnswerIndex
                        const isAnswerState = currentState === "ANSWER"
                        
                        let btnClass = "border-border/80 bg-surface/50 text-secondary-text hover:border-accent/50 hover:bg-elevated"
                        
                        if (isAnswerState) {
                          if (isCorrect) {
                            btnClass = "border-success bg-success/10 text-success"
                          } else if (isSelected && !isCorrect) {
                            btnClass = "border-warning bg-warning/10 text-warning opacity-70"
                          } else {
                            btnClass = "border-border/50 bg-surface/20 text-muted-text opacity-50"
                          }
                        } else if (isSelected) {
                          btnClass = "border-accent bg-accent/10 text-primary-text ring-1 ring-accent/30"
                        }

                        return (
                          <button
                            key={idx}
                            onClick={() => !isAnswerState && setSelectedOption(idx)}
                            disabled={isAnswerState}
                            className={`p-4 rounded-xl border text-left transition-all ${btnClass} flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-accent`}
                          >
                            <span className="font-medium text-sm sm:text-base">{option}</span>
                            {isAnswerState && isCorrect && <CheckCircle2 className="h-5 w-5" />}
                            {isAnswerState && isSelected && !isCorrect && <XCircle className="h-5 w-5" />}
                          </button>
                        )
                      })}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        {currentState === "ANSWER" && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-secondary-text bg-elevated p-4 rounded-lg border border-border/50"
                          >
                            <span className="font-bold text-primary-text mr-2">Explanation:</span>
                            {questions[currentQuestionIndex].explanation}
                          </motion.div>
                        )}
                      </div>
                      
                      <div className="shrink-0 w-full sm:w-auto">
                        {currentState === "QUESTION" ? (
                          <Button 
                            onClick={handleSubmitAnswer} 
                            disabled={selectedOption === null}
                            className="w-full sm:w-auto"
                          >
                            Submit Answer
                          </Button>
                        ) : (
                          <Button 
                            onClick={handleNextQuestion}
                            className="w-full sm:w-auto gap-2"
                          >
                            {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Complete Practice"}
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Surface>
              </motion.div>
            )}

            {currentState === "COMPLETION" && (
              <motion.div
                key="completion"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Surface className="p-8 sm:p-12 text-center rounded-2xl border border-success/30 bg-success/5 flex flex-col items-center">
                  <div className="h-20 w-20 rounded-full bg-success/20 flex items-center justify-center text-success mb-6 ring-2 ring-success/30 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
                    <Award className="h-10 w-10" />
                  </div>
                  <Badge variant="outline" className="mb-4 bg-success/10 text-success border-success/20">
                    PRACTICE COMPLETE
                  </Badge>
                  <h3 className="text-3xl font-bold text-primary-text mb-6">
                    {score} / {questions.length}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-surface border border-border/80">
                      <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Accuracy</span>
                      <span className="text-xl font-bold text-primary-text">{Math.round((score / questions.length) * 100)}%</span>
                    </div>
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-surface border border-border/80">
                      <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Readiness Impact</span>
                      <span className={`text-xl font-bold ${score >= 4 ? 'text-success' : score === 3 ? 'text-accent' : 'text-secondary-text'}`}>
                        {score === 5 ? '+5' : score === 4 ? '+3' : score === 3 ? '+1' : '+0'} pts
                      </span>
                    </div>
                  </div>

                  <div className="w-full max-w-md bg-elevated rounded-xl border border-border/50 p-6 mb-8 text-left">
                    <div className="flex items-center gap-2 mb-4">
                      <Brain className="h-4 w-4 text-accent" />
                      <h4 className="text-sm font-bold text-primary-text uppercase tracking-widest">Intelligence Report</h4>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div>
                        <span className="text-xs font-semibold text-success block mb-1">Strong Areas</span>
                        <p className="text-sm text-secondary-text">
                          {score >= 4 ? "Core concepts are solid. Ready for advanced topics." : "Foundational knowledge is present but needs reinforcement."}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-warning block mb-1">Areas to Improve</span>
                        <p className="text-sm text-secondary-text">
                          {score >= 4 ? "Minor edge cases." : "Review standard patterns and foundational theories before mock interviews."}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                    <Button variant="secondary" onClick={handleRestart} className="w-full sm:w-auto">
                      Back to Topics
                    </Button>
                    <Button onClick={() => handleTopicSelect(selectedTopic!)} className="w-full sm:w-auto gap-2">
                      <RefreshCw className="h-4 w-4" /> Practice Again
                    </Button>
                  </div>
                </Surface>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
