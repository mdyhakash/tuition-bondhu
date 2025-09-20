"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import Link from "next/link"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts"
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  MessageSquare,
  Settings,
  PieChartIcon,
  Activity,
  UserCheck,
  Flag,
  Search,
  Filter,
  Download,
  Shield,
  Eye,
  MapPin,
  Calendar,
} from "lucide-react"

const mockStats = {
  totalUsers: 15420,
  totalTutors: 3240,
  totalStudents: 12180,
  activeJobs: 1250,
  completedSessions: 8940,
  totalRevenue: 2450000,
  pendingVerifications: 45,
  reportedContent: 12,
}

const revenueData = [
  { month: "Jan", revenue: 180000, sessions: 720, users: 1200 },
  { month: "Feb", revenue: 195000, sessions: 780, users: 1350 },
  { month: "Mar", revenue: 210000, sessions: 840, users: 1480 },
  { month: "Apr", revenue: 225000, sessions: 900, users: 1620 },
  { month: "May", revenue: 240000, sessions: 960, users: 1750 },
  { month: "Jun", revenue: 255000, sessions: 1020, users: 1890 },
]

const userGrowthData = [
  { month: "Jan", students: 10200, tutors: 2800, total: 13000 },
  { month: "Feb", students: 10800, tutors: 2950, total: 13750 },
  { month: "Mar", students: 11200, tutors: 3050, total: 14250 },
  { month: "Apr", students: 11600, tutors: 3150, total: 14750 },
  { month: "May", students: 11900, tutors: 3200, total: 15100 },
  { month: "Jun", students: 12180, tutors: 3240, total: 15420 },
]

const subjectPopularityData = [
  { subject: "Mathematics", students: 3200, color: "#FF6B6B" },
  { subject: "Physics", students: 2100, color: "#4ECDC4" },
  { subject: "Chemistry", students: 1800, color: "#45B7D1" },
  { subject: "English", students: 1600, color: "#96CEB4" },
  { subject: "Biology", students: 1400, color: "#FFEAA7" },
  { subject: "Programming", students: 1200, color: "#DDA0DD" },
]

const locationData = [
  { city: "Dhaka", users: 8500, percentage: 55, color: "#FF6B6B" },
  { city: "Chittagong", users: 2300, percentage: 15, color: "#4ECDC4" },
  { city: "Sylhet", users: 1540, percentage: 10, color: "#45B7D1" },
  { city: "Rajshahi", users: 1230, percentage: 8, color: "#96CEB4" },
  { city: "Khulna", users: 920, percentage: 6, color: "#FFEAA7" },
  { city: "Others", users: 930, percentage: 6, color: "#DDA0DD" },
]

const sessionAnalytics = [
  { day: "Mon", completed: 145, cancelled: 12, pending: 23 },
  { day: "Tue", completed: 132, cancelled: 8, pending: 19 },
  { day: "Wed", completed: 158, cancelled: 15, pending: 28 },
  { day: "Thu", completed: 167, cancelled: 9, pending: 21 },
  { day: "Fri", completed: 142, cancelled: 11, pending: 25 },
  { day: "Sat", completed: 189, cancelled: 7, pending: 18 },
  { day: "Sun", completed: 134, cancelled: 13, pending: 22 },
]

const mockRecentActivity = [
  {
    id: 1,
    type: "user_registration",
    message: "New tutor registered: Ahmed Hassan",
    time: "2 minutes ago",
    status: "pending",
  },
  {
    id: 2,
    type: "job_posted",
    message: "New job posted: Mathematics HSC Preparation",
    time: "15 minutes ago",
    status: "active",
  },
  {
    id: 3,
    type: "payment",
    message: "Payment completed: ৳1,200 for session",
    time: "1 hour ago",
    status: "completed",
  },
  {
    id: 4,
    type: "report",
    message: "Content reported by user: Inappropriate behavior",
    time: "2 hours ago",
    status: "pending",
  },
  {
    id: 5,
    type: "verification",
    message: "Tutor verification completed: Rashida Khatun",
    time: "3 hours ago",
    status: "approved",
  },
]

const mockPendingUsers = [
  {
    id: 1,
    name: "Mohammad Ali",
    email: "ali@example.com",
    type: "tutor",
    subjects: ["Physics", "Mathematics"],
    experience: "5 years",
    education: "MSc Physics, DU",
    submittedAt: "2024-01-15",
    documents: ["ID Card", "Certificates", "CV"],
  },
  {
    id: 2,
    name: "Fatima Rahman",
    email: "fatima@example.com",
    type: "tutor",
    subjects: ["English", "Literature"],
    experience: "3 years",
    education: "MA English, JU",
    submittedAt: "2024-01-14",
    documents: ["ID Card", "Certificates"],
  },
  {
    id: 3,
    name: "Karim Uddin",
    email: "karim@example.com",
    type: "tutor",
    subjects: ["Chemistry", "Biology"],
    experience: "7 years",
    education: "PhD Chemistry, BUET",
    submittedAt: "2024-01-13",
    documents: ["ID Card", "Certificates", "CV", "References"],
  },
]

