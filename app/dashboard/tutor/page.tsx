"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import {
  Users,
  Calendar,
  MessageCircle,
  Star,
  DollarSign,
  BookOpen,
  Settings,
  Bell,
  Plus,
  Video,
  Home,
  GraduationCap,
  CheckCircle,
  ChevronRight,
  BarChart3,
  User,
  Search,
  Filter,
  Send,
  Mail,
  Edit,
  Trash2,
  Download,
  Eye,
  XCircle,
  CalendarIcon,
  Clock,
  MapPin,
  TrendingUp,
  Award,
  Target,
} from "lucide-react"

const pendingApplications = [
  {
    id: 1,
    student: "Sarah Ahmed",
    subject: "Mathematics",
    grade: "Class 11",
    message: "Need help with calculus and algebra for upcoming HSC exams",
    budget: "৳800-1000/hour",
    location: "Dhanmondi, Dhaka",
    time: "2 hours ago",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    student: "Rafiq Hassan",
    subject: "Programming",
    grade: "University",
    message: "Looking for JavaScript and React tutoring for web development",
    budget: "৳1200-1500/hour",
    location: "Gulshan, Dhaka",
    time: "5 hours ago",
    avatar: "/placeholder.svg",
  },
]

const upcomingSessions = [
  {
    id: 1,
    student: "Fatima Khan",
    subject: "Chemistry",
    date: "Today",
    time: "3:00 PM - 4:00 PM",
    type: "online",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    student: "Karim Uddin",
    subject: "Mathematics",
    date: "Tomorrow",
    time: "5:00 PM - 6:30 PM",
    type: "home",
    avatar: "/placeholder.svg",
  },
]

const recentReviews = [
  {
    id: 1,
    student: "Fatima Khan",
    rating: 5,
    comment: "Excellent teacher! Made chemistry concepts very clear and easy to understand.",
    subject: "Chemistry",
    date: "2 days ago",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    student: "Ahmed Rahman",
    rating: 5,
    comment: "Great programming mentor. Helped me understand React concepts thoroughly.",
    subject: "Programming",
    date: "1 week ago",
    avatar: "/placeholder.svg",
  },
]

const monthlyStats = {
  totalEarnings: "৳45,600",
  totalSessions: 38,
  newStudents: 7,
  avgRating: 4.9,
  completionRate: 98,
}

const mockSessions = [
  {
    id: 1,
    student: "Fatima Khan",
    subject: "Chemistry",
    date: "2024-01-20",
    time: "3:00 PM - 4:00 PM",
    type: "online",
    status: "upcoming",
    avatar: "/placeholder.svg",
    price: "৳1000",
  },
  {
    id: 2,
    student: "Karim Uddin",
    subject: "Mathematics",
    date: "2024-01-18",
    time: "5:00 PM - 6:30 PM",
    type: "home",
    status: "completed",
    avatar: "/placeholder.svg",
    price: "৳800",
    rating: 5,
  },
  {
    id: 3,
    student: "Ahmed Rahman",
    subject: "Programming",
    date: "2024-01-15",
    time: "2:00 PM - 3:30 PM",
    type: "online",
    status: "completed",
    avatar: "/placeholder.svg",
    price: "৳1200",
    rating: 4,
  },
]

const mockStudents = [
  {
    id: 1,
    name: "Fatima Khan",
    grade: "Class 10",
    subject: "Chemistry",
    sessions: 12,
    totalPaid: "৳12,000",
    lastSession: "2024-01-18",
    status: "active",
    avatar: "/placeholder.svg",
    progress: 85,
  },
  {
    id: 2,
    name: "Karim Uddin",
    grade: "Class 11",
    subject: "Mathematics",
    sessions: 8,
    totalPaid: "৳6,400",
    lastSession: "2024-01-15",
    status: "active",
    avatar: "/placeholder.svg",
    progress: 70,
  },
  {
    id: 3,
    name: "Ahmed Rahman",
    grade: "University",
    subject: "Programming",
    sessions: 15,
    totalPaid: "৳18,000",
    lastSession: "2024-01-10",
    status: "completed",
    avatar: "/placeholder.svg",
    progress: 95,
  },
]

const mockEarnings = [
  {
    id: 1,
    student: "Fatima Khan",
    subject: "Chemistry",
    amount: "৳1000",
    date: "2024-01-18",
    status: "completed",
    sessionId: "TB-001",
  },
  {
    id: 2,
    student: "Karim Uddin",
    subject: "Mathematics",
    amount: "৳800",
    date: "2024-01-15",
    status: "completed",
    sessionId: "TB-002",
  },
  {
    id: 3,
    student: "Ahmed Rahman",
    subject: "Programming",
    amount: "৳1200",
    date: "2024-01-12",
    status: "pending",
    sessionId: "TB-003",
  },
]

