const steps = [
  {
    number: "01",
    title: "Create Your Workspace",
    description:
      "Sign up and set up your team workspace in minutes. Invite team members and organize your first project.",
  },
  {
    number: "02",
    title: "Add Tasks & Assign",
    description:
      "Break down projects into manageable tasks. Assign them to team members with deadlines and priorities.",
  },
  {
    number: "03",
    title: "Track & Deliver",
    description:
      "Monitor progress in real-time with our visual boards. Celebrate wins as you complete projects on time.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Get started in 3 simple steps
          </h2>
          <p className="text-lg text-muted-foreground">From signup to productivity in minutes, not hours.</p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center md:text-left">
                <div className="mb-4 text-5xl font-bold text-muted-foreground/30">{step.number}</div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full bg-border md:block md:w-1/2 md:translate-x-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
