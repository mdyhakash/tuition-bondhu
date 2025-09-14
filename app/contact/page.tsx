"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle } from "lucide-react"

export default function ContactPage() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to our support team and we'll get back to you as soon as
              possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email Support",
                description: "Send us an email and we'll respond within 24 hours",
                contact: "support@tuitionbondhu.com",
                action: "Send Email",
              },
              {
                icon: Phone,
                title: "Phone Support",
                description: "Call us during business hours for immediate assistance",
                contact: "+880 1XXX-XXXXXX",
                action: "Call Now",
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Chat with our support team in real-time",
                contact: "Available 9 AM - 9 PM",
                action: "Start Chat",
              },
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-card-foreground mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <p className="font-medium text-foreground mb-4">{method.contact}</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible. We're here to help with any
                questions about our platform.
              </p>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is this regarding?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your question or concern..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Office Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Frequently Asked</h3>
                <div className="space-y-3">
                  {[
                    "How do I find a tutor?",
                    "How much does it cost?",
                    "Are tutors verified?",
                    "Can I get a refund?",
                    "How do online sessions work?",
                  ].map((question, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border"
                    >
                      <HelpCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{question}</span>
                    </div> 
                  ))}
                  
                </div>
                <Link href="/help">
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    View All FAQs
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
