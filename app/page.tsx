"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import {
  Search,
  MapPin,
  Star,
  Users,
  BookOpen,
  Clock,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Home,
  Video,
  UserCheck,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Mock data for sliders
const featuredInLogos = [
  { name: "Prothom Alo", logo: "/prothom-alo-logo.png" },
  { name: "The Daily Star", logo: "/the-daily-star-logo.png" },
  { name: "Dhaka Tribune", logo: "/dhaka-tribune-logo.png" },
  { name: "bdnews24", logo: "/bdnews24-logo.png" },
  { name: "Channel i", logo: "/channel-i-tv-logo.png" },
  { name: "ATN News", logo: "/generic-news-logo.png" },
]

const testimonials = [
  {
    id: 1,
    name: "Fatima Rahman",
    role: "HSC Student",
    location: "Dhaka",
    rating: 5,
    comment: "Found an amazing physics tutor through Tuition Bondhu. My grades improved from C to A+ in just 3 months!",
    avatar: "/bangladeshi-student-smile.png",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    role: "University Student",
    location: "Chittagong",
    rating: 5,
    comment: "The programming tutors here are exceptional. Got a job at a tech company thanks to the skills I learned.",
    avatar: "/bangladeshi-student-glasses.png",
  },
  {
    id: 3,
    name: "Rashida Begum",
    role: "Parent",
    location: "Sylhet",
    rating: 5,
    comment: "My daughter's math tutor is so patient and caring. She actually enjoys studying now!",
    avatar: "/bangladeshi-mother-smiling.png",
  },
  {
    id: 4,
    name: "Karim Uddin",
    role: "SSC Student",
    location: "Rajshahi",
    rating: 5,
    comment: "Online chemistry classes were perfect during lockdown. Scored 95% in my board exams!",
    avatar: "/bangladeshi-boy-studying.png",
  },
]

const sponsors = [
  { name: "BRAC", logo: "/brac-logo.png", type: "Partner" },
  { name: "Grameenphone", logo: "/placeholder-chm4z.png", type: "Sponsor" },
  { name: "Dutch-Bangla Bank", logo: "/dutch-bangla-bank-logo.png", type: "Partner" },
  { name: "Robi", logo: "/generic-telecom-logo.png", type: "Sponsor" },
  { name: "City Bank", logo: "/city-bank-bangladesh-logo.png", type: "Partner" },
  { name: "Banglalink", logo: "/placeholder.svg?height=50&width=100", type: "Sponsor" },
]

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentSponsor, setCurrentSponsor] = useState(0)

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Auto-slide sponsors
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSponsor((prev) => (prev + 1) % Math.ceil(sponsors.length / 3))
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-card via-background to-muted py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">🇧🇩 Made for Bangladesh</Badge>
              </motion.div>

              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Find Your Perfect <span className="text-primary">Tutor</span> in Bangladesh
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground max-w-lg"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Connect with qualified tutors across Bangladesh. Home tutoring, online classes, and group sessions - all
                in one platform.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 pt-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search subjects, locations..."
                    className="pl-10 h-12 bg-background border-border"
                  />
                </div>
                <Link href="/search">
                  <Button size="lg" className="h-12 px-6 bg-primary hover:bg-primary/90">
                    Find Tutors
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center space-x-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">2000+ Tutors</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">4.9/5 Rating</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.05, rotate: 2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-card border-border shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Home className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-card-foreground">Home Tutoring</h3>
                          <p className="text-sm text-muted-foreground">In-person lessons</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mt-8"
                >
                  <Card className="bg-card border-border shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <Video className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-medium text-card-foreground">Online Classes</h3>
                          <p className="text-sm text-muted-foreground">Virtual learning</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="-mt-4"
                >
                  <Card className="bg-card border-border shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-card-foreground">Group Sessions</h3>
                          <p className="text-sm text-muted-foreground">Learn together</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mt-4"
                >
                  <Card className="bg-card border-border shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-chart-4/10 flex items-center justify-center">
                          <UserCheck className="w-5 h-5 text-chart-4" />
                        </div>
                        <div>
                          <h3 className="font-medium text-card-foreground">Verified Tutors</h3>
                          <p className="text-sm text-muted-foreground">Background checked</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-sm text-muted-foreground mb-6">As featured in</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {featuredInLogos.map((media, index) => (
                <motion.div
                  key={media.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={media.logo || "/placeholder.svg"}
                    alt={media.name}
                    className="h-8 md:h-10 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Why Choose Tuition Bondhu?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We make finding the perfect tutor simple, safe, and affordable for students across Bangladesh.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: UserCheck,
                title: "Verified Tutors",
                description: "All tutors undergo background verification and skill assessment",
                color: "primary",
              },
              {
                icon: MapPin,
                title: "Local & Online",
                description: "Find tutors in your area or learn online from anywhere",
                color: "accent",
              },
              {
                icon: Clock,
                title: "Flexible Scheduling",
                description: "Book sessions that fit your schedule, anytime",
                color: "secondary",
              },
              {
                icon: Star,
                title: "Rated & Reviewed",
                description: "Read reviews from real students and parents",
                color: "chart-4",
              },
              {
                icon: BookOpen,
                title: "All Subjects",
                description: "From primary to university level, all subjects covered",
                color: "chart-5",
              },
              {
                icon: CheckCircle,
                title: "Secure Payments",
                description: "Safe and secure payment processing with money-back guarantee",
                color: "primary",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-card border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center mb-4`}
                    >
                      <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-card-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">What Our Students Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from students and parents who found success through Tuition Bondhu.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-card border-border shadow-lg">
                        <CardContent className="p-8 text-center">
                          <Quote className="w-8 h-8 text-primary/20 mx-auto mb-4" />
                          <p className="text-lg text-card-foreground mb-6 italic">"{testimonial.comment}"</p>

                          <div className="flex items-center justify-center space-x-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                          </div>

                          <div className="flex items-center justify-center space-x-3">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {testimonial.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="text-left">
                              <h4 className="font-serif font-semibold text-card-foreground">{testimonial.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.role} • {testimonial.location}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors & Partners Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Our Partners & Sponsors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading organizations across Bangladesh to deliver quality education.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSponsor * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(sponsors.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-3 gap-8 px-4">
                      {sponsors.slice(slideIndex * 3, slideIndex * 3 + 3).map((sponsor, index) => (
                        <motion.div
                          key={sponsor.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="text-center"
                        >
                          <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6">
                              <img
                                src={sponsor.logo || "/placeholder.svg"}
                                alt={sponsor.name}
                                className="h-12 object-contain mx-auto mb-3 grayscale hover:grayscale-0 transition-all duration-300"
                              />
                              <h4 className="font-medium text-card-foreground mb-1">{sponsor.name}</h4>
                              <Badge variant="secondary" className="text-xs">
                                {sponsor.type}
                              </Badge>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: Math.ceil(sponsors.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSponsor(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSponsor ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
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
              Join thousands of students who have found their perfect tutor on Tuition Bondhu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/search">
                <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                  Find a Tutor
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 bg-transparent"
                >
                  Become a Tutor
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-serif font-bold">Tuition Bondhu</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Connecting students and tutors across Bangladesh for better education.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-3">For Students</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/search" className="hover:text-primary transition-colors">
                    Find Tutors
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-primary transition-colors">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">For Tutors</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/register" className="hover:text-primary transition-colors">
                    Become a Tutor
                  </Link>
                </li>
                <li>
                  <Link href="/tutor-guidelines" className="hover:text-primary transition-colors">
                    Tutor Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="hover:text-primary transition-colors">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/help" className="hover:text-primary transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Tuition Bondhu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
