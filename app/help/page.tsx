"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Search, Users, CreditCard, Shield, MessageCircle, BookOpen, HelpCircle, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"

export default function HelpPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      faqs: [
        {
          question: "How do I create an account?",
          answer:
            "Click on 'Get Started' or 'Sign Up' and fill in your basic information. You'll receive a verification email to activate your account.",
        },
        {
          question: "Is Tuition Bondhu free to use?",
          answer:
            "Creating an account and browsing tutors is completely free. You only pay when you book and complete sessions with tutors.",
        },
        {
          question: "How do I find the right tutor?",
          answer:
            "Use our search filters to find tutors by subject, location, price range, and availability. Read reviews and check their profiles before making a decision.",
        },
      ],
    },
    {
      title: "For Students",
      icon: Users,
      faqs: [
        {
          question: "How do I book a session with a tutor?",
          answer:
            "Browse tutor profiles, click 'Contact Tutor' to discuss your needs, then use the booking system to schedule your first session.",
        },
        {
          question: "Can I have a trial session?",
          answer:
            "Many tutors offer trial sessions at discounted rates. Look for the 'Trial Available' badge on tutor profiles.",
        },
        {
          question: "What if I'm not satisfied with a tutor?",
          answer:
            "We offer a satisfaction guarantee. Contact our support team within 24 hours of your first session for a full refund if you're not satisfied.",
        },
      ],
    },
    {
      title: "Payments & Pricing",
      icon: CreditCard,
      faqs: [
        {
          question: "How much do tutoring sessions cost?",
          answer:
            "Prices vary by tutor, subject, and session type. Most sessions range from ৳300-1500 per hour. You can filter by price range when searching.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept bKash, Nagad, Rocket, bank transfers, and major credit/debit cards. All payments are processed securely.",
        },
        {
          question: "When do I pay for sessions?",
          answer:
            "Payment is processed after each completed session. You can also purchase session packages in advance for discounted rates.",
        },
      ],
    },
    {
      title: "Safety & Security",
      icon: Shield,
      faqs: [
        {
          question: "Are all tutors verified?",
          answer:
            "Yes, all tutors undergo background checks, identity verification, and skill assessments before joining our platform.",
        },
        {
          question: "Is my personal information safe?",
          answer:
            "We use industry-standard encryption and never share your personal information with third parties without your consent.",
        },
        {
          question: "How do you ensure session quality?",
          answer:
            "We have a rating and review system, regular quality checks, and a dedicated support team to ensure the best learning experience.",
        },
      ],
    },
  ]

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">Help Center</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find answers to common questions and get the help you need to make the most of Tuition Bondhu.
            </p>

            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search for help..." className="pl-10 h-12 bg-background border-border" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Quick Help</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Get instant help with these common topics.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Users,
                title: "Find a Tutor",
                description: "Learn how to search and connect with the perfect tutor for your needs",
                link: "/search",
              },
              {
                icon: MessageCircle,
                title: "Contact Support",
                description: "Get in touch with our support team for personalized assistance",
                link: "/contact",
              },
              {
                icon: CreditCard,
                title: "Payment Help",
                description: "Understand our pricing, payment methods, and refund policies",
                link: "#payments",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card border-border hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <Link href={item.link}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      >
                        Learn More
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

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
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
              Find answers to the most common questions about using Tuition Bondhu.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <category.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-serif">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Can't find what you're looking for? Our support team is here to help you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                  Contact Support
                  <MessageCircle className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                Live Chat
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
