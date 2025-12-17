import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left space-y-6 mr-30">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <span className="h-4 w-4 rounded-full bg-accent-foreground animate-pulse"></span>
            v1.5.0 Now available for teams
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            Organize your work, <br className="hidden sm:inline" />
            <span className="text-muted-foreground">amplify your team</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl text-pretty">
            TaskFlow helps teams manage projects, track progress, and collaborate seamlessly. Boost productivity with
            our intuitive task management platform.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              See How It Works
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">No credit card required · Free 14-day trial</p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
            <img src="/Gemini_Generated_Image_x2vw5px2vw5px2vw.png" alt="TaskFlow Dashboard Preview" className="h-full w-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  )
}