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
  GraduationCap,
  Search,
  Filter,
  MoreHorizontal,
  UserPlus,
  Star,
  MapPin,
  BookOpen,
  Clock,
  DollarSign,
  CheckCircle,
  XCircle,
  AlertCircle,
  Home,
  ChevronRight,
} from "lucide-react"

const tutors = [
  {
    id: 1,
    name: "ড. সাইফুল ইসলাম",
    email: "saiful.islam@email.com",
    phone: "+880 1712-345678",
    subjects: ["Mathematics", "Physics"],
    rating: 4.9,
    reviews: 127,
    hourlyRate: 800,
    status: "Active",
    verified: true,
    joinDate: "2023-08-15",
    totalSessions: 245,
    avatar: "/bangladeshi-male-teacher.png",
    location: "Dhaka, Bangladesh",
    qualification: "PhD in Mathematics",
  },
  {
    id: 2,
    name: "প্রফেসর রাহেলা বেগম",
    email: "rahela.begum@email.com",
    phone: "+880 1812-345678",
    subjects: ["English", "Literature"],
    rating: 4.8,
    reviews: 89,
    hourlyRate: 600,
    status: "Active",
    verified: true,
    joinDate: "2023-09-20",
    totalSessions: 156,
    avatar: "/bangladeshi-female-teacher.png",
    location: "Chittagong, Bangladesh",
    qualification: "MA in English Literature",
  },
  {
    id: 3,
    name: "মোহাম্মদ হাসান",
    email: "mohammad.hasan@email.com",
    phone: "+880 1912-345678",
    subjects: ["Chemistry", "Biology"],
    rating: 4.7,
    reviews: 64,
    hourlyRate: 700,
    status: "Pending",
    verified: false,
    joinDate: "2024-01-10",
    totalSessions: 23,
    avatar: "/young-bangladeshi-male-teacher.png",
    location: "Sylhet, Bangladesh",
    qualification: "MSc in Chemistry",
  },
]

export default function TutorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredTutors = tutors.filter(
    (tutor) =>
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.subjects.some((subject) => subject.toLowerCase().includes(searchTerm.toLowerCase())),
  )

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
              <span className="text-gray-900 font-medium">Tutor Management</span>
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
                <GraduationCap className="h-8 w-8 text-orange-600 mr-3" />
                Tutor Management
              </h1>
              <p className="text-gray-600 mt-2">Manage tutor profiles, verification, and performance</p>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <UserPlus className="h-4 w-4 mr-2" />
              Add New Tutor
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Tutors</p>
                  <p className="text-3xl font-bold text-gray-900">1,247</p>
                </div>
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Tutors</p>
                  <p className="text-3xl font-bold text-green-600">1,134</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Approval</p>
                  <p className="text-3xl font-bold text-orange-600">67</p>
                </div>
                <AlertCircle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Suspended</p>
                  <p className="text-3xl font-bold text-red-600">46</p>
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
                  placeholder="Search tutors by name or subject..."
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

        {/* Tutors Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Tutors</CardTitle>
            <CardDescription>Manage and monitor tutor profiles</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Tutors</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="suspended">Suspended</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="space-y-4">
                  {filteredTutors.map((tutor) => (
                    <div
                      key={tutor.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={tutor.avatar || "/placeholder.svg"} alt={tutor.name} />
                          <AvatarFallback>{tutor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-gray-900">{tutor.name}</h3>
                            {tutor.verified && <CheckCircle className="h-4 w-4 text-green-600" />}
                          </div>
                          <p className="text-sm text-gray-600">{tutor.qualification}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-1" />
                              {tutor.subjects.join(", ")}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {tutor.location}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge
                              variant={
                                tutor.status === "Active"
                                  ? "default"
                                  : tutor.status === "Pending"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {tutor.status}
                            </Badge>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium ml-1">{tutor.rating}</span>
                              <span className="text-sm text-gray-600 ml-1">({tutor.reviews})</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end space-x-4 text-sm text-gray-600 mb-2">
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />৳{tutor.hourlyRate}/hr
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {tutor.totalSessions} sessions
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">Joined: {tutor.joinDate}</p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="active">
                <div className="text-center py-8">
                  <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Active tutors view coming soon</p>
                </div>
              </TabsContent>

              <TabsContent value="pending">
                <div className="text-center py-8">
                  <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Pending approval tutors view coming soon</p>
                </div>
              </TabsContent>

              <TabsContent value="suspended">
                <div className="text-center py-8">
                  <XCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Suspended tutors view coming soon</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
