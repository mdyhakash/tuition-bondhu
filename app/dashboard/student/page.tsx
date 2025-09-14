"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import {
  BookOpen,
  Calendar,
  MessageCircle,
  Star,
  Clock,
  TrendingUp,
  Search,
  Heart,
  CreditCard,
  Settings,
  Bell,
  Plus,
  Video,
  Home,
  GraduationCap,
  ChevronRight,
  BarChart3,
  Filter,
  Send,
  Mail,
  Edit,
  Trash2,
  Download,
  Eye,
  XCircle,
  CalendarIcon,
} from "lucide-react"

const upcomingSessions = [
  {
    id: 1,
    tutor: "Rashida Khatun",
    subject: "Mathematics",
    date: "Today",
    time: "4:00 PM - 5:00 PM",
    type: "online",
    avatar: "/bangladeshi-female-teacher.png",
  },
  {
    id: 2,
    tutor: "Mohammad Rahman",
    subject: "Chemistry",
    date: "Tomorrow",
    time: "6:00 PM - 7:00 PM",
    type: "home",
    avatar: "/bangladeshi-male-teacher.png",
  },
  {
    id: 3,
    tutor: "Ahmed Hassan",
    subject: "Programming",
    date: "Dec 20",
    time: "3:00 PM - 4:30 PM",
    type: "online",
    avatar: "/bangladeshi-male-programmer-teacher.png",
  },
]

const recentMessages = [
  {
    id: 1,
    tutor: "Rashida Khatun",
    message: "Great progress in today's algebra session! Keep practicing the problems I shared.",
    time: "2 hours ago",
    unread: true,
    avatar: "/bangladeshi-female-teacher.png",
  },
  {
    id: 2,
    tutor: "Mohammad Rahman",
    message: "Don't forget to review the organic chemistry notes before our next class.",
    time: "1 day ago",
    unread: false,
    avatar: "/bangladeshi-male-teacher.png",
  },
  {
    id: 3,
    tutor: "Ahmed Hassan",
    message: "I've uploaded the JavaScript exercises to our shared folder.",
    time: "2 days ago",
    unread: false,
    avatar: "/bangladeshi-male-programmer-teacher.png",
  },
]

const learningProgress = [
  { subject: "Mathematics", progress: 75, sessions: 12, nextGoal: "Quadratic Equations" },
  { subject: "Chemistry", progress: 60, sessions: 8, nextGoal: "Organic Reactions" },
  { subject: "Programming", progress: 85, sessions: 15, nextGoal: "React Components" },
]

const favoriteTutors = [
  {
    id: 1,
    name: "Rashida Khatun",
    subject: "Mathematics",
    rating: 4.9,
    sessions: 12,
    avatar: "/bangladeshi-female-teacher.png",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    subject: "Programming",
    rating: 4.9,
    sessions: 15,
    avatar: "/bangladeshi-male-programmer-teacher.png",
  },
]

const mockSessions = [
  {
    id: 1,
    tutor: "Rashida Khatun",
    subject: "Mathematics",
    date: "2024-01-20",
    time: "4:00 PM - 5:00 PM",
    type: "online",
    status: "upcoming",
    avatar: "/bangladeshi-female-teacher.png",
    price: "৳800",
  },
  {
    id: 2,
    tutor: "Mohammad Rahman",
    subject: "Chemistry",
    date: "2024-01-18",
    time: "6:00 PM - 7:00 PM",
    type: "home",
    status: "completed",
    avatar: "/bangladeshi-male-teacher.png",
    price: "৳1000",
    rating: 5,
  },
  {
    id: 3,
    tutor: "Ahmed Hassan",
    subject: "Programming",
    date: "2024-01-15",
    time: "3:00 PM - 4:30 PM",
    type: "online",
    status: "completed",
    avatar: "/bangladeshi-male-programmer-teacher.png",
    price: "৳1200",
    rating: 4,
  },
]

