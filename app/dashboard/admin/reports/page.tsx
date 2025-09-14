"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { FileText, Download, Calendar, TrendingUp, Users, DollarSign, BookOpen, Home, ChevronRight } from "lucide-react"

const monthlyData = [
  { month: "Jan", revenue: 45000, sessions: 234, users: 89 },
  { month: "Feb", revenue: 52000, sessions: 267, users: 112 },
  { month: "Mar", revenue: 48000, sessions: 245, users: 98 },
  { month: "Apr", revenue: 61000, sessions: 312, users: 134 },
  { month: "May", revenue: 55000, sessions: 289, users: 121 },
  { month: "Jun", revenue: 67000, sessions: 345, users: 156 },
]

const subjectData = [
  { subject: "Mathematics", sessions: 456, color: "#FF6B6B" },
  { subject: "English", sessions: 389, color: "#4ECDC4" },
  { subject: "Physics", sessions: 234, color: "#45B7D1" },
  { subject: "Chemistry", sessions: 198, color: "#96CEB4" },
  { subject: "Biology", sessions: 167, color: "#FFEAA7" },
  { subject: "Others", sessions: 123, color: "#DDA0DD" },
]

const tutorPerformance = [
  { name: "ড. সাইফুল ইসলাম", sessions: 89, rating: 4.9, earnings: 67200 },
  { name: "প্রফেসর রাহেলা বেগম", sessions: 76, rating: 4.8, earnings: 54800 },
  { name: "মোহাম্মদ হাসান", sessions: 45, rating: 4.7, earnings: 31500 },
  { name: "ড. নাসির উদ্দিন", sessions: 67, rating: 4.6, earnings: 48300 },
  { name: "ফারিয়া আক্তার", sessions: 52, rating: 4.8, earnings: 37400 },
]

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState("last-6-months")
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/admin" className="flex items-center text-orange-600 hover:text-orange-700">
                <Home className="h-5 w-5" />
                <span className="ml-2 font-medium">Admin Dashboard</span>
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-900 font-medium">Reports & Analytics</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <FileText className="h-8 w-8 text-orange-600 mr-3" />
                Reports & Analytics
              </h1>
              <p className="text-gray-600 mt-2">Comprehensive insights and performance metrics</p>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                  <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                  <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                  <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                  <SelectItem value="last-year">Last Year</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">৳3,28,000</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +15.3% from last period
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                  <p className="text-3xl font-bold text-gray-900">1,692</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +12.8% from last period
                  </p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Users</p>
                  <p className="text-3xl font-bold text-gray-900">710</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +8.7% from last period
                  </p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Session Rate</p>
                  <p className="text-3xl font-bold text-gray-900">৳194</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +2.1% from last period
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reports Tabs */}
        <Card>
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="revenue">Revenue</TabsTrigger>
                <TabsTrigger value="subjects">Subjects</TabsTrigger>
                <TabsTrigger value="tutors">Tutors</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Monthly Performance</CardTitle>
                      <CardDescription>Revenue and session trends over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={monthlyData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis yAxisId="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <Tooltip />
                          <Bar yAxisId="left" dataKey="revenue" fill="#FF6B6B" name="Revenue (৳)" />
                          <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="sessions"
                            stroke="#4ECDC4"
                            strokeWidth={3}
                            name="Sessions"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="revenue">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Analysis</CardTitle>
                    <CardDescription>Monthly revenue breakdown and trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="revenue" fill="#45B7D1" name="Revenue (৳)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="subjects">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Subject Distribution</CardTitle>
                      <CardDescription>Sessions by subject area</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={subjectData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="sessions"
                            label={({ subject, percent }) => `${subject} ${(percent * 100).toFixed(0)}%`}
                          >
                            {subjectData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Subject Performance</CardTitle>
                      <CardDescription>Session count by subject</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={subjectData} layout="horizontal">
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="subject" type="category" width={80} />
                          <Tooltip />
                          <Bar dataKey="sessions" fill="#96CEB4" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="tutors">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Tutors</CardTitle>
                    <CardDescription>Tutor performance metrics and earnings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tutorPerformance.map((tutor, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-semibold text-orange-600">#{index + 1}</span>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{tutor.name}</h3>
                              <p className="text-sm text-gray-600">{tutor.sessions} sessions completed</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-4">
                              <div>
                                <p className="text-sm text-gray-600">Rating</p>
                                <p className="font-semibold">{tutor.rating}/5.0</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Earnings</p>
                                <p className="font-semibold text-green-600">৳{tutor.earnings.toLocaleString()}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
