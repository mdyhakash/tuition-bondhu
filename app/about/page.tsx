"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Users, Shield, Star, CheckCircle, ArrowRight, BookOpen, Clock, MapPin, UserCheck } from "lucide-react"
import Navbar from "@/components/navbar"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
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
              About Tuition Bondhu
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're revolutionizing education in Bangladesh by connecting students with qualified tutors through our
              trusted platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "2000+", label: "Verified Tutors", icon: UserCheck },
              { number: "5000+", label: "Happy Students", icon: Users },
              { number: "50+", label: "Subjects Covered", icon: BookOpen },
              { number: "4.9/5", label: "Average Rating", icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                At Tuition Bondhu, we believe every student deserves access to quality education. Our mission is to make
                learning accessible, affordable, and effective for students across Bangladesh.
              </p>
              <div className="space-y-4">
                {[
                  "Connect students with qualified, verified tutors",
                  "Provide flexible learning options for all schedules",
                  "Ensure safe and secure learning environments",
                  "Support both students and tutors in their journey",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif font-semibold text-card-foreground mb-2">Safe & Secure</h3>
                  <p className="text-sm text-muted-foreground">All tutors are background verified for your safety</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border mt-8">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-serif font-semibold text-card-foreground mb-2">Flexible</h3>
                  <p className="text-sm text-muted-foreground">Learn at your own pace and schedule</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border -mt-4">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-serif font-semibold text-card-foreground mb-2">Local & Online</h3>
                  <p className="text-sm text-muted-foreground">Find tutors nearby or learn online</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border mt-4">
                <CardContent className="p-6">
                  <Star className="w-8 h-8 text-chart-4 mb-4" />
                  <h3 className="font-serif font-semibold text-card-foreground mb-2">Quality</h3>
                  <p className="text-sm text-muted-foreground">Highly rated tutors with proven results</p>
                </CardContent>
              </Card>
            </motion.div>
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
