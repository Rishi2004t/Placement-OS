import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/Container"

export function Footer() {
  return (
    <footer className="border-t border-border bg-page pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-accent/10 text-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-primary-text">PlacementOS</span>
            </div>
            <p className="text-muted-text text-sm font-medium max-w-xs mt-2">
              Prepare with direction. Build with confidence.
            </p>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold tracking-wider text-primary-text uppercase">Product</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#product-showcase" className="text-sm text-muted-text hover:text-accent transition-colors">
                How it works
              </Link>
              <Link href="#role-analyzer" className="text-sm text-muted-text hover:text-accent transition-colors">
                Skill Gap
              </Link>
              <Link href="#placement-readiness" className="text-sm text-muted-text hover:text-accent transition-colors">
                Readiness
              </Link>
            </nav>
          </div>

          {/* Resource Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold tracking-wider text-primary-text uppercase">Resources</h4>
            <nav className="flex flex-col gap-3">
              <span className="text-sm text-muted-text hover:text-primary-text transition-colors cursor-default">
                Placement Preparation
              </span>
              <span className="text-sm text-muted-text hover:text-primary-text transition-colors cursor-default">
                DSA
              </span>
              <span className="text-sm text-muted-text hover:text-primary-text transition-colors cursor-default">
                Core CS
              </span>
            </nav>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-text">
            © 2026 PlacementOS
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-text">Terms</span>
            <span className="text-sm text-muted-text">Privacy</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
