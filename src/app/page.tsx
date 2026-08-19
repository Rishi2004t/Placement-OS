import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/hero/Hero"
import { PlacementProblem } from "@/components/problem/PlacementProblem"
import { PlacementWorkflow } from "@/components/workflow/PlacementWorkflow"
import { ProductShowcase } from "@/components/product-showcase/ProductShowcase"
import { RoleAnalyzer } from "@/components/role-analyzer/RoleAnalyzer"
import { PreparationSystem } from "@/components/preparation/PreparationSystem"
import { PlacementReadiness } from "@/components/readiness/PlacementReadiness"
import { FinalCTA } from "@/components/cta/FinalCTA"
import { Footer } from "@/components/layout/Footer"

import { AppStateProvider } from "@/lib/store"
import { PracticeSimulator } from "@/components/simulator/PracticeSimulator"

export default function Home() {
  return (
    <AppStateProvider>
      <div className="flex min-h-screen flex-col" id="top">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <PlacementProblem />
          <PlacementWorkflow />
          <ProductShowcase />
          <RoleAnalyzer />
          <PreparationSystem />
          <PracticeSimulator />
          <PlacementReadiness />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </AppStateProvider>
  )
}
