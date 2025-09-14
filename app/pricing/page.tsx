"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { GraduationCap, Check, Star, Users, Video, Clock, Shield, ArrowRight } from "lucide-react"

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "৳300-500",
      period: "per hour",
      description: "Perfect for students starting their learning journey",
      features: [
        "Primary & Secondary level subjects",
        "Home tutoring available",
        "Basic support",
        "Session recordings (if online)",
        "Progress tracking",
      ],
      popular: false,
      color: "border-border",
    },
    {
      name: "Standard",
      price: "৳500-800",
      period: "per hour",
      description: "Most popular choice for serious learners",
      features: [
        "All Basic features",
        "Higher Secondary & University level",
        "Online & home tutoring",
        "Priority support",
        "Flexible scheduling",
        "Study materials included",
      ],
      popular: true,
      color: "border-primary",
    },
    {
      name: "Premium",
      price: "৳800-1500",
      period: "per hour",
      description: "For advanced subjects and specialized tutoring",
      features: [
        "All Standard features",
        "Specialized subjects (Engineering, Medical, etc.)",
        "Expert tutors with advanced degrees",
        "24/7 support",
        "Custom learning plans",
        "Exam preparation focus",
      ],
      popular: false,
      color: "border-accent",
    },
  ]

  const subjects = [
    { name: "Mathematics", price: "৳400-800", level: "All levels" },
    { name: "Physics", price: "৳500-900", level: "SSC to University" },
    { name: "Chemistry", price: "৳500-900", level: "SSC to University" },
    { name: "Biology", price: "৳450-800", level: "SSC to University" },
    { name: "English", price: "৳350-600", level: "All levels" },
    { name: "Bangla", price: "৳300-500", level: "All levels" },
    { name: "Computer Science", price: "৳600-1200", level: "HSC to University" },
    { name: "Economics", price: "৳500-800", level: "HSC to University" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-serif font-bold text-foreground">Tuition Bondhu</span>
              </Link>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/search" className="text-muted-foreground hover:text-primary transition-colors">
                Find Tutors
              </Link>
              <Link href="/register" className="text-muted-foreground hover:text-primary transition-colors">
                Become a Tutor
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                How it Works
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Link href="/login">
                <Button variant="ghost" className="hidden sm:inline-flex">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-card via-background to-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Quality education at affordable rates. No hidden fees, no long-term contracts. Pay only for the sessions
              you take.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Choose Your Learning Plan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing based on subject complexity and tutor expertise. All plans include our quality guarantee.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`h-full ${plan.color} ${plan.popular ? "border-2 shadow-lg" : ""} bg-card hover:shadow-lg transition-all duration-300`}
                >
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-serif font-bold text-card-foreground">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/search">
                      <Button
                        className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        Find Tutors
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Pricing */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Pricing by Subject</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's what you can expect to pay for popular subjects. Actual prices may vary based on tutor experience
              and session type.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <h3 className="font-serif font-semibold text-card-foreground mb-2">{subject.name}</h3>
                    <p className="text-primary font-bold mb-1">{subject.price}/hr</p>
                    <p className="text-xs text-muted-foreground">{subject.level}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">What's Included</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every session comes with these benefits, regardless of the price tier.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Quality Guarantee",
                description: "100% satisfaction or money back",
              },
              {
                icon: Clock,
                title: "Flexible Scheduling",
                description: "Book sessions that fit your schedule",
              },
              {
                icon: Users,
                title: "Verified Tutors",
                description: "All tutors are background checked",
              },
              {
                icon: Video,
                title: "Multiple Formats",
                description: "Online, home, or group sessions",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Ready to Start Learning?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Browse our tutors and find the perfect match for your learning needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/search">
                <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                  Browse Tutors
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 bg-transparent">
                  Have Questions?
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
