"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
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
  TrendingUp,
  Users,
  BookOpen,
  DollarSign,
  Activity,
  Download,
  Calendar,
  MapPin,
  Clock,
  Star,
} from "lucide-react"

// Enhanced mock data for analytics
const revenueData = [
  { month: "Jan", revenue: 180000, sessions: 720, users: 1200, growth: 12 },
  { month: "Feb", revenue: 195000, sessions: 780, users: 1350, growth: 8.3 },
  { month: "Mar", revenue: 210000, sessions: 840, users: 1480, growth: 7.7 },
  { month: "Apr", revenue: 225000, sessions: 900, users: 1620, growth: 7.1 },
  { month: "May", revenue: 240000, sessions: 960, users: 1750, growth: 6.7 },
  { month: "Jun", revenue: 255000, sessions: 1020, users: 1890, growth: 6.3 },
  { month: "Jul", revenue: 275000, sessions: 1100, users: 2050, growth: 7.8 },
  { month: "Aug", revenue: 290000, sessions: 1160, users: 2200, growth: 5.5 },
]

const userEngagementData = [
  { day: "Mon", activeUsers: 1450, sessions: 2100, avgDuration: 45 },
  { day: "Tue", activeUsers: 1320, sessions: 1950, avgDuration: 42 },
  { day: "Wed", activeUsers: 1580, sessions: 2300, avgDuration: 48 },
  { day: "Thu", activeUsers: 1670, sessions: 2450, avgDuration: 50 },
  { day: "Fri", activeUsers: 1420, sessions: 2050, avgDuration: 44 },
  { day: "Sat", activeUsers: 1890, sessions: 2800, avgDuration: 55 },
  { day: "Sun", activeUsers: 1340, sessions: 1900, avgDuration: 40 },
]

const subjectPerformanceData = [
  { subject: "Mathematics", students: 3200, avgRating: 4.8, completionRate: 94, revenue: 85000 },
  { subject: "Physics", students: 2100, avgRating: 4.7, completionRate: 92, revenue: 65000 },
  { subject: "Chemistry", students: 1800, avgRating: 4.6, completionRate: 90, revenue: 55000 },
  { subject: "English", students: 1600, avgRating: 4.9, completionRate: 96, revenue: 48000 },
  { subject: "Biology", students: 1400, avgRating: 4.5, completionRate: 88, revenue: 42000 },
  { subject: "Programming", students: 1200, avgRating: 4.9, completionRate: 97, revenue: 72000 },
]

const locationAnalytics = [
  { city: "Dhaka", users: 8500, revenue: 180000, growth: 15, color: "#FF6B6B" },
  { city: "Chittagong", users: 2300, revenue: 48000, growth: 12, color: "#4ECDC4" },
  { city: "Sylhet", users: 1540, revenue: 32000, growth: 18, color: "#45B7D1" },
  { city: "Rajshahi", users: 1230, revenue: 26000, growth: 10, color: "#96CEB4" },
  { city: "Khulna", users: 920, revenue: 19000, growth: 8, color: "#FFEAA7" },
  { city: "Others", users: 930, revenue: 20000, growth: 22, color: "#DDA0DD" },
]

const tutorPerformanceData = [
  { rating: "5 Stars", count: 1240, percentage: 62, color: "#4ECDC4" },
  { rating: "4 Stars", count: 580, percentage: 29, color: "#96CEB4" },
  { rating: "3 Stars", count: 140, percentage: 7, color: "#FFEAA7" },
  { rating: "2 Stars", count: 30, percentage: 1.5, color: "#FF9F43" },
  { rating: "1 Star", count: 10, percentage: 0.5, color: "#FF6B6B" },
]

