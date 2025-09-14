"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  Star,
  MapPin,
  Clock,
  BookOpen,
  GraduationCap,
  Home,
  Video,
  Users,
  MessageCircle,
  Calendar,
  Award,
  CheckCircle,
  Globe,
  ArrowLeft,
  Heart,
  Share2,
  Flag,
} from "lucide-react"

// Mock tutor data - in real app, this would come from API
const mockTutorData = {
  1: {
    id: 1,
    name: "Rashida Khatun",
    title: "Mathematics & Physics Expert",
    subjects: ["Mathematics", "Physics", "Statistics"],
    location: "Dhanmondi, Dhaka",
    rating: 4.9,
    reviews: 127,
    experience: "5 years",
    hourlyRate: "৳800-1200",
    image: "/bangladeshi-female-teacher.png",
    verified: true,
    online: true,
    home: true,
    group: false,
    availability: "Available",
    education: "MSc in Mathematics, University of Dhaka",
    languages: ["Bengali", "English"],
    bio: "I am a passionate mathematics and physics tutor with over 5 years of experience helping students excel in their studies. I specialize in making complex concepts simple and engaging. My teaching approach focuses on building strong fundamentals while developing problem-solving skills that last a lifetime.",
    achievements: [
      "Top 1% tutor on Tuition Bondhu",
      "100+ students achieved A+ grades",
      "Specialized in HSC & University prep",
      "Published research in applied mathematics",
    ],
    teachingStyle:
      "I believe in interactive learning where students actively participate in problem-solving. My lessons are structured yet flexible, adapting to each student's learning pace and style.",
    sessionTypes: [
      { type: "Individual (Home)", price: "৳1000/hour", duration: "1-2 hours" },
      { type: "Individual (Online)", price: "৳800/hour", duration: "1-2 hours" },
      { type: "Group (Online)", price: "৳600/hour per student", duration: "1.5-2 hours" },
    ],
    schedule: {
      monday: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"],
      tuesday: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"],
      wednesday: ["9:00 AM - 12:00 PM"],
      thursday: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"],
      friday: ["2:00 PM - 6:00 PM"],
      saturday: ["9:00 AM - 1:00 PM"],
      sunday: ["Closed"],
    },
    reviews: [
      {
        id: 1,
        student: "Fatima Rahman",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Rashida ma'am is an excellent teacher! She helped me improve my math grades from C to A+ in just 3 months. Her explanations are very clear and she's very patient.",
        subject: "Mathematics",
        avatar: "/bangladeshi-student-smile.png",
      },
      {
        id: 2,
        student: "Ahmed Hassan",
        rating: 5,
        date: "1 month ago",
        comment:
          "Best physics tutor I've ever had. She makes complex topics easy to understand and always encourages questions. Highly recommended!",
        subject: "Physics",
        avatar: "/bangladeshi-student-glasses.png",
      },
      {
        id: 3,
        student: "Nasir Ahmed",
        rating: 4,
        date: "2 months ago",
        comment:
          "Very knowledgeable and professional. Helped me prepare for university entrance exams. The online sessions were well-organized.",
        subject: "Mathematics",
        avatar: "/bangladeshi-boy-studying.png",
      },
    ],
    stats: {
      totalStudents: 89,
      totalHours: 1240,
      responseTime: "< 2 hours",
      completionRate: 98,
    },
  },
}

