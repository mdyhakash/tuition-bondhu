"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Search,
  Filter,
  MoreHorizontal,
  Clock,
  Video,
  MapPin,
  DollarSign,
  CheckCircle,
  XCircle,
  AlertCircle,
  Play,
  Home,
  ChevronRight,
} from "lucide-react"

const sessions = [
  {
    id: 1,
    student: "আহমেদ রহমান",
    tutor: "ড. সাইফুল ইসলাম",
    subject: "Mathematics",
    date: "2024-01-20",
    time: "10:00 AM - 11:00 AM",
    duration: 60,
    type: "Online",
    status: "Completed",
    amount: 800,
    studentAvatar: "/bangladeshi-student-smile.png",
    tutorAvatar: "/bangladeshi-male-teacher.png",
  },
  {
    id: 2,
    student: "ফাতিমা খাতুন",
    tutor: "প্রফেসর রাহেলা বেগম",
    subject: "English",
    date: "2024-01-20",
    time: "2:00 PM - 3:30 PM",
    duration: 90,
    type: "In-person",
    status: "Ongoing",
    amount: 900,
    studentAvatar: "/bangladeshi-mother-smiling.png",
    tutorAvatar: "/bangladeshi-female-teacher.png",
  },
  {
    id: 3,
    student: "মোহাম্মদ করিম",
    tutor: "মোহাম্মদ হাসান",
    subject: "Chemistry",
    date: "2024-01-21",
    time: "4:00 PM - 5:00 PM",
    duration: 60,
    type: "Online",
    status: "Scheduled",
    amount: 700,
    studentAvatar: "/bangladeshi-student-glasses.png",
    tutorAvatar: "/young-bangladeshi-male-teacher.png",
  },
  {
    id: 4,
    student: "সাবিনা আক্তার",
    tutor: "ড. সাইফুল ইসলাম",
    subject: "Physics",
    date: "2024-01-19",
    time: "11:00 AM - 12:00 PM",
    duration: 60,
    type: "Online",
    status: "Cancelled",
    amount: 800,
    studentAvatar: "/bangladeshi-female-student.png",
    tutorAvatar: "/bangladeshi-male-teacher.png",
  },
]

export default function SessionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredSessions = sessions.filter(
    (session) =>
      session.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.tutor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "default"
      case "Ongoing":
        return "default"
      case "Scheduled":
        return "secondary"
      case "Cancelled":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4" />
      case "Ongoing":
        return <Play className="h-4 w-4" />
      case "Scheduled":
        return <Clock className="h-4 w-4" />
      case "Cancelled":
        return <XCircle className="h-4 w-4" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

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
              <span className="text-gray-900 font-medium">Session Management</span>
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
                <Calendar className="h-8 w-8 text-orange-600 mr-3" />
                Session Management
              </h1>
              <p className="text-gray-600 mt-2">Monitor and manage tutoring sessions</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                  <p className="text-3xl font-bold text-gray-900">3,847</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-3xl font-bold text-green-600">3,234</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Ongoing</p>
                  <p className="text-3xl font-bold text-orange-600">156</p>
                </div>
                <Play className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Cancelled</p>
                  <p className="text-3xl font-bold text-red-600">457</p>
                </div>
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search sessions by student, tutor, or subject..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sessions Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Sessions</CardTitle>
            <CardDescription>Monitor tutoring sessions and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Sessions</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="space-y-4">
                  {filteredSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex -space-x-2">
                          <Avatar className="h-10 w-10 border-2 border-white">
                            <AvatarImage src={session.studentAvatar || "/placeholder.svg"} alt={session.student} />
                            <AvatarFallback>{session.student.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <Avatar className="h-10 w-10 border-2 border-white">
                            <AvatarImage src={session.tutorAvatar || "/placeholder.svg"} alt={session.tutor} />
                            <AvatarFallback>{session.tutor.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{session.subject}</h3>
                          <p className="text-sm text-gray-600">
                            {session.student} with {session.tutor}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {session.date}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {session.time}
                            </span>
                            <span className="flex items-center">
                              {session.type === "Online" ? (
                                <Video className="h-4 w-4 mr-1" />
                              ) : (
                                <MapPin className="h-4 w-4 mr-1" />
                              )}
                              {session.type}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge variant={getStatusColor(session.status)} className="flex items-center space-x-1">
                              {getStatusIcon(session.status)}
                              <span>{session.status}</span>
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end space-x-2 mb-2">
                          <DollarSign className="h-4 w-4 text-gray-600" />
                          <span className="font-semibold text-gray-900">৳{session.amount}</span>
                        </div>
                        <p className="text-sm text-gray-600">{session.duration} minutes</p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="completed">
                <div className="text-center py-8">
                  <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Completed sessions view coming soon</p>
                </div>
              </TabsContent>

              <TabsContent value="ongoing">
                <div className="text-center py-8">
                  <Play className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Ongoing sessions view coming soon</p>
                </div>
              </TabsContent>

              <TabsContent value="scheduled">
                <div className="text-center py-8">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Scheduled sessions view coming soon</p>
                </div>
              </TabsContent>

              <TabsContent value="cancelled">
                <div className="text-center py-8">
                  <XCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Cancelled sessions view coming soon</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
