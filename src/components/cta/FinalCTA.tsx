"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Search } from "lucide-react"

import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-page relative overflow-hidden" id="final-cta">
      {/* Background glow */}
      <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto border border-border/50 bg-elevated/30 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-text mb-6">
            Your next interview <span className="text-secondary-text block sm:inline">deserves a better plan.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-text mb-10 max-w-2xl leading-relaxed">
            Turn your target role into a focused preparation plan.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="#role-analyzer" className="w-full sm:w-auto" tabIndex={-1}>
              <Button size="lg" className="w-full sm:w-auto gap-2 group">
                Build My Placement Plan
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link href="#role-analyzer" className="w-full sm:w-auto" tabIndex={-1}>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
                <Search className="mr-2 h-4 w-4 text-muted-text group-hover:text-primary-text transition-colors" />
                Analyze a Role
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
