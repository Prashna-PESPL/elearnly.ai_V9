import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, BookOpen, BarChart3, DollarSign, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              Elearnly AI
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-primary transition-colors">
              Community
            </Link>
            <Link href="/blogs" className="text-sm font-medium hover:text-primary transition-colors">
              Blogs
            </Link>
            <Link href="/tutorials" className="text-sm font-medium hover:text-primary transition-colors">
              Tutorials
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-teal-500 text-white">Try It Free</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
          <div className="container flex flex-col items-center text-center">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Accelerate Your Course Creation with AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-[800px] mb-8">
              Elearnly AI empowers you to launch professional courses in minutes—no coding or content expertise needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-teal-500 text-white">
                Try It Free
              </Button>
              <Button size="lg" variant="outline" className="group">
                See How It Works
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="mt-16 w-full max-w-5xl mx-auto relative">
              <div className="aspect-video rounded-lg border shadow-xl overflow-hidden bg-white">
                <img
                  src="/placeholder.jpg"
                  alt="Elearnly AI Platform Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full py-2 px-6 shadow-lg">
                <p className="text-sm font-medium text-muted-foreground">Trusted by 1000+ course creators</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features to Transform Your Teaching</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Everything you need to create, launch, and scale your online courses with AI assistance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white p-8 rounded-lg border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-purple-300 duration-300">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Generated Lesson Plans</h3>
                <p className="text-muted-foreground">
                  Create comprehensive, engaging lesson plans with a single prompt. Our AI handles the heavy lifting.
                </p>
              </div>
              <div className="group bg-white p-8 rounded-lg border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-purple-300 duration-300">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Interactive Quizzes & Assessments</h3>
                <p className="text-muted-foreground">
                  Generate relevant quizzes, assignments, and assessments that reinforce learning objectives.
                </p>
              </div>
              <div className="group bg-white p-8 rounded-lg border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-purple-300 duration-300">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Seamless Course Monetization</h3>
                <p className="text-muted-foreground">
                  Set up payment gateways, subscription models, or one-time purchases with just a few clicks.
                </p>
              </div>
              <div className="group bg-white p-8 rounded-lg border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-purple-300 duration-300">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Detailed Analytics & Insights</h3>
                <p className="text-muted-foreground">
                  Track student progress, engagement, and revenue with comprehensive analytics dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Elearnly AI Works</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Create professional courses in three simple steps
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div className="bg-white p-8 rounded-lg border shadow-sm h-full hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-center">Enter Your Course Topic</h3>
                  <p className="text-muted-foreground text-center">
                    Simply describe your course topic and target audience. Our AI will understand your needs.
                  </p>
                  <div className="mt-6 aspect-video rounded-md overflow-hidden bg-slate-100">
                    <img
                      src="/placeholder.jpg"
                      alt="Enter course topic"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div className="bg-white p-8 rounded-lg border shadow-sm h-full hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-center">Generate Modules</h3>
                  <p className="text-muted-foreground text-center">
                    Watch as our AI creates complete course modules, lessons, quizzes, and resources.
                  </p>
                  <div className="mt-6 aspect-video rounded-md overflow-hidden bg-slate-100">
                    <img
                      src="/placeholder.jpg"
                      alt="Generate modules"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div className="bg-white p-8 rounded-lg border shadow-sm h-full hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-center">Publish & Share</h3>
                  <p className="text-muted-foreground text-center">
                    Customize your course, set pricing, and publish it to your audience with one click.
                  </p>
                  <div className="mt-6 aspect-video rounded-md overflow-hidden bg-slate-100">
                    <img
                      src="/placeholder.jpg"
                      alt="Publish and share"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-teal-500 text-white">
                See Elearnly AI in Action
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Early Adopters Say</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Join hundreds of educators who are transforming their teaching with Elearnly AI
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="/placeholder-user.jpg"
                      alt="Sarah Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Fitness Instructor</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Elearnly AI helped me create a comprehensive yoga course in just one afternoon. What would have taken
                  weeks was done in hours!"
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="/placeholder-user.jpg"
                      alt="Michael Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">Software Developer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The AI-generated coding exercises and quizzes are spot-on. My students are learning faster with the
                  interactive content Elearnly created."
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="/placeholder-user.jpg"
                      alt="Elena Rodriguez"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Elena Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Language Teacher</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I've tripled my course offerings since using Elearnly AI. The platform handles all the content
                  creation while I focus on teaching."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-500 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Teaching?</h2>
              <p className="text-xl mb-8">
                Join thousands of educators creating engaging courses with AI. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
                />
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  Get Started Now
                </Button>
              </div>
              <p className="mt-4 text-sm text-white/80">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent mb-4">
                Elearnly AI
              </div>
              <p className="text-muted-foreground">Create online courses in minutes with AI</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Elearnly AI. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