const mockPayments = [
  {
    id: 1,
    tutor: "Rashida Khatun",
    subject: "Mathematics",
    amount: "৳800",
    date: "2024-01-18",
    status: "completed",
    method: "bKash",
    sessionId: "TB-001",
  },
  {
    id: 2,
    tutor: "Mohammad Rahman",
    subject: "Chemistry",
    amount: "৳1000",
    date: "2024-01-15",
    status: "completed",
    method: "Nagad",
    sessionId: "TB-002",
  },
  {
    id: 3,
    tutor: "Ahmed Hassan",
    subject: "Programming",
    amount: "৳1200",
    date: "2024-01-12",
    status: "pending",
    method: "Bank Transfer",
    sessionId: "TB-003",
  },
]

export default function StudentDashboard() {
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
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>SA</AvatarFallback>
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
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-serif font-semibold text-card-foreground">Sarah Ahmed</h3>
                    <p className="text-sm text-muted-foreground">Class 11 Student</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {[
                    { id: "overview", label: "Overview", icon: BarChart3 },
                    { id: "sessions", label: "My Sessions", icon: Calendar },
                    { id: "tutors", label: "Find Tutors", icon: Search },
                    { id: "messages", label: "Messages", icon: MessageCircle },
                    { id: "progress", label: "Progress", icon: TrendingUp },
                    { id: "favorites", label: "Favorites", icon: Heart },
                    { id: "payments", label: "Payments", icon: CreditCard },
                    { id: "settings", label: "Settings", icon: Settings },
                  ].map((item) => (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab(item.id)}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.label}
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
                      <h1 className="text-2xl font-serif font-bold text-foreground">Welcome back, Sarah!</h1>
                      <p className="text-muted-foreground">Here's your learning overview for today</p>
                    </div>
                    <Link href="/search">
                      <Button className="bg-primary hover:bg-primary/90">
                        <Plus className="w-4 h-4 mr-2" />
                        Book Session
                      </Button>
                    </Link>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {[
                      { title: "Total Sessions", value: "35", icon: BookOpen, color: "primary" },
                      { title: "This Week", value: "4", icon: Calendar, color: "accent" },
                      { title: "Avg Rating", value: "4.8", icon: Star, color: "secondary" },
                      { title: "Hours Learned", value: "52", icon: Clock, color: "chart-4" },
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
                                <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
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
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                          >
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={session.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {session.tutor
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium text-card-foreground">{session.tutor}</h4>
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

                    {/* Learning Progress */}
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-lg font-serif font-semibold">Learning Progress</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {learningProgress.map((subject, index) => (
                          <motion.div
                            key={subject.subject}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-card-foreground">{subject.subject}</h4>
                              <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                            </div>
                            <Progress value={subject.progress} className="h-2" />
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span>{subject.sessions} sessions completed</span>
                              <span>Next: {subject.nextGoal}</span>
                            </div>
                          </motion.div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Recent Messages */}
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="text-lg font-serif font-semibold">Recent Messages</span>
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab("messages")}>
                          View All
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {recentMessages.map((message, index) => (
                        <motion.div
                          key={message.id}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                        >
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={message.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {message.tutor
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-card-foreground">{message.tutor}</h4>
                              <span className="text-xs text-muted-foreground">{message.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">{message.message}</p>
                            {message.unread && (
                              <Badge variant="secondary" className="mt-1 text-xs">
                                New
                              </Badge>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
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
                    <Link href="/search">
                      <Button className="bg-primary hover:bg-primary/90">
                        <Plus className="w-4 h-4 mr-2" />
                        Book New Session
                      </Button>
                    </Link>
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
                                    {session.tutor
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-serif font-semibold text-card-foreground">{session.tutor}</h3>
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

              <TabsContent value="tutors" className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-foreground">Find Tutors</h1>
                      <p className="text-muted-foreground">Discover qualified tutors for your subjects</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search by subject, tutor name, or location..."
                        className="pl-10 h-12"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" className="h-12 px-4 bg-transparent">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                    <Link href="/search">
                      <Button className="h-12 bg-primary hover:bg-primary/90">Advanced Search</Button>
                    </Link>
                  </div>

                  <div className="text-center py-12">
                    <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-2">Use Advanced Search</h3>
                    <p className="text-muted-foreground mb-4">
                      Find the perfect tutor with our comprehensive search and filtering system
                    </p>
                    <Link href="/search">
                      <Button className="bg-primary hover:bg-primary/90">Go to Search Page</Button>
                    </Link>
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
                      <p className="text-muted-foreground">Communicate with your tutors</p>
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
                        {recentMessages.map((message) => (
                          <div
                            key={message.id}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                          >
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={message.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {message.tutor
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h4 className="font-medium text-card-foreground">{message.tutor}</h4>
                              <p className="text-sm text-muted-foreground line-clamp-1">{message.message}</p>
                            </div>
                            {message.unread && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* Chat Interface */}
                    <Card className="bg-card border-border lg:col-span-2">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src="/bangladeshi-female-teacher.png" />
                            <AvatarFallback>RK</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-serif font-semibold">Rashida Khatun</h3>
                            <p className="text-sm text-muted-foreground">Mathematics Tutor</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="h-64 border border-border rounded-lg p-4 overflow-y-auto space-y-3">
                          <div className="flex justify-start">
                            <div className="bg-muted rounded-lg p-3 max-w-xs">
                              <p className="text-sm">
                                Great progress in today's algebra session! Keep practicing the problems I shared.
                              </p>
                              <span className="text-xs text-muted-foreground">2 hours ago</span>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                              <p className="text-sm">Thank you! I'll work on them tonight.</p>
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

              <TabsContent value="progress" className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-foreground">Learning Progress</h1>
                      <p className="text-muted-foreground">Track your academic improvement</p>
                    </div>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Report
                    </Button>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6 mb-6">
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-lg font-serif font-semibold">Overall Progress</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {learningProgress.map((subject, index) => (
                          <div key={subject.subject} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-card-foreground">{subject.subject}</h4>
                              <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                            </div>
                            <Progress value={subject.progress} className="h-3" />
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span>{subject.sessions} sessions completed</span>
                              <span>Next: {subject.nextGoal}</span>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-lg font-serif font-semibold">Study Statistics</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <p className="text-2xl font-bold text-primary">52</p>
                            <p className="text-sm text-muted-foreground">Total Hours</p>
                          </div>
                          <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <p className="text-2xl font-bold text-accent">35</p>
                            <p className="text-sm text-muted-foreground">Sessions</p>
                          </div>
                          <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <p className="text-2xl font-bold text-secondary">4.8</p>
                            <p className="text-sm text-muted-foreground">Avg Rating</p>
                          </div>
                          <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <p className="text-2xl font-bold text-chart-4">3</p>
                            <p className="text-sm text-muted-foreground">Subjects</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-lg font-serif font-semibold">Recent Achievements</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        {
                          title: "Algebra Master",
                          description: "Completed 10 algebra sessions",
                          date: "2 days ago",
                          icon: "🏆",
                        },
                        {
                          title: "Consistent Learner",
                          description: "Attended sessions 5 weeks in a row",
                          date: "1 week ago",
                          icon: "📚",
                        },
                        {
                          title: "Top Performer",
                          description: "Scored 95% in chemistry quiz",
                          date: "2 weeks ago",
                          icon: "⭐",
                        },
                      ].map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl">{achievement.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-medium text-card-foreground">{achievement.title}</h4>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                          <span className="text-xs text-muted-foreground">{achievement.date}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="favorites" className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-foreground">Favorite Tutors</h1>
                      <p className="text-muted-foreground">Your saved tutors for quick access</p>
                    </div>
                    <Link href="/search">
                      <Button className="bg-primary hover:bg-primary/90">
                        <Search className="w-4 h-4 mr-2" />
                        Find More Tutors
                      </Button>
                    </Link>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {favoriteTutors.map((tutor, index) => (
                      <motion.div
                        key={tutor.id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4 mb-4">
                              <Avatar className="w-16 h-16">
                                <AvatarImage src={tutor.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  {tutor.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <h3 className="font-serif font-semibold text-card-foreground">{tutor.name}</h3>
                                <p className="text-sm text-muted-foreground">{tutor.subject}</p>
                                <div className="flex items-center space-x-4 mt-2">
                                  <div className="flex items-center">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                                    <span className="text-sm font-medium">{tutor.rating}</span>
                                  </div>
                                  <span className="text-sm text-muted-foreground">{tutor.sessions} sessions</span>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                                <Heart className="w-4 h-4 fill-current" />
                              </Button>
                            </div>

                            <div className="flex space-x-2">
                              <Button className="flex-1 bg-primary hover:bg-primary/90">
                                <CalendarIcon className="w-4 h-4 mr-2" />
                                Book Session
                              </Button>
                              <Button variant="outline" className="flex-1 bg-transparent">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Message
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {favoriteTutors.length === 0 && (
                    <div className="text-center py-12">
                      <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-2">No Favorites Yet</h3>
                      <p className="text-muted-foreground mb-4">Save tutors to your favorites for quick access</p>
                      <Link href="/search">
                        <Button className="bg-primary hover:bg-primary/90">Browse Tutors</Button>
                      </Link>
                    </div>
                  )}
                </motion.div>
              </TabsContent>

              <TabsContent value="payments" className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-foreground">Payment History</h1>
                      <p className="text-muted-foreground">Track your tutoring expenses</p>
                    </div>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-card border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Total Spent</p>
                            <p className="text-2xl font-bold text-card-foreground">৳15,400</p>
                          </div>
                          <CreditCard className="w-8 h-8 text-primary" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">This Month</p>
                            <p className="text-2xl font-bold text-card-foreground">৳3,000</p>
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
                  </div>

                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-lg font-serif font-semibold">Recent Transactions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {mockPayments.map((payment, index) => (
                        <motion.div
                          key={payment.id}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 border border-border rounded-lg"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <CreditCard className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-card-foreground">{payment.tutor}</h4>
                              <p className="text-sm text-muted-foreground">
                                {payment.subject} • {payment.sessionId}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {payment.date} • {payment.method}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <div className="text-right">
                              <p className="font-semibold text-card-foreground">{payment.amount}</p>
                              <Badge
                                variant={payment.status === "completed" ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {payment.status}
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

              <TabsContent value="settings" className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-foreground">Settings</h1>
                      <p className="text-muted-foreground">Manage your account preferences</p>
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
                          <Input id="name" defaultValue="Sarah Ahmed" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="sarah@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" defaultValue="+880 1234 567890" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="grade">Grade/Class</Label>
                          <Select defaultValue="class-11">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="class-9">Class 9</SelectItem>
                              <SelectItem value="class-10">Class 10</SelectItem>
                              <SelectItem value="class-11">Class 11</SelectItem>
                              <SelectItem value="class-12">Class 12</SelectItem>
                              <SelectItem value="university">University</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input id="location" defaultValue="Dhanmondi, Dhaka" />
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90">Update Profile</Button>
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
                            <h4 className="font-medium">Session Reminders</h4>
                            <p className="text-sm text-muted-foreground">Get notified before sessions</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">New Messages</h4>
                            <p className="text-sm text-muted-foreground">Notifications for new messages</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Payment Updates</h4>
                            <p className="text-sm text-muted-foreground">Transaction confirmations</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Marketing Emails</h4>
                            <p className="text-sm text-muted-foreground">Promotional content</p>
                          </div>
                          <Switch />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Privacy Settings */}
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-lg font-serif font-semibold">Privacy & Security</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        <Button variant="outline" className="w-full bg-transparent">
                          Change Password
                        </Button>
                        <div className="pt-4 border-t border-border">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Profile Visibility</h4>
                              <p className="text-sm text-muted-foreground">Show profile to tutors</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
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
                          Download My Data
                        </Button>
                        <Button variant="outline" className="w-full bg-transparent">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact Support
                        </Button>
                        <Button variant="destructive" className="w-full">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete Account
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
