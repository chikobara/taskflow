import { CheckCheck } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <CheckCheck/>
            <span className="text-lg font-semibold">TaskFlow</span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
