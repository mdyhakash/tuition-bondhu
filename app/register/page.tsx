"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { GraduationCap, Users, ArrowRight, ArrowLeft, Check, Upload, Camera, Shield } from "lucide-react"

type UserType = "student" | "tutor" | null
type Step = "userType" | "basicInfo" | "details" | "verification" | "complete"

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Literature",
  "Computer Science",
  "Programming",
  "Economics",
  "Business Studies",
  "History",
  "Social Studies",
  "Bengali",
  "Islamic Studies",
  "Geography",
]

const locations = [
  "Dhanmondi, Dhaka",
  "Gulshan, Dhaka",
  "Uttara, Dhaka",
  "Mirpur, Dhaka",
  "Wari, Dhaka",
  "Old Dhaka",
  "Banani, Dhaka",
  "Bashundhara, Dhaka",
  "Chittagong",
  "Sylhet",
  "Rajshahi",
  "Khulna",
  "Barisal",
  "Rangpur",
]

const grades = [
  "Class 1-5",
  "Class 6-8",
  "Class 9-10 (SSC)",
  "Class 11-12 (HSC)",
  "University/College",
  "Professional Courses",
]

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState<Step>("userType")
  const [userType, setUserType] = useState<UserType>(null)
  const [formData, setFormData] = useState({
    // Basic Info
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
    location: "",

    // Student specific
    grade: "",
    subjectsOfInterest: [] as string[],
    learningGoals: "",
    parentName: "",
    parentPhone: "",

    // Tutor specific
    education: "",
    experience: "",
    subjectsToTeach: [] as string[],
    teachingMethods: [] as string[],
    hourlyRate: "",
    availability: "",
    bio: "",
    qualifications: "",

    // Common
    profilePicture: null as File | null,
    agreeToTerms: false,
  })

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const getStepProgress = () => {
    const steps = ["userType", "basicInfo", "details", "verification", "complete"]
    return ((steps.indexOf(currentStep) + 1) / steps.length) * 100
  }

  const nextStep = () => {
    const steps: Step[] = ["userType", "basicInfo", "details", "verification", "complete"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
    }
  }

  const prevStep = () => {
    const steps: Step[] = ["userType", "basicInfo", "details", "verification", "complete"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-card via-background to-muted">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-serif font-bold text-foreground">Tuition Bondhu</span>
            </motion.div>

            <div className="flex items-center space-x-3">
              <span className="text-sm text-muted-foreground">Already have an account?</span>
              <Button variant="ghost">Sign In</Button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          {currentStep !== "userType" && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Registration Progress</span>
                <span className="text-sm text-muted-foreground">{Math.round(getStepProgress())}%</span>
              </div>
              <Progress value={getStepProgress()} className="h-2" />
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {/* Step 1: User Type Selection */}
            {currentStep === "userType" && (
              <motion.div
                key="userType"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-card border-border shadow-lg">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-serif font-bold text-card-foreground">
                      Join Tuition Bondhu
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Choose your role to get started with personalized experience
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Card
                          className={`cursor-pointer transition-all duration-300 ${
                            userType === "student"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => setUserType("student")}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Users className="w-6 h-6 text-primary" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-serif font-semibold text-card-foreground">
                                  I'm a Student/Parent
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  Looking for qualified tutors to help with studies
                                </p>
                              </div>
                              {userType === "student" && <Check className="w-5 h-5 text-primary" />}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Card
                          className={`cursor-pointer transition-all duration-300 ${
                            userType === "tutor" ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
                          }`}
                          onClick={() => setUserType("tutor")}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-accent" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-serif font-semibold text-card-foreground">I'm a Tutor</h3>
                                <p className="text-sm text-muted-foreground">
                                  Ready to share knowledge and earn by teaching
                                </p>
                              </div>
                              {userType === "tutor" && <Check className="w-5 h-5 text-accent" />}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>

                    <Button
                      className="w-full mt-6 bg-primary hover:bg-primary/90"
                      size="lg"
                      disabled={!userType}
                      onClick={nextStep}
                    >
                      Continue
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 2: Basic Information */}
            {currentStep === "basicInfo" && (
              <motion.div
                key="basicInfo"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-card border-border shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif font-bold text-card-foreground">
                      Basic Information
                    </CardTitle>
                    <p className="text-muted-foreground">Tell us about yourself to create your profile</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => updateFormData("fullName", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          placeholder="+880 1XXX-XXXXXX"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location *</Label>
                        <Select value={formData.location} onValueChange={(value) => updateFormData("location", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your area" />
                          </SelectTrigger>
                          <SelectContent>
                            {locations.map((location) => (
                              <SelectItem key={location} value={location}>
                                {location}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="password">Password *</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={(e) => updateFormData("password", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password *</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back
                      </Button>
                      <Button onClick={nextStep} className="flex-1 bg-primary hover:bg-primary/90">
                        Continue
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 3: Detailed Information */}
            {currentStep === "details" && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-card border-border shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif font-bold text-card-foreground">
                      {userType === "student" ? "Learning Preferences" : "Teaching Details"}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {userType === "student"
                        ? "Help us find the perfect tutors for you"
                        : "Tell us about your teaching expertise"}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {userType === "student" ? (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="grade">Grade/Level *</Label>
                          <Select value={formData.grade} onValueChange={(value) => updateFormData("grade", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your grade level" />
                            </SelectTrigger>
                            <SelectContent>
                              {grades.map((grade) => (
                                <SelectItem key={grade} value={grade}>
                                  {grade}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <Label>Subjects of Interest *</Label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {subjects.map((subject) => (
                              <div key={subject} className="flex items-center space-x-2">
                                <Checkbox
                                  id={subject}
                                  checked={formData.subjectsOfInterest.includes(subject)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      updateFormData("subjectsOfInterest", [...formData.subjectsOfInterest, subject])
                                    } else {
                                      updateFormData(
                                        "subjectsOfInterest",
                                        formData.subjectsOfInterest.filter((s) => s !== subject),
                                      )
                                    }
                                  }}
                                />
                                <Label htmlFor={subject} className="text-sm">
                                  {subject}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="learningGoals">Learning Goals</Label>
                          <Textarea
                            id="learningGoals"
                            placeholder="What do you want to achieve? (e.g., improve grades, prepare for exams, etc.)"
                            value={formData.learningGoals}
                            onChange={(e) => updateFormData("learningGoals", e.target.value)}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="parentName">Parent/Guardian Name</Label>
                            <Input
                              id="parentName"
                              placeholder="Parent or guardian name"
                              value={formData.parentName}
                              onChange={(e) => updateFormData("parentName", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="parentPhone">Parent/Guardian Phone</Label>
                            <Input
                              id="parentPhone"
                              placeholder="Parent or guardian phone"
                              value={formData.parentPhone}
                              onChange={(e) => updateFormData("parentPhone", e.target.value)}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="education">Education Background *</Label>
                          <Input
                            id="education"
                            placeholder="e.g., BSc in Mathematics, University of Dhaka"
                            value={formData.education}
                            onChange={(e) => updateFormData("education", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="experience">Teaching Experience *</Label>
                          <Select
                            value={formData.experience}
                            onValueChange={(value) => updateFormData("experience", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-1">0-1 years</SelectItem>
                              <SelectItem value="1-3">1-3 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="5-10">5-10 years</SelectItem>
                              <SelectItem value="10+">10+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <Label>Subjects You Can Teach *</Label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {subjects.map((subject) => (
                              <div key={subject} className="flex items-center space-x-2">
                                <Checkbox
                                  id={subject}
                                  checked={formData.subjectsToTeach.includes(subject)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      updateFormData("subjectsToTeach", [...formData.subjectsToTeach, subject])
                                    } else {
                                      updateFormData(
                                        "subjectsToTeach",
                                        formData.subjectsToTeach.filter((s) => s !== subject),
                                      )
                                    }
                                  }}
                                />
                                <Label htmlFor={subject} className="text-sm">
                                  {subject}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label>Teaching Methods</Label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {[
                              { id: "home", label: "Home Tutoring" },
                              { id: "online", label: "Online Classes" },
                              { id: "group", label: "Group Sessions" },
                            ].map((method) => (
                              <div key={method.id} className="flex items-center space-x-2">
                                <Checkbox
                                  id={method.id}
                                  checked={formData.teachingMethods.includes(method.id)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      updateFormData("teachingMethods", [...formData.teachingMethods, method.id])
                                    } else {
                                      updateFormData(
                                        "teachingMethods",
                                        formData.teachingMethods.filter((m) => m !== method.id),
                                      )
                                    }
                                  }}
                                />
                                <Label htmlFor={method.id} className="text-sm">
                                  {method.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="hourlyRate">Hourly Rate (৳)</Label>
                            <Input
                              id="hourlyRate"
                              placeholder="e.g., 800-1200"
                              value={formData.hourlyRate}
                              onChange={(e) => updateFormData("hourlyRate", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="availability">Availability</Label>
                            <Input
                              id="availability"
                              placeholder="e.g., Weekdays 4-8 PM"
                              value={formData.availability}
                              onChange={(e) => updateFormData("availability", e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio/Introduction</Label>
                          <Textarea
                            id="bio"
                            placeholder="Tell students about yourself, your teaching style, and achievements..."
                            value={formData.bio}
                            onChange={(e) => updateFormData("bio", e.target.value)}
                          />
                        </div>
                      </>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back
                      </Button>
                      <Button onClick={nextStep} className="flex-1 bg-primary hover:bg-primary/90">
                        Continue
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 4: Verification */}
            {currentStep === "verification" && (
              <motion.div
                key="verification"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-card border-border shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif font-bold text-card-foreground">
                      Profile & Verification
                    </CardTitle>
                    <p className="text-muted-foreground">Complete your profile and agree to our terms</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Profile Picture */}
                    <div className="space-y-3">
                      <Label>Profile Picture</Label>
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                          {formData.profilePicture ? (
                            <img
                              src={URL.createObjectURL(formData.profilePicture) || "/placeholder.svg"}
                              alt="Profile"
                              className="w-20 h-20 rounded-full object-cover"
                            />
                          ) : (
                            <Camera className="w-8 h-8 text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <Button variant="outline" className="mb-2 bg-transparent">
                            <Upload className="w-4 h-4 mr-2" />
                            Upload Photo
                          </Button>
                          <p className="text-xs text-muted-foreground">JPG, PNG up to 5MB</p>
                        </div>
                      </div>
                    </div>

                    {userType === "tutor" && (
                      <div className="space-y-4">
                        <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Shield className="w-5 h-5 text-accent" />
                            <h4 className="font-medium text-accent">Tutor Verification</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            To ensure quality and safety, all tutors go through our verification process.
                          </p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>Identity verification</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>Educational background check</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span>Teaching skill assessment</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => updateFormData("agreeToTerms", checked)}
                        />
                        <div className="text-sm">
                          <Label htmlFor="terms" className="cursor-pointer">
                            I agree to the{" "}
                            <a href="#" className="text-primary hover:underline">
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-primary hover:underline">
                              Privacy Policy
                            </a>
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back
                      </Button>
                      <Button
                        onClick={nextStep}
                        className="flex-1 bg-primary hover:bg-primary/90"
                        disabled={!formData.agreeToTerms}
                      >
                        Create Account
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 5: Complete */}
            {currentStep === "complete" && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-card border-border shadow-lg text-center">
                  <CardContent className="p-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Check className="w-10 h-10 text-primary" />
                    </motion.div>

                    <h2 className="text-2xl font-serif font-bold text-card-foreground mb-4">
                      Welcome to Tuition Bondhu!
                    </h2>

                    <p className="text-muted-foreground mb-6">
                      {userType === "student"
                        ? "Your account has been created successfully. You can now start searching for tutors and book your first lesson."
                        : "Your tutor profile has been submitted for verification. We'll review your application and notify you within 24-48 hours."}
                    </p>

                    {userType === "tutor" && (
                      <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-6">
                        <h4 className="font-medium text-accent mb-2">Next Steps:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Check your email for verification instructions</li>
                          <li>• Complete your profile with additional details</li>
                          <li>• Upload relevant certificates and documents</li>
                          <li>• Start receiving student requests once approved</li>
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1 bg-primary hover:bg-primary/90">
                        {userType === "student" ? "Find Tutors" : "Go to Dashboard"}
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Complete Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
