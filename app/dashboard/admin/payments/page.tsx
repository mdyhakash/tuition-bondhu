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
  CreditCard,
  Search,
  Filter,
  MoreHorizontal,
  DollarSign,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock,
  Download,
  Home,
  ChevronRight,
} from "lucide-react"

const payments = [
  {
    id: 1,
    transactionId: "TXN-2024-001234",
    student: "আহমেদ রহমান",
    tutor: "ড. সাইফুল ইসলাম",
    amount: 800,
    commission: 80,
    tutorEarning: 720,
    method: "bKash",
    status: "Completed",
    date: "2024-01-20",
    sessionId: "SES-001",
    studentAvatar: "/bangladeshi-student-smile.png",
    tutorAvatar: "/bangladeshi-male-teacher.png",
  },
  {
    id: 2,
    transactionId: "TXN-2024-001235",
    student: "ফাতিমা খাতুন",
    tutor: "প্রফেসর রাহেলা বেগম",
    amount: 900,
    commission: 90,
    tutorEarning: 810,
    method: "Nagad",
    status: "Pending",
    date: "2024-01-20",
    sessionId: "SES-002",
    studentAvatar: "/bangladeshi-mother-smiling.png",
    tutorAvatar: "/bangladeshi-female-teacher.png",
  },
  {
    id: 3,
    transactionId: "TXN-2024-001236",
    student: "মোহাম্মদ করিম",
    tutor: "মোহাম্মদ হাসান",
    amount: 700,
    commission: 70,
    tutorEarning: 630,
    method: "Rocket",
    status: "Failed",
    date: "2024-01-19",
    sessionId: "SES-003",
    studentAvatar: "/bangladeshi-student-glasses.png",
    tutorAvatar: "/young-bangladeshi-male-teacher.png",
  },
]

export default function PaymentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredPayments = payments.filter(
    (payment) =>
      payment.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.tutor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "default"
      case "Pending":
        return "secondary"
      case "Failed":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4" />
      case "Pending":
        return <Clock className="h-4 w-4" />
      case "Failed":
        return <XCircle className="h-4 w-4" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

  const totalRevenue = payments.reduce((sum, payment) => sum + payment.commission, 0)
  const totalPayouts = payments.reduce((sum, payment) => sum + payment.tutorEarning, 0)

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
              <span className="text-gray-900 font-medium">Payment Management</span>
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
                <CreditCard className="h-8 w-8 text-orange-600 mr-3" />
                Payment Management
              </h1>
              <p className="text-gray-600 mt-2">Monitor transactions, commissions, and payouts</p>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">৳{totalRevenue.toLocaleString()}</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +12.5% from last month
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
                  <p className="text-sm font-medium text-gray-600">Total Payouts</p>
                  <p className="text-3xl font-bold text-gray-900">৳{totalPayouts.toLocaleString()}</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +8.3% from last month
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Payments</p>
                  <p className="text-3xl font-bold text-orange-600">৳12,450</p>
                  <p className="text-sm text-gray-600">15 transactions</p>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Failed Payments</p>
                  <p className="text-3xl font-bold text-red-600">৳3,200</p>
                  <p className="text-sm text-red-600 flex items-center mt-1">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    -2.1% from last month
                  </p>
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
                  placeholder="Search by transaction ID, student, or tutor..."
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

        {/* Payments Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Transactions</CardTitle>
            <CardDescription>Monitor payment transactions and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Payments</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="failed">Failed</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="space-y-4">
                  {filteredPayments.map((payment) => (
                    <div
                      key={payment.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex -space-x-2">
                          <Avatar className="h-10 w-10 border-2 border-white">
                            <AvatarImage src={payment.studentAvatar || "/placeholder.svg"} alt={payment.student} />
                            <AvatarFallback>{payment.student.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <Avatar className="h-10 w-10 border-2 border-white">
                            <AvatarImage src={payment.tutorAvatar || "/placeholder.svg"} alt={payment.tutor} />
                            <AvatarFallback>{payment.tutor.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{payment.transactionId}</h3>
                          <p className="text-sm text-gray-600">
                            {payment.student} → {payment.tutor}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>Session: {payment.sessionId}</span>
                            <span>Method: {payment.method}</span>
                            <span>Date: {payment.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge variant={getStatusColor(payment.status)} className="flex items-center space-x-1">
                              {getStatusIcon(payment.status)}
                              <span>{payment.status}</span>
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="space-y-1">
                          <div className="flex items-center justify-end space-x-2">
                            <span className="text-sm text-gray-600">Total:</span>
                            <span className="font-semibold text-gray-900">৳{payment.amount}</span>
                          </div>
                          <div className="flex items-center justify-end space-x-2">
                            <span className="text-sm text-gray-600">Commission:</span>
                            <span className="font-semibold text-green-600">৳{payment.commission}</span>
                          </div>
                          <div className="flex items-center justify-end space-x-2">
                            <span className="text-sm text-gray-600">Tutor:</span>
                            <span className="font-semibold text-blue-600">৳{payment.tutorEarning}</span>
                          </div>
                        </div>
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
                  <p className="text-gray-600">Completed payments view coming soon</p>
                </div>
              </TabsContent>

              <TabsContent value="pending">
                <div className="text-center py-8">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Pending payments view coming soon</p>
                </div>
              </TabsContent>

              <TabsContent value="failed">
                <div className="text-center py-8">
                  <XCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Failed payments view coming soon</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