export default function TutorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [messageText, setMessageText] = useState("")

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

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/bangladeshi-male-teacher.png" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 space-y-2"
          >
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/bangladeshi-male-teacher.png" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-serif font-semibold text-card-foreground">Mohammad Rahman</h3>
                    <p className="text-sm text-muted-foreground">Chemistry Tutor</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-3 h-3 fill-primary text-primary" />
                      <span className="text-xs text-muted-foreground">4.9 (127 reviews)</span>
                    </div>
                  </div>
                </div>

                <nav className="space-y-1">
                  {[
                    { id: "overview", label: "Overview", icon: BarChart3 },
                    { id: "applications", label: "Applications", icon: Users, badge: 2 },
                    { id: "sessions", label: "My Sessions", icon: Calendar },
                    { id: "students", label: "My Students", icon: User },
                    { id: "messages", label: "Messages", icon: MessageCircle },
                    { id: "earnings", label: "Earnings", icon: DollarSign },
                    { id: "reviews", label: "Reviews", icon: Star },
                    { id: "settings", label: "Settings", icon: Settings },
                  ].map((item) => (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "default" : "ghost"}
                      className="w-full justify-start relative"
                      onClick={() => setActiveTab(item.id)}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.label}
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-foreground">Welcome back, Mohammad!</h1>
                      <p className="text-muted-foreground">Here's your teaching overview for this month</p>
                    </div>
                    <Link href="/jobs">
                      <Button className="bg-primary hover:bg-primary/90">
                        <Plus className="w-4 h-4 mr-2" />
                        Browse Jobs
                      </Button>
                    </Link>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                    {[
                      {
                        title: "Total Earnings",
                        value: monthlyStats.totalEarnings,
                        icon: DollarSign,
                        color: "primary",
                      },
                      {
                        title: "Sessions",
                        value: monthlyStats.totalSessions.toString(),
                        icon: BookOpen,
                        color: "accent",
                      },
                      {
                        title: "New Students",
                        value: monthlyStats.newStudents.toString(),
                        icon: Users,
                        color: "secondary",
                      },
                      { title: "Avg Rating", value: monthlyStats.avgRating.toString(), icon: Star, color: "chart-4" },
                      {
                        title: "Completion",
                        value: `${monthlyStats.completionRate}%`,
                        icon: CheckCircle,
                        color: "chart-5",
                      },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.title}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -2 }}
                      >
                        <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-muted-foreground">{stat.title}</p>
                                <p className="text-xl font-bold text-card-foreground">{stat.value}</p>
                              </div>
                              <div
                                className={`w-10 h-10 rounded-lg bg-${stat.color}/10 flex items-center justify-center`}
                              >
                                <stat.icon className={`w-5 h-5 text-${stat.color}`} />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Pending Applications */}
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span className="text-lg font-serif font-semibold">Pending Applications</span>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {pendingApplications.length} New
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {pendingApplications.map((application, index) => (
                          <motion.div
                            key={application.id}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center space-x-3">
                                <Avatar className="w-10 h-10">
                                  <AvatarImage src={application.avatar || "/placeholder.svg"} />
                                  <AvatarFallback>
                                    {application.student
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h4 className="font-medium text-card-foreground">{application.student}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {application.grade} • {application.subject}
                                  </p>
                                </div>
                              </div>
                              <span className="text-xs text-muted-foreground">{application.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{application.message}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <span>{application.budget}</span>
                                <span>{application.location}</span>
                              </div>
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">
                                  Decline
                                </Button>
                                <Button size="sm" className="bg-primary hover:bg-primary/90">
                                  Accept
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* Upcoming Sessions */}
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span className="text-lg font-serif font-semibold">Upcoming Sessions</span>
                          <Button variant="ghost" size="sm" onClick={() => setActiveTab("sessions")}>
                            View All
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {upcomingSessions.map((session, index) => (
                          <motion.div
                            key={session.id}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                          >
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={session.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {session.student
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium text-card-foreground">{session.student}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {session.type === "online" ? (
                                    <Video className="w-3 h-3 mr-1" />
                                  ) : (
                                    <Home className="w-3 h-3 mr-1" />
                                  )}
                                  {session.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{session.subject}</p>
                              <p className="text-xs text-muted-foreground">
                                {session.date} • {session.time}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Recent Reviews */}
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="text-lg font-serif font-semibold">Recent Reviews</span>
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab("reviews")}>
                          View All
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {recentReviews.map((review, index) => (
                        <motion.div
                          key={review.id}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
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
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-card-foreground">{review.student}</h4>
                              <div className="flex items-center space-x-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">
                              {review.subject} • {review.date}
                            </p>
                            <p className="text-sm text-card-foreground">{review.comment}</p>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="applications" className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-foreground">Student Applications</h1>
                      <p className="text-muted-foreground">Manage incoming tutoring requests</p>
                    </div>
                    <Link href="/jobs">
                      <Button className="bg-primary hover:bg-primary/90">
                        <Search className="w-4 h-4 mr-2" />
                        Browse More Jobs
                      </Button>
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {pendingApplications.map((application, index) => (
                      <motion.div
                        key={application.id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-4">
                                <Avatar className="w-12 h-12">
                                  <AvatarImage src={application.avatar || "/placeholder.svg"} />
                                  <AvatarFallback>
                                    {application.student
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-serif font-semibold text-card-foreground">
                                    {application.student}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    {application.grade} • {application.subject}
                                  </p>
                                  <div className="flex items-center space-x-4 mt-1 text-xs text-muted-foreground">
                                    <span className="flex items-center">
                                      <MapPin className="w-3 h-3 mr-1" />
                                      {application.location}
                                    </span>
                                    <span className="flex items-center">
                                      <DollarSign className="w-3 h-3 mr-1" />
                                      {application.budget}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <span className="text-xs text-muted-foreground">{application.time}</span>
                            </div>

                            <div className="mb-4">
                              <h4 className="font-medium mb-2">Student's Message:</h4>
                              <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                                {application.message}
                              </p>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <MessageCircle className="w-4 h-4 mr-2" />
                                  Message
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4 mr-2" />
                                  View Profile
                                </Button>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="destructive" size="sm">
                                  <XCircle className="w-4 h-4 mr-2" />
                                  Decline
                                </Button>
                                <Button size="sm" className="bg-primary hover:bg-primary/90">
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Accept
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {pendingApplications.length === 0 && (
                    <div className="text-center py-12">
                      <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-2">No Applications Yet</h3>
                      <p className="text-muted-foreground mb-4">Browse available tutoring jobs to find students</p>
                      <Link href="/jobs">
                        <Button className="bg-primary hover:bg-primary/90">Browse Jobs</Button>
                      </Link>
                    </div>
                  )}
                </motion.div>
              </TabsContent>

              <TabsContent value="sessions" className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-foreground">My Sessions</h1>
                      <p className="text-muted-foreground">Manage your tutoring sessions</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Availability
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {mockSessions.map((session, index) => (
                      <motion.div
                        key={session.id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <Avatar className="w-12 h-12">
                                  <AvatarImage src={session.avatar || "/placeholder.svg"} />
                                  <AvatarFallback>
                                    {session.student
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-serif font-semibold text-card-foreground">{session.student}</h3>
                                  <p className="text-sm text-muted-foreground">{session.subject}</p>
                                  <div className="flex items-center space-x-4 mt-1 text-xs text-muted-foreground">
                                    <span className="flex items-center">
                                      <CalendarIcon className="w-3 h-3 mr-1" />
                                      {session.date}
                                    </span>
                                    <span className="flex items-center">
                                      <Clock className="w-3 h-3 mr-1" />
                                      {session.time}
                                    </span>
                                    <Badge variant="outline" className="text-xs">
                                      {session.type === "online" ? (
                                        <Video className="w-3 h-3 mr-1" />
                                      ) : (
                                        <Home className="w-3 h-3 mr-1" />
                                      )}
                                      {session.type}
                                    </Badge>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center space-x-3">
                                <div className="text-right">
                                  <p className="font-semibold text-primary">{session.price}</p>
                                  <Badge
                                    variant={
                                      session.status === "completed"
                                        ? "default"
                                        : session.status === "upcoming"
                                          ? "secondary"
                                          : "outline"
                                    }
                                    className="text-xs"
                                  >
                                    {session.status}
                                  </Badge>
                                </div>

                                {session.status === "upcoming" && (
                                  <div className="flex space-x-2">
                                    <Button variant="outline" size="sm">
                                      <Edit className="w-4 h-4 mr-2" />
                                      Reschedule
                                    </Button>
                                    <Button variant="destructive" size="sm">
                                      <XCircle className="w-4 h-4 mr-2" />
                                      Cancel
                                    </Button>
                                  </div>
                                )}

                                {session.status === "completed" && (
                                  <div className="flex items-center space-x-2">
                                    {session.rating && (
                                      <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                          <Star
                                            key={i}
                                            className={`w-3 h-3 ${
                                              i < session.rating
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "text-muted-foreground"
                                            }`}
                                          />
                                        ))}
                                      </div>
                                    )}
                                    <Button variant="outline" size="sm">
                                      <MessageCircle className="w-4 h-4 mr-2" />
                                      Message
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="students" className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-foreground">My Students</h1>
                      <p className="text-muted-foreground">Track your students' progress</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          placeholder="Search students..."
                          className="pl-10 w-64"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Button variant="outline">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {mockStudents.map((student, index) => (
                      <motion.div
                        key={student.id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4 mb-4">
                              <Avatar className="w-16 h-16">
                                <AvatarImage src={student.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  {student.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <h3 className="font-serif font-semibold text-card-foreground">{student.name}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {student.grade} • {student.subject}
                                </p>
                                <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                                  <span>{student.sessions} sessions</span>
                                  <span>Last: {student.lastSession}</span>
                                </div>
                              </div>
                              <Badge
                                variant={student.status === "active" ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {student.status}
                              </Badge>
                            </div>

                            <div className="space-y-3">
                              <div>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-sm font-medium">Progress</span>
                                  <span className="text-sm text-muted-foreground">{student.progress}%</span>
                                </div>
                                <Progress value={student.progress} className="h-2" />
                              </div>

                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Total Earned</span>
                                <span className="font-semibold text-primary">{student.totalPaid}</span>
                              </div>
                            </div>

                            <div className="flex space-x-2 mt-4">
                              <Button variant="outline" className="flex-1 bg-transparent">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Message
                              </Button>
                              <Button className="flex-1 bg-primary hover:bg-primary/90">
                                <CalendarIcon className="w-4 h-4 mr-2" />
                                Schedule
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="messages" className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-foreground">Messages</h1>
                      <p className="text-muted-foreground">Communicate with your students</p>
                    </div>
                    <Link href="/messages">
                      <Button className="bg-primary hover:bg-primary/90">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Open Full Chat
                      </Button>
                    </Link>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Conversations List */}
                    <Card className="bg-card border-border lg:col-span-1">
                      <CardHeader>
                        <CardTitle className="text-lg font-serif font-semibold">Conversations</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {mockStudents.slice(0, 3).map((student) => (
                          <div
                            key={student.id}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                          >
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={student.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {student.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h4 className="font-medium text-card-foreground">{student.name}</h4>
                              <p className="text-sm text-muted-foreground line-clamp-1">
                                Thanks for the great session today!
                              </p>
                            </div>
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* Chat Interface */}
                    <Card className="bg-card border-border lg:col-span-2">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>FK</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-serif font-semibold">Fatima Khan</h3>
                            <p className="text-sm text-muted-foreground">Chemistry Student</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="h-64 border border-border rounded-lg p-4 overflow-y-auto space-y-3">
                          <div className="flex justify-start">
                            <div className="bg-muted rounded-lg p-3 max-w-xs">
                              <p className="text-sm">Thanks for the great chemistry session today!</p>
                              <span className="text-xs text-muted-foreground">2 hours ago</span>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                              <p className="text-sm">You're welcome! Keep practicing those equations.</p>
                              <span className="text-xs text-primary-foreground/70">1 hour ago</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Input
                            placeholder="Type your message..."
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            className="flex-1"
                          />
                          <Button className="bg-primary hover:bg-primary/90">
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="earnings" className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-foreground">Earnings</h1>
                      <p className="text-muted-foreground">Track your tutoring income</p>
                    </div>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Report
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <Card className="bg-card border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Total Earnings</p>
                            <p className="text-2xl font-bold text-card-foreground">৳45,600</p>
                          </div>
                          <DollarSign className="w-8 h-8 text-primary" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">This Month</p>
                            <p className="text-2xl font-bold text-card-foreground">৳12,400</p>
                          </div>
                          <CalendarIcon className="w-8 h-8 text-accent" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Pending</p>
                            <p className="text-2xl font-bold text-card-foreground">৳1,200</p>
                          </div>
                          <Clock className="w-8 h-8 text-orange-500" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Avg/Session</p>
                            <p className="text-2xl font-bold text-card-foreground">৳950</p>
                          </div>
                          <TrendingUp className="w-8 h-8 text-secondary" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-lg font-serif font-semibold">Recent Transactions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {mockEarnings.map((earning, index) => (
                        <motion.div
                          key={earning.id}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 border border-border rounded-lg"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <DollarSign className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-card-foreground">{earning.student}</h4>
                              <p className="text-sm text-muted-foreground">
                                {earning.subject} • {earning.sessionId}
                              </p>
                              <p className="text-xs text-muted-foreground">{earning.date}</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <div className="text-right">
                              <p className="font-semibold text-card-foreground">{earning.amount}</p>
                              <Badge
                                variant={earning.status === "completed" ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {earning.status}
                              </Badge>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-foreground">Reviews & Ratings</h1>
                      <p className="text-muted-foreground">Student feedback and ratings</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-6 mb-6">
                    <Card className="bg-card border-border">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">4.9</div>
                        <div className="flex justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">Overall Rating</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-accent mb-2">127</div>
                        <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Total Reviews</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                        <Target className="w-8 h-8 text-secondary mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-lg font-serif font-semibold">Recent Reviews</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {recentReviews
                        .concat([
                          {
                            id: 3,
                            student: "Nasreen Akter",
                            rating: 4,
                            comment: "Very knowledgeable tutor. Helped me improve my chemistry grades significantly.",
                            subject: "Chemistry",
                            date: "2 weeks ago",
                            avatar: "/placeholder.svg",
                          },
                          {
                            id: 4,
                            student: "Karim Uddin",
                            rating: 5,
                            comment: "Excellent teaching method. Made complex math problems easy to understand.",
                            subject: "Mathematics",
                            date: "3 weeks ago",
                            avatar: "/placeholder.svg",
                          },
                        ])
                        .map((review, index) => (
                          <motion.div
                            key={review.id}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-start space-x-4 p-4 border border-border rounded-lg"
                          >
                            <Avatar className="w-12 h-12">
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
                                <h4 className="font-medium text-card-foreground">{review.student}</h4>
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-3 h-3 ${
                                        i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                {review.subject} • {review.date}
                              </p>
                              <p className="text-sm text-card-foreground">{review.comment}</p>
                            </div>
                          </motion.div>
                        ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-foreground">Settings</h1>
                      <p className="text-muted-foreground">Manage your tutor profile and preferences</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Profile Settings */}
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-lg font-serif font-semibold">Profile Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" defaultValue="Mohammad Rahman" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="mohammad@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" defaultValue="+880 1234 567890" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subjects">Subjects</Label>
                          <Input id="subjects" defaultValue="Chemistry, Biology, Mathematics" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="experience">Experience</Label>
                          <Input id="experience" defaultValue="7 years" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="education">Education</Label>
                          <Input id="education" defaultValue="PhD in Chemistry, BUET" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            defaultValue="Experienced chemistry tutor with 7 years of teaching experience..."
                            rows={3}
                          />
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90">Update Profile</Button>
                      </CardContent>
                    </Card>

                    {/* Teaching Preferences */}
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-lg font-serif font-semibold">Teaching Preferences</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="hourly-rate">Hourly Rate (৳)</Label>
                          <Input id="hourly-rate" defaultValue="1000-1500" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Preferred Locations</Label>
                          <Input id="location" defaultValue="Gulshan, Banani, Uttara" />
                        </div>
                        <div className="space-y-2">
                          <Label>Teaching Methods</Label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="home-tutoring" defaultChecked />
                              <Label htmlFor="home-tutoring">Home Tutoring</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="online-classes" defaultChecked />
                              <Label htmlFor="online-classes">Online Classes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="group-sessions" />
                              <Label htmlFor="group-sessions">Group Sessions</Label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Availability</Label>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                              (day) => (
                                <div key={day} className="flex items-center space-x-2">
                                  <input type="checkbox" id={day.toLowerCase()} defaultChecked={day !== "Friday"} />
                                  <Label htmlFor={day.toLowerCase()}>{day}</Label>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Notification Settings */}
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-lg font-serif font-semibold">Notifications</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">New Applications</h4>
                            <p className="text-sm text-muted-foreground">Get notified of new student applications</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Session Reminders</h4>
                            <p className="text-sm text-muted-foreground">Reminders before sessions</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Payment Updates</h4>
                            <p className="text-sm text-muted-foreground">Payment confirmations</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">New Reviews</h4>
                            <p className="text-sm text-muted-foreground">Student review notifications</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Account Actions */}
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-lg font-serif font-semibold">Account Actions</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Button variant="outline" className="w-full bg-transparent">
                          <Download className="w-4 h-4 mr-2" />
                          Download Teaching Data
                        </Button>
                        <Button variant="outline" className="w-full bg-transparent">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact Support
                        </Button>
                        <Button variant="outline" className="w-full bg-transparent">
                          <Edit className="w-4 h-4 mr-2" />
                          Update Verification Documents
                        </Button>
                        <Button variant="destructive" className="w-full">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Deactivate Account
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