export default function TutorProfilePage() {
  const params = useParams()
  const tutorId = Number(params.id)
  const tutor = mockTutorData[tutorId as keyof typeof mockTutorData]
  const [isFavorite, setIsFavorite] = useState(false)

  if (!tutor) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-bold text-foreground mb-2">Tutor Not Found</h1>
          <p className="text-muted-foreground mb-4">The tutor profile you're looking for doesn't exist.</p>
          <Link href="/search">
            <Button className="bg-primary hover:bg-primary/90">Back to Search</Button>
          </Link>
        </div>
      </div>
    )
  }

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
            <div className="flex items-center space-x-4">
              <Link href="/search">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Search
                </Button>
              </Link>

              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-serif font-bold text-foreground">Tuition Bondhu</span>
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={() => setIsFavorite(!isFavorite)}>
                <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                Save
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Flag className="w-4 h-4 mr-2" />
                Report
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Profile Info */}
                <div className="lg:col-span-2">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <Avatar className="w-32 h-32">
                          <AvatarImage src={tutor.image || "/placeholder.svg"} />
                          <AvatarFallback className="text-2xl">
                            {tutor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {tutor.verified && (
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div>
                        <h1 className="text-3xl font-serif font-bold text-card-foreground mb-2">{tutor.name}</h1>
                        <p className="text-lg text-muted-foreground mb-3">{tutor.title}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {tutor.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-primary text-primary" />
                            {tutor.rating} ({tutor.reviews} reviews)
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {tutor.experience} experience
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {tutor.subjects.map((subject) => (
                            <Badge key={subject} variant="secondary">
                              {subject}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          {tutor.home && (
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Home className="w-3 h-3" />
                              Home
                            </Badge>
                          )}
                          {tutor.online && (
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Video className="w-3 h-3" />
                              Online
                            </Badge>
                          )}
                          {tutor.group && (
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              Group
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats & Actions */}
                <div className="space-y-6">
                  <Card className="bg-muted/50 border-border">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <p className="text-2xl font-bold text-primary">{tutor.hourlyRate}</p>
                        <p className="text-sm text-muted-foreground">per hour</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Response time</span>
                          <span className="font-medium">{tutor.stats.responseTime}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Students taught</span>
                          <span className="font-medium">{tutor.stats.totalStudents}+</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Completion rate</span>
                          <span className="font-medium">{tutor.stats.completionRate}%</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Link href={`/messages?tutor=${tutor.id}`}>
                          <Button className="w-full bg-primary hover:bg-primary/90">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Message Tutor
                          </Button>
                        </Link>
                        <Button variant="outline" className="w-full bg-transparent">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Session
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Languages */}
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tutor.languages.map((language) => (
                        <Badge key={language} variant="outline" className="text-xs">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* About */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      About Me
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">{tutor.bio}</p>
                    <p className="text-muted-foreground leading-relaxed">{tutor.teachingStyle}</p>
                  </CardContent>
                </Card>

                {/* Education */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-card-foreground">{tutor.education}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Achievements */}
              <div>
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tutor.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Student Reviews</CardTitle>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="text-lg font-semibold">{tutor.rating}</span>
                    <span className="text-muted-foreground">({tutor.reviews} reviews)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Rating Breakdown */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center gap-2">
                      <span className="text-sm">{stars}</span>
                      <Star className="w-3 h-3 fill-primary text-primary" />
                      <Progress value={stars === 5 ? 85 : stars === 4 ? 12 : 3} className="flex-1 h-2" />
                    </div>
                  ))}
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {tutor.reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={review.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {review.student
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-medium text-card-foreground">{review.student}</h4>
                              <p className="text-sm text-muted-foreground">
                                {review.subject} • {review.date}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Weekly Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(tutor.schedule).map(([day, times]) => (
                    <div
                      key={day}
                      className="flex items-center justify-between py-3 border-b border-border last:border-b-0"
                    >
                      <span className="font-medium capitalize text-card-foreground">{day}</span>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(times) ? (
                          times.map((time, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {time}
                            </Badge>
                          ))
                        ) : (
                          <Badge variant="secondary" className="text-xs">
                            {times}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Session Types & Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tutor.sessionTypes.map((session, index) => (
                    <Card key={index} className="bg-muted/50 border-border">
                      <CardContent className="p-4">
                        <h3 className="font-medium text-card-foreground mb-2">{session.type}</h3>
                        <p className="text-lg font-semibold text-primary mb-1">{session.price}</p>
                        <p className="text-sm text-muted-foreground">{session.duration}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
