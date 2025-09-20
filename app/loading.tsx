"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { BookOpen, Users, GraduationCap } from "lucide-react"

export default function AppLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Logo and Brand */}
        <div className="space-y-4">
          <div className="relative">
            <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center animate-pulse">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center animate-bounce">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Tuition Bondhu</h1>
            <p className="text-gray-600">Connecting Students & Tutors</p>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="space-y-4">
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          </div>
          <p className="text-gray-600 animate-pulse">Loading your learning journey...</p>
        </div>

        {/* Feature Preview Cards */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-white/80 border-0 shadow-sm">
            <CardContent className="p-3 text-center">
              <Users className="w-6 h-6 mx-auto text-blue-500 mb-2" />
              <Skeleton className="w-12 h-3 mx-auto" />
            </CardContent>
          </Card>
          <Card className="bg-white/80 border-0 shadow-sm">
            <CardContent className="p-3 text-center">
              <BookOpen className="w-6 h-6 mx-auto text-green-500 mb-2" />
              <Skeleton className="w-12 h-3 mx-auto" />
            </CardContent>
          </Card>
          <Card className="bg-white/80 border-0 shadow-sm">
            <CardContent className="p-3 text-center">
              <GraduationCap className="w-6 h-6 mx-auto text-purple-500 mb-2" />
              <Skeleton className="w-12 h-3 mx-auto" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
