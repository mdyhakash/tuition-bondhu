"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Users,
  BookOpen,
  Settings,
  BarChart3,
  PieChartIcon,
  Flag,
  Bell,
  Menu,
  X,
  GraduationCap,
  CreditCard,
  Calendar,
} from "lucide-react"

const sidebarItems = [
  { id: "overview", label: "Overview", icon: BarChart3, href: "/dashboard/admin" },
  { id: "users", label: "User Management", icon: Users, href: "/dashboard/admin/users" },
  { id: "tutors", label: "Tutor Management", icon: GraduationCap, href: "/dashboard/admin/tutors" },
  { id: "jobs", label: "Job Management", icon: BookOpen, href: "/dashboard/admin/jobs" },
  { id: "sessions", label: "Sessions", icon: Calendar, href: "/dashboard/admin/sessions" },
  { id: "payments", label: "Payments", icon: CreditCard, href: "/dashboard/admin/payments" },
  { id: "analytics", label: "Analytics", icon: PieChartIcon, href: "/dashboard/admin/analytics" },
  { id: "reports", label: "Reports & Moderation", icon: Flag, href: "/dashboard/admin/reports" },
  { id: "settings", label: "Settings", icon: Settings, href: "/dashboard/admin/settings" },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>

              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-serif font-bold text-foreground">Tuition Bondhu</span>
              </Link>

              <Badge variant="secondary" className="hidden sm:inline-flex">
                Admin Panel
              </Badge>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full"></span>
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -300, opacity: 0 }}
          animate={{
            x: sidebarOpen || (typeof window !== "undefined" && window.innerWidth >= 1024) ? 0 : -300,
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
          className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 space-y-2">
            {sidebarItems.map((item) => (
              <Link key={item.id} href={item.href} className="block">
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  className="w-full justify-start"
                  size="sm"
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </motion.aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