const sessionTrendsData = [
  { hour: "6 AM", sessions: 45, bookings: 52 },
  { hour: "8 AM", sessions: 120, bookings: 135 },
  { hour: "10 AM", sessions: 180, bookings: 195 },
  { hour: "12 PM", sessions: 220, bookings: 240 },
  { hour: "2 PM", sessions: 280, bookings: 310 },
  { hour: "4 PM", sessions: 350, bookings: 380 },
  { hour: "6 PM", sessions: 420, bookings: 450 },
  { hour: "8 PM", sessions: 380, bookings: 410 },
  { hour: "10 PM", sessions: 180, bookings: 200 },
]

export default function Analytics() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("30d")
  const [selectedMetric, setSelectedMetric] = useState("revenue")

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive platform insights and metrics</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-blue-900">৳2.45M</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +18% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600">Active Users</p>
                  <p className="text-2xl font-bold text-green-900">15,420</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12% growth rate
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-600">Total Sessions</p>
                  <p className="text-2xl font-bold text-purple-900">8,940</p>
                  <p className="text-xs text-purple-600 flex items-center mt-1">
                    <Activity className="w-3 h-3 mr-1" />
                    94% completion rate
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-600">Avg Session Duration</p>
                  <p className="text-2xl font-bold text-orange-900">47 min</p>
                  <p className="text-xs text-orange-600 flex items-center mt-1">
                    <Clock className="w-3 h-3 mr-1" />
                    +5 min from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Revenue and Growth Analytics */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span>Revenue Growth Trend</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                revenue: {
                  label: "Revenue (৳)",
                  color: "#3B82F6",
                },
                growth: {
                  label: "Growth %",
                  color: "#10B981",
                },
              }}
              className="h-[300px]"
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
                    stroke="#3B82F6"
                    fill="url(#revenueGradient)"
                    fillOpacity={0.6}
                  />
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-green-500" />
              <span>User Engagement</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                activeUsers: {
                  label: "Active Users",
                  color: "#10B981",
                },
                sessions: {
                  label: "Sessions",
                  color: "#F59E0B",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userEngagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="activeUsers"
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="sessions"
                    stroke="#F59E0B"
                    strokeWidth={3}
                    dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Subject Performance and Geographic Distribution */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-purple-500" />
              <span>Subject Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                revenue: {
                  label: "Revenue (৳)",
                  color: "#8B5CF6",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="revenue" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-red-500" />
              <span>Geographic Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {locationAnalytics.map((location, index) => (
                <div key={location.city} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: location.color }}></div>
                    <span className="text-sm font-medium">{location.city}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm font-medium">{location.users.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">৳{(location.revenue / 1000).toFixed(0)}K</div>
                    </div>
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${(location.users / 8500) * 100}%`,
                          backgroundColor: location.color,
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-green-600 w-12">+{location.growth}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tutor Performance and Session Trends */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>Tutor Rating Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                count: {
                  label: "Tutors",
                  color: "#F59E0B",
                },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tutorPerformanceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="count"
                  >
                    {tutorPerformanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-indigo-500" />
              <span>Daily Session Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                sessions: {
                  label: "Completed Sessions",
                  color: "#6366F1",
                },
                bookings: {
                  label: "New Bookings",
                  color: "#EC4899",
                },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sessionTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="sessions" fill="#6366F1" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="bookings" fill="#EC4899" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Subject Analytics */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Subject Performance Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Subject</th>
                  <th className="text-right p-2">Students</th>
                  <th className="text-right p-2">Avg Rating</th>
                  <th className="text-right p-2">Completion Rate</th>
                  <th className="text-right p-2">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {subjectPerformanceData.map((subject, index) => (
                  <tr key={subject.subject} className="border-b hover:bg-muted/50">
                    <td className="p-2 font-medium">{subject.subject}</td>
                    <td className="p-2 text-right">{subject.students.toLocaleString()}</td>
                    <td className="p-2 text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{subject.avgRating}</span>
                      </div>
                    </td>
                    <td className="p-2 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <span>{subject.completionRate}%</span>
                        <div className="w-16 bg-muted rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-green-500"
                            style={{ width: `${subject.completionRate}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-right font-medium">৳{(subject.revenue / 1000).toFixed(0)}K</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
