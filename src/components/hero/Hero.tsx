"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { Badge } from "@/components/ui/Badge"
import { PlacementCommandCenter } from "@/components/command-center/PlacementCommandCenter"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* LEFT: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <Badge variant="outline" className="mb-6 border-accent/30 text-accent bg-accent/5 py-1">
              PLACEMENT INTELLIGENCE
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-text mb-6">
              Stop preparing randomly.<br />
              <span className="text-secondary-text">Start preparing for the job.</span>
            </h1>

            <p className="text-lg text-muted-text mb-10 max-w-xl leading-relaxed">
              PlacementOS turns your target role into a focused preparation plan — showing what to learn, what to practice, and where you&apos;re still weak.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <Link href="#role-analyzer" className="w-full sm:w-auto" tabIndex={-1}>
                <Button size="lg" className="w-full sm:w-auto gap-2 group">
                  Build My Placement Plan
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#command-center" className="w-full sm:w-auto" tabIndex={-1}>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Explore the workspace
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: Command Center Preview */}
          <div className="relative w-full mx-auto max-w-lg lg:max-w-none" id="command-center">
            {/* Subtle glow behind the command center */}
            <div className="absolute inset-0 -z-10 bg-accent/10 blur-[100px] rounded-full" />
            <PlacementCommandCenter />
          </div>
        </div>
      </Container>
    </section>
  )
}
