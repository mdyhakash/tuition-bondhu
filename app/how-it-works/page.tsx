"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Users,
  ArrowRight,
  Search,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
  Shield,
  CreditCard,
  GraduationCap,
} from "lucide-react"
import Navbar from "@/components/navbar"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />

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
              How Tuition Bondhu Works
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Getting started is simple. Follow these easy steps to find your perfect tutor or start teaching on our
              platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Students Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">For Students</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find and connect with qualified tutors in just a few simple steps.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Search & Browse",
                description:
                  "Browse through our verified tutors by subject, location, and availability. Read reviews and compare profiles to find the perfect match.",
                icon: Search,
              },
              {
                step: "02",
                title: "Connect & Chat",
                description:
                  "Message tutors directly to discuss your needs, schedule, and learning goals. Ask questions before booking to ensure a good fit.",
                icon: MessageCircle,
              },
              {
                step: "03",
                title: "Book & Learn",
                description:
                  "Schedule your sessions and start learning. Track progress, provide feedback, and achieve your academic goals.",
                icon: Calendar,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Tutors Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">For Tutors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start teaching and earning by sharing your knowledge with students across Bangladesh.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Create Profile",
                description:
                  "Sign up and create your detailed tutor profile. Add your qualifications, subjects, experience, and set your rates.",
                icon: Users,
              },
              {
                step: "02",
                title: "Get Verified",
                description:
                  "Complete our verification process by submitting required documents. We ensure all tutors meet our quality standards.",
                icon: Shield,
              },
              {
                step: "03",
                title: "Start Teaching",
                description:
                  "Browse job postings, apply to opportunities, or wait for students to contact you. Start earning by teaching.",
                icon: GraduationCap,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Platform Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a seamless tutoring experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Safe & Secure",
                description: "All tutors are background verified for your safety and peace of mind.",
                color: "primary",
              },
              {
                icon: Clock,
                title: "Flexible Timing",
                description: "Schedule sessions that fit your availability, anytime that works for you.",
                color: "accent",
              },
              {
                icon: MapPin,
                title: "Local & Online",
                description: "Choose between in-person tutoring or convenient online sessions.",
                color: "secondary",
              },
              {
                icon: CreditCard,
                title: "Secure Payments",
                description: "Safe payment processing with money-back guarantee for your protection.",
                color: "chart-4",
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
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center mx-auto mb-4`}
                    >
                      <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-card-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about using Tuition Bondhu platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How do I find the right tutor?",
                answer:
                  "Use our search filters to find tutors by subject, location, price range, and availability. Read reviews and profiles to make an informed choice.",
              },
              {
                question: "Are all tutors verified?",
                answer:
                  "Yes, all tutors go through our verification process including background checks, document verification, and skill assessment.",
              },
              {
                question: "How do payments work?",
                answer:
                  "Payments are processed securely through our platform. You can pay per session or in packages, with money-back guarantee for your protection.",
              },
              {
                question: "Can I switch tutors if needed?",
                answer:
                  "You can try different tutors until you find the perfect match. We want you to have the best learning experience possible.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-card-foreground mb-3">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
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
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 text-lg">Join our community of learners and educators today.</p>
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
    </div>
  )
}
