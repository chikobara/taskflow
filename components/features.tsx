import { Zap, Users, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Create, assign, and track tasks in seconds. Our intuitive interface keeps your team moving at full speed.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with real-time updates, comments, and file sharing across your entire team.",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description: "Get insights into your team's productivity with detailed reports and customizable dashboards.",
  },
]

export function Features() {
  return (
    <section id="features" className="bg-secondary/50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to help your team stay organized and productive.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