export default function AdminDashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d")

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Platform overview and management</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">Last 24h</SelectItem>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold text-card-foreground">{mockStats.totalUsers.toLocaleString()}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Jobs</p>
                  <p className="text-2xl font-bold text-card-foreground">{mockStats.activeJobs.toLocaleString()}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +8% from last week
                  </p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold text-card-foreground">
                    ৳{(mockStats.totalRevenue / 1000).toFixed(0)}K
                  </p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +15% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Reviews</p>
                  <p className="text-2xl font-bold text-card-foreground">{mockStats.pendingVerifications}</p>
                  <p className="text-xs text-orange-600 flex items-center mt-1">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    Requires attention
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* User Distribution Chart */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChartIcon className="w-5 h-5" />
                  <span>User Distribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    students: {
                      label: "Students",
                      color: "#FF6B6B",
                    },
                    tutors: {
                      label: "Tutors",
                      color: "#4ECDC4",
                    },
                  }}
                  className="h-[200px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Students", value: mockStats.totalStudents, fill: "#FF6B6B" },
                          { name: "Tutors", value: mockStats.totalTutors, fill: "#4ECDC4" },
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        <Cell fill="#FF6B6B" />
                        <Cell fill="#4ECDC4" />
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/dashboard/admin/users?filter=pending">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Review Pending Verifications ({mockStats.pendingVerifications})
                  </Button>
                </Link>
                <Link href="/dashboard/admin/reports">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Flag className="w-4 h-4 mr-2" />
                    Handle Reported Content ({mockStats.reportedContent})
                  </Button>
                </Link>
                <Link href="/dashboard/admin/support">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Review Support Tickets
                  </Button>
                </Link>
                <Link href="/dashboard/admin/settings">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    Platform Settings
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Revenue Growth Chart */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Revenue Growth</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    revenue: {
                      label: "Revenue (৳)",
                      color: "#45B7D1",
                    },
                  }}
                  className="h-[250px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#45B7D1"
                        fill="url(#revenueGradient)"
                        fillOpacity={0.6}
                      />
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#45B7D1" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#45B7D1" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* User Growth Chart */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>User Growth</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    students: {
                      label: "Students",
                      color: "#FF6B6B",
                    },
                    tutors: {
                      label: "Tutors",
                      color: "#4ECDC4",
                    },
                  }}
                  className="h-[250px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={userGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="students"
                        stroke="#FF6B6B"
                        strokeWidth={3}
                        dot={{ fill: "#FF6B6B", strokeWidth: 2, r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="tutors"
                        stroke="#4ECDC4"
                        strokeWidth={3}
                        dot={{ fill: "#4ECDC4", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Subject Popularity Chart */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Popular Subjects</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    students: {
                      label: "Students",
                      color: "#96CEB4",
                    },
                  }}
                  className="h-[250px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={subjectPopularityData} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="subject" type="category" width={80} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="students">
                        {subjectPopularityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Geographic Distribution */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Geographic Distribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {locationData.map((location, index) => (
                    <div key={location.city} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: location.color }}></div>
                        <span className="text-sm font-medium">{location.city}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{location.users.toLocaleString()}</span>
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${location.percentage}%`,
                              backgroundColor: location.color,
                            }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground w-8">{location.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Session Analytics */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Weekly Session Analytics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  completed: {
                    label: "Completed",
                    color: "#96CEB4",
                  },
                  cancelled: {
                    label: "Cancelled",
                    color: "#FF6B6B",
                  },
                  pending: {
                    label: "Pending",
                    color: "#FFEAA7",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sessionAnalytics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="completed" fill="#96CEB4" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="pending" fill="#FFEAA7" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="cancelled" fill="#FF6B6B" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <CardTitle>Pending Tutor Verifications</CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="Search users..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockPendingUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{user.name}</h4>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {user.subjects.map((subject) => (
                            <Badge key={subject} variant="secondary" className="text-xs">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {user.experience} • {user.education}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Review
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button variant="destructive" size="sm">
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Recent Platform Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockRecentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-3 border border-border rounded-lg">
                    <div className="flex-shrink-0">
                      {activity.type === "user_registration" && (
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-blue-600" />
                        </div>
                      )}
                      {activity.type === "job_posted" && (
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <BookOpen className="w-4 h-4 text-green-600" />
                        </div>
                      )}
                      {activity.type === "payment" && (
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-yellow-600" />
                        </div>
                      )}
                      {activity.type === "report" && (
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                        </div>
                      )}
                      {activity.type === "verification" && (
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Shield className="w-4 h-4 text-green-600" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-medium">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                      <p className="text-xs text-muted-foreground">
                        Status:{" "}
                        {activity.status === "pending" ? (
                          <span className="text-orange-600">Pending</span>
                        ) : activity.status === "active" ? (
                          <span className="text-green-600">Active</span>
                        ) : activity.status === "completed" ? (
                          <span className="text-green-600">Completed</span>
                        ) : activity.status === "approved" ? (
                          <span className="text-green-600">Approved</span>
                        ) : (
                          <span className="text-red-600">Rejected</span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          {/* Reports Content */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
