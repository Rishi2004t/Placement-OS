"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { demoData } from "@/data/demo"

export type PlanItem = {
  id: string;
  topicId: string; // Used to match with simulator
  name: string;
  priority: "High" | "Medium" | "Low";
  focusTopics: string[];
  recommendedAction: string;
}

export type PreparationPlan = {
  targetRole: string;
  items: PlanItem[];
}

type AppState = {
  readinessScore: number
  preparationAreas: typeof demoData.preparationAreas
  updateReadiness: (topicId: string, scoreOutOf5: number) => void
  activePlan: PreparationPlan | null
  setActivePlan: (plan: PreparationPlan | null) => void
  selectedPracticeTopic: string | null
  setSelectedPracticeTopic: (topic: string | null) => void
}

const AppStateContext = createContext<AppState | undefined>(undefined)

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [readinessScore, setReadinessScore] = useState(demoData.readinessScore)
  const [preparationAreas, setPreparationAreas] = useState(demoData.preparationAreas)
  
  const [activePlan, setActivePlan] = useState<PreparationPlan | null>(null)
  const [selectedPracticeTopic, setSelectedPracticeTopic] = useState<string | null>(null)

  const updateReadiness = (topicId: string, scoreOutOf5: number) => {
    let addedPoints = 0
    if (scoreOutOf5 === 5) addedPoints = 5
    else if (scoreOutOf5 === 4) addedPoints = 3
    else if (scoreOutOf5 === 3) addedPoints = 1

    if (addedPoints <= 0) return

    setPreparationAreas(prev => {
      const newAreas = prev.map(area => {
        if (area.id.toLowerCase() === topicId.toLowerCase()) {
          return { ...area, score: Math.min(100, area.score + addedPoints * 2) }
        }
        return area
      })
      return newAreas
    })

    setReadinessScore(prev => Math.min(100, prev + addedPoints))
  }

  return (
    <AppStateContext.Provider value={{ 
      readinessScore, 
      preparationAreas, 
      updateReadiness,
      activePlan,
      setActivePlan,
      selectedPracticeTopic,
      setSelectedPracticeTopic
    }}>
      {children}
    </AppStateContext.Provider>
  )
}

export function useAppState() {
  const context = useContext(AppStateContext)
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider")
  }
  return context
}
