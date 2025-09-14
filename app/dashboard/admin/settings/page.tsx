"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Settings,
  Save,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Mail,
  Smartphone,
  Users,
  BookOpen,
  Home,
  ChevronRight,
} from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")
  const [settings, setSettings] = useState({
    siteName: "Tuition Bondhu",
    siteDescription: "Find the perfect tutor for your learning needs",
    contactEmail: "admin@tuitionbondhu.com",
    supportPhone: "+880 1700-000000",
    commissionRate: "10",
    minSessionDuration: "30",
    maxSessionDuration: "180",
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    autoApprovalTutors: false,
    requireVerification: true,
    allowCancellation: true,
    cancellationWindow: "24",
  })

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    // Save settings logic here
    console.log("Settings saved:", settings)
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
              <span className="text-gray-900 font-medium">Settings</span>
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
                <Settings className="h-8 w-8 text-orange-600 mr-3" />
                Platform Settings
              </h1>
              <p className="text-gray-600 mt-2">Configure platform settings and preferences</p>
            </div>
            <Button onClick={handleSave} className="bg-orange-600 hover:bg-orange-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        {/* Settings Tabs */}
        <Card>
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Globe className="h-5 w-5 mr-2" />
                        Site Information
                      </CardTitle>
                      <CardDescription>Basic information about your platform</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="siteName">Site Name</Label>
                        <Input
                          id="siteName"
                          value={settings.siteName}
                          onChange={(e) => handleSettingChange("siteName", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="siteDescription">Site Description</Label>
                        <Textarea
                          id="siteDescription"
                          value={settings.siteDescription}
                          onChange={(e) => handleSettingChange("siteDescription", e.target.value)}
                          rows={3}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="contactEmail">Contact Email</Label>
                          <Input
                            id="contactEmail"
                            type="email"
                            value={settings.contactEmail}
                            onChange={(e) => handleSettingChange("contactEmail", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="supportPhone">Support Phone</Label>
                          <Input
                            id="supportPhone"
                            value={settings.supportPhone}
                            onChange={(e) => handleSettingChange("supportPhone", e.target.value)}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="h-5 w-5 mr-2" />
                        Session Settings
                      </CardTitle>
                      <CardDescription>Configure session duration and booking settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="minDuration">Minimum Session Duration (minutes)</Label>
                          <Select
                            value={settings.minSessionDuration}
                            onValueChange={(value) => handleSettingChange("minSessionDuration", value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="15">15 minutes</SelectItem>
                              <SelectItem value="30">30 minutes</SelectItem>
                              <SelectItem value="45">45 minutes</SelectItem>
                              <SelectItem value="60">60 minutes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="maxDuration">Maximum Session Duration (minutes)</Label>
                          <Select
                            value={settings.maxSessionDuration}
                            onValueChange={(value) => handleSettingChange("maxSessionDuration", value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="120">120 minutes</SelectItem>
                              <SelectItem value="180">180 minutes</SelectItem>
                              <SelectItem value="240">240 minutes</SelectItem>
                              <SelectItem value="300">300 minutes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Bell className="h-5 w-5 mr-2" />
                      Notification Settings
                    </CardTitle>
                    <CardDescription>Configure how users receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-gray-600" />
                        <div>
                          <Label>Email Notifications</Label>
                          <p className="text-sm text-gray-600">Send notifications via email</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.emailNotifications}
                        onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-5 w-5 text-gray-600" />
                        <div>
                          <Label>SMS Notifications</Label>
                          <p className="text-sm text-gray-600">Send notifications via SMS</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.smsNotifications}
                        onCheckedChange={(checked) => handleSettingChange("smsNotifications", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Bell className="h-5 w-5 text-gray-600" />
                        <div>
                          <Label>Push Notifications</Label>
                          <p className="text-sm text-gray-600">Send push notifications to mobile apps</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.pushNotifications}
                        onCheckedChange={(checked) => handleSettingChange("pushNotifications", checked)}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payments">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Payment Settings
                    </CardTitle>
                    <CardDescription>Configure payment processing and commission rates</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="commissionRate">Platform Commission Rate (%)</Label>
                      <Input
                        id="commissionRate"
                        type="number"
                        min="0"
                        max="50"
                        value={settings.commissionRate}
                        onChange={(e) => handleSettingChange("commissionRate", e.target.value)}
                      />
                      <p className="text-sm text-gray-600 mt-1">Percentage of each transaction taken as platform fee</p>
                    </div>
                    <div>
                      <Label htmlFor="cancellationWindow">Cancellation Window (hours)</Label>
                      <Input
                        id="cancellationWindow"
                        type="number"
                        min="1"
                        max="168"
                        value={settings.cancellationWindow}
                        onChange={(e) => handleSettingChange("cancellationWindow", e.target.value)}
                      />
                      <p className="text-sm text-gray-600 mt-1">Hours before session when cancellation is allowed</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Allow Session Cancellation</Label>
                        <p className="text-sm text-gray-600">Allow users to cancel booked sessions</p>
                      </div>
                      <Switch
                        checked={settings.allowCancellation}
                        onCheckedChange={(checked) => handleSettingChange("allowCancellation", checked)}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Security Settings
                    </CardTitle>
                    <CardDescription>Configure security and verification requirements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-gray-600" />
                        <div>
                          <Label>Auto-approve Tutors</Label>
                          <p className="text-sm text-gray-600">Automatically approve new tutor registrations</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.autoApprovalTutors}
                        onCheckedChange={(checked) => handleSettingChange("autoApprovalTutors", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-gray-600" />
                        <div>
                          <Label>Require Identity Verification</Label>
                          <p className="text-sm text-gray-600">Require tutors to verify their identity</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.requireVerification}
                        onCheckedChange={(checked) => handleSettingChange("requireVerification", checked)}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="policies">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Terms of Service</CardTitle>
                      <CardDescription>Platform terms and conditions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Textarea placeholder="Enter your terms of service..." rows={6} className="w-full" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Privacy Policy</CardTitle>
                      <CardDescription>Data privacy and protection policy</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Textarea placeholder="Enter your privacy policy..." rows={6} className="w-full" />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
