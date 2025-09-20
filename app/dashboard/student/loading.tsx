"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { BookOpen, Calendar, MessageCircle, Star } from "lucide-react"

export default function StudentDashboardLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Skeleton className="w-8 h-8 rounded-lg" />
              <Skeleton className="w-32 h-6" />
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-32 h-8 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <div className="space-y-2">
            <Skeleton className="w-48 h-8 mx-auto" />
            <Skeleton className="w-64 h-4 mx-auto" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, color: "text-blue-500", bg: "bg-blue-100" },
            { icon: Calendar, color: "text-green-500", bg: "bg-green-100" },
            { icon: MessageCircle, color: "text-purple-500", bg: "bg-purple-100" },
            { icon: Star, color: "text-orange-500", bg: "bg-orange-100" },
          ].map((item, i) => (
            <Card key={i} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <Skeleton className="w-20 h-4" />
                    <Skeleton className="w-16 h-8" />
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Recent Sessions */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton className="w-32 h-6" />
                  <Skeleton className="w-20 h-8 rounded-full" />
                </div>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                    <Skeleton className="w-12 h-12 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="w-32 h-4" />
                      <Skeleton className="w-48 h-3" />
                    </div>
                    <Skeleton className="w-16 h-6 rounded-full" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Progress Section */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <Skeleton className="w-28 h-6" />
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between">
                      <Skeleton className="w-24 h-4" />
                      <Skeleton className="w-12 h-4" />
                    </div>
                    <Skeleton className="w-full h-2 rounded-full" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <Skeleton className="w-28 h-6" />
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="w-full h-10 rounded-lg" />
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <Skeleton className="w-32 h-6" />
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Skeleton className="w-8 h-8 rounded-full" />
                    <div className="flex-1 space-y-1">
                      <Skeleton className="w-24 h-3" />
                      <Skeleton className="w-16 h-3" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
