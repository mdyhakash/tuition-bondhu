"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Users, Calendar, DollarSign, TrendingUp, Clock, Star } from "lucide-react"

export default function TutorDashboardLoading() {
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
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center animate-pulse">
            <Users className="w-8 h-8 text-green-600" />
          </div>
          <div className="space-y-2">
            <Skeleton className="w-56 h-8 mx-auto" />
            <Skeleton className="w-72 h-4 mx-auto" />
          </div>
        </div>

        {/* Earnings & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: DollarSign, color: "text-green-500", bg: "bg-green-100" },
            { icon: Users, color: "text-blue-500", bg: "bg-blue-100" },
            { icon: Calendar, color: "text-purple-500", bg: "bg-purple-100" },
            { icon: Star, color: "text-orange-500", bg: "bg-orange-100" },
          ].map((item, i) => (
            <Card key={i} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <Skeleton className="w-20 h-4" />
                    <Skeleton className="w-16 h-8" />
                    <Skeleton className="w-24 h-3" />
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Schedule & Students */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Schedule */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <Skeleton className="w-32 h-6" />
                  </div>
                  <Skeleton className="w-20 h-8 rounded-full" />
                </div>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-2 h-12 bg-blue-500 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <Skeleton className="w-32 h-4" />
                      <Skeleton className="w-48 h-3" />
                      <Skeleton className="w-24 h-3" />
                    </div>
                    <Skeleton className="w-16 h-6 rounded-full" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Performance Chart */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <Skeleton className="w-40 h-6" />
                </div>
                <Skeleton className="w-full h-64 rounded-lg" />
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions & Recent */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <Skeleton className="w-28 h-6" />
                {["Schedule Session", "Add Student", "Update Profile", "View Earnings"].map((_, i) => (
                  <Skeleton key={i} className="w-full h-10 rounded-lg" />
                ))}
              </CardContent>
            </Card>

            {/* Recent Students */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <Skeleton className="w-32 h-6" />
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div className="flex-1 space-y-1">
                      <Skeleton className="w-24 h-3" />
                      <Skeleton className="w-16 h-3" />
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <Skeleton className="w-28 h-6" />
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="w-full h-3" />
                    <Skeleton className="w-3/4 h-3" />
                    <Skeleton className="w-16 h-3" />
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
