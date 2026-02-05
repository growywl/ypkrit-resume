import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react"

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-2xl mx-auto font-mono">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Krittanat Yantapanit
          </h1>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            Detail-oriented Computer Engineering Student passionate about AI, RegTech, and building impactful solutions.
          </p>
          <div className="flex items-center text-muted-foreground mb-4 text-sm">
            <Globe className="h-4 w-4 mr-2" />
            <span>Bangkok, Thailand</span>
          </div>

          <div className="flex gap-2">
            <a
              href="mailto:monkeykrit200@gmail.com"
              className="p-2 border border-border rounded-md hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="tel:+66644747766"
              className="p-2 border border-border rounded-md hover:bg-muted transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/growywl"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-border rounded-md hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/krit-growy-1987813a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-border rounded-md hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* About */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-foreground mb-4">About</h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Computer Engineering and Digital Technology student at Chulalongkorn University focusing on AI applications, regulatory technology, and data engineering. Experienced in building AI-powered solutions for compliance workflows and developing real-world entrepreneurial projects. Passionate about open source and creating products that make a difference.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-foreground mb-6">Work Experience</h2>

          <div className="space-y-8">
            {/* KrungThai Bank */}
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-foreground">KrungThai Bank</h3>
                <span className="text-sm text-muted-foreground">May 2025 - Jul 2025</span>
              </div>
              <p className="text-sm font-medium text-foreground mb-3">Compliance/Regtech Team Intern</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Developed an AI-assisted RegTech solution to centralize compliance advisory, regulatory references, and BU–Compliance communication.</li>
                <li>• Analyzed and compared RFI proposals from vendors, synthesizing pros, cons, and risks into executive-ready summaries for the Head of Compliance.</li>
                <li>• Built an AI-powered advisory bot to summarize emails, extract key compliance issues, and map relevant regulatory requirements.</li>
              </ul>
            </div>

            {/* True Corporation */}
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-foreground">True Corporation</h3>
                <span className="text-sm text-muted-foreground">May 2024 - Jul 2024</span>
              </div>
              <p className="text-sm font-medium text-foreground mb-3">International Business Intern</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Conducted competitive analysis against key market players (e.g., AIS) to identify partnership gaps and strategic opportunities.</li>
                <li>• Supported outreach to international partner companies by coordinating email communications and proposing cross-network collaborations.</li>
                <li>• Tracked partnership testing progress and consolidated partner feedback into executive updates for senior management.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-foreground mb-6">Education</h2>
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold text-foreground">Chulalongkorn University</h3>
              <span className="text-sm text-muted-foreground">2023 - Present</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Bachelor of Engineering Program in Computer Engineering and Digital Technology
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-foreground mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "Java",
              "SQL",
              "JavaScript",
              "TypeScript",
              "NodeJS",
              "MongoDB",
              "Docker",
              "Kafka",
              "Spark",
              "Power BI",
              "OpenAI",
              "Anthropic",
              "Scikit",
              "TensorFlow",
              "Keras",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-foreground mb-6">Projects</h2>
          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-2">Newspaper Photobooth System</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An entrepreneurial project inspired by a newspaper-style photobooth concept. Built the entire system including photo capture flow, payment integration, and hardware setup. Operated at live events like Loy Krathong and Halloween with around 50 users per day, generating real income.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-4">Leadership & Activities</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Co-founder, Newspaper Photobooth System</li>
            <li>• Student Council Representative</li>
            <li>• Core Team Member, Freshman Orientation Program</li>
            <li>• POSN (Computer)</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
