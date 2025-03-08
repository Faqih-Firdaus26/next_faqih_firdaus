import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-4">
            <a
              href="https://github.com/Faqih-Firdaus26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-faqih-al-firdaus-126a86223/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:firdausfaqih727@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>Faqih Al Firdaus</p>
            <p>Electrical Engineering Student | Web Developer | IoT Enthusiast</p>
          </div>
          <div className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Faqih Al Firdaus. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

