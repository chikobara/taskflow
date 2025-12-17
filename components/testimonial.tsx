import { Quote } from "lucide-react"

export function Testimonial() {
  return (
    <section id="testimonials" className="bg-secondary/50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <Quote className="mb-6 h-10 w-10 text-primary" />
            <blockquote className="mb-8 text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              "TaskFlow transformed how our team collaborates."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-full bg-muted">
                <img src="/placeholder-user.jpg" alt="User" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="font-semibold text-foreground">User</div>
                <div className="text-sm text-muted-foreground">Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
