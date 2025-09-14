"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function AdminDashboardLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Skeleton className="w-8 h-8 rounded-lg" />
              <Skeleton className="w-32 h-6" />
              <Skeleton className="w-20 h-5 rounded-full" />
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-8 h-8 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar Skeleton */}
        <aside className="w-64 bg-card border-r border-border p-6 space-y-2">
          {[...Array(7)].map((_, i) => (
            <Skeleton key={i} className="w-full h-9 rounded-md" />
          ))}
        </aside>

        {/* Main Content Skeleton */}
        <main className="flex-1 p-6 space-y-6">
          {/* Title Skeleton */}
          <div className="flex justify-between items-center">
            <div>
              <Skeleton className="w-48 h-8 mb-2" />
              <Skeleton className="w-64 h-4" />
            </div>
            <div className="flex space-x-2">
              <Skeleton className="w-32 h-9" />
              <Skeleton className="w-24 h-9" />
            </div>
          </div>

          {/* Stats Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <Skeleton className="w-20 h-4" />
                      <Skeleton className="w-16 h-8" />
                      <Skeleton className="w-24 h-3" />
                    </div>
                    <Skeleton className="w-12 h-12 rounded-lg" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs Skeleton */}
          <div className="space-y-6">
            <Skeleton className="w-full h-10 rounded-lg" />

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <Skeleton className="w-32 h-6" />
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <Skeleton className="w-24 h-4" />
                      <Skeleton className="w-16 h-4" />
                    </div>
                  ))}
                  <Skeleton className="w-full h-2 rounded-full" />
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-3">
                  <Skeleton className="w-28 h-6" />
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="w-full h-9 rounded-md" />
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
