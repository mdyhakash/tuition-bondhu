"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  GraduationCap,
  MapPin,
  Clock,
  BookOpen,
  Home,
  Video,
  Users,
  CalendarIcon,
  ArrowRight,
  ArrowLeft,
  Check,
} from "lucide-react"
import { format } from "date-fns"

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

type Step = "basics" | "details" | "preferences" | "review"

export default function PostJobPage() {
  const [currentStep, setCurrentStep] = useState<Step>("basics")
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    grade: "",
    description: "",
    location: "",
    teachingMethods: [] as string[],
    budgetType: "hourly", // 'hourly' | 'monthly' | 'negotiable'
    budgetRange: [800, 1200],
    sessionDuration: "60",
    sessionsPerWeek: "2",
    preferredDays: [] as string[],
    preferredTime: "",
    startDate: null as Date | null,
    duration: "3", // months
    requirements: "",
    tutorGender: "any", // 'male' | 'female' | 'any'
    experience: "any", // 'beginner' | 'intermediate' | 'expert' | 'any'
    urgency: "normal", // 'urgent' | 'normal' | 'flexible'
  })

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    const steps: Step[] = ["basics", "details", "preferences", "review"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
    }
  }

  const prevStep = () => {
    const steps: Step[] = ["basics", "details", "preferences", "review"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1])
    }
  }

  const getStepProgress = () => {
    const steps = ["basics", "details", "preferences", "review"]
    return ((steps.indexOf(currentStep) + 1) / steps.length) * 100
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
              <Button variant="ghost">Dashboard</Button>
              <Button variant="outline">Save Draft</Button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Header */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">Post a Tutoring Job</h1>
              <p className="text-muted-foreground">Find the perfect tutor by posting your requirements</p>
            </div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Progress</span>
              <span className="text-sm text-muted-foreground">{Math.round(getStepProgress())}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <motion.div
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${getStepProgress()}%` }}
              />
            </div>

            {/* Step Indicators */}
            <div className="flex justify-between mt-4">
              {[
                { id: "basics", label: "Basics", icon: BookOpen },
                { id: "details", label: "Details", icon: Clock },
                { id: "preferences", label: "Preferences", icon: MapPin },
                { id: "review", label: "Review", icon: Check },
              ].map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep === step.id
                        ? "bg-primary text-primary-foreground"
                        : getStepProgress() > index * 25
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <step.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs mt-1 text-muted-foreground">{step.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Step Content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-serif font-bold text-card-foreground">
                  {currentStep === "basics" && "Basic Information"}
                  {currentStep === "details" && "Session Details"}
                  {currentStep === "preferences" && "Tutor Preferences"}
                  {currentStep === "review" && "Review & Post"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Basics */}
                {currentStep === "basics" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title *</Label>
                      <Input
                        id="title"
                        placeholder="e.g., Need Mathematics Tutor for HSC Preparation"
                        value={formData.title}
                        onChange={(e) => updateFormData("title", e.target.value)}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Select value={formData.subject} onValueChange={(value) => updateFormData("subject", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem key={subject} value={subject}>
                                {subject}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="grade">Grade/Level *</Label>
                        <Select value={formData.grade} onValueChange={(value) => updateFormData("grade", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
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
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe what you need help with, your current level, goals, etc."
                        value={formData.description}
                        onChange={(e) => updateFormData("description", e.target.value)}
                        rows={4}
                      />
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

                    <div className="space-y-3">
                      <Label>Teaching Methods *</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[
                          { id: "home", label: "Home Tutoring", icon: Home, desc: "Tutor comes to your place" },
                          { id: "online", label: "Online Classes", icon: Video, desc: "Virtual sessions" },
                          { id: "group", label: "Group Sessions", icon: Users, desc: "Learn with others" },
                        ].map((method) => (
                          <motion.div key={method.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Card
                              className={`cursor-pointer transition-all duration-300 ${
                                formData.teachingMethods.includes(method.id)
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                              onClick={() => {
                                const methods = formData.teachingMethods.includes(method.id)
                                  ? formData.teachingMethods.filter((m) => m !== method.id)
                                  : [...formData.teachingMethods, method.id]
                                updateFormData("teachingMethods", methods)
                              }}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <method.icon className="w-5 h-5 text-primary" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-medium text-card-foreground">{method.label}</h4>
                                    <p className="text-sm text-muted-foreground">{method.desc}</p>
                                  </div>
                                  {formData.teachingMethods.includes(method.id) && (
                                    <Check className="w-5 h-5 text-primary" />
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Step 2: Details */}
                {currentStep === "details" && (
                  <>
                    <div className="space-y-4">
                      <Label>Budget *</Label>
                      <RadioGroup
                        value={formData.budgetType}
                        onValueChange={(value) => updateFormData("budgetType", value)}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hourly" id="hourly" />
                          <Label htmlFor="hourly">Hourly Rate</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label htmlFor="monthly">Monthly Package</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="negotiable" id="negotiable" />
                          <Label htmlFor="negotiable">Negotiable</Label>
                        </div>
                      </RadioGroup>

                      {formData.budgetType !== "negotiable" && (
                        <div className="space-y-3">
                          <Label>
                            Budget Range: ৳{formData.budgetRange[0]} - ৳{formData.budgetRange[1]}
                            {formData.budgetType === "hourly" ? "/hour" : "/month"}
                          </Label>
                          <Slider
                            value={formData.budgetRange}
                            onValueChange={(value) => updateFormData("budgetRange", value)}
                            max={formData.budgetType === "hourly" ? 3000 : 15000}
                            min={formData.budgetType === "hourly" ? 300 : 2000}
                            step={formData.budgetType === "hourly" ? 100 : 500}
                            className="w-full"
                          />
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sessionDuration">Session Duration (minutes)</Label>
                        <Select
                          value={formData.sessionDuration}
                          onValueChange={(value) => updateFormData("sessionDuration", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="45">45 minutes</SelectItem>
                            <SelectItem value="60">1 hour</SelectItem>
                            <SelectItem value="90">1.5 hours</SelectItem>
                            <SelectItem value="120">2 hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sessionsPerWeek">Sessions per Week</Label>
                        <Select
                          value={formData.sessionsPerWeek}
                          onValueChange={(value) => updateFormData("sessionsPerWeek", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 session</SelectItem>
                            <SelectItem value="2">2 sessions</SelectItem>
                            <SelectItem value="3">3 sessions</SelectItem>
                            <SelectItem value="4">4 sessions</SelectItem>
                            <SelectItem value="5">5 sessions</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Preferred Days</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
                          <div key={day} className="flex items-center space-x-2">
                            <Checkbox
                              id={day}
                              checked={formData.preferredDays.includes(day)}
                              onCheckedChange={(checked) => {
                                const days = checked
                                  ? [...formData.preferredDays, day]
                                  : formData.preferredDays.filter((d) => d !== day)
                                updateFormData("preferredDays", days)
                              }}
                            />
                            <Label htmlFor={day} className="text-sm">
                              {day}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Input
                        id="preferredTime"
                        placeholder="e.g., 4:00 PM - 6:00 PM"
                        value={formData.preferredTime}
                        onChange={(e) => updateFormData("preferredTime", e.target.value)}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal bg-transparent"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.startDate ? format(formData.startDate, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={formData.startDate || undefined}
                              onSelect={(date) => updateFormData("startDate", date)}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration (months)</Label>
                        <Select value={formData.duration} onValueChange={(value) => updateFormData("duration", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 month</SelectItem>
                            <SelectItem value="3">3 months</SelectItem>
                            <SelectItem value="6">6 months</SelectItem>
                            <SelectItem value="12">1 year</SelectItem>
                            <SelectItem value="ongoing">Ongoing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </>
                )}

                {/* Step 3: Preferences */}
                {currentStep === "preferences" && (
                  <>
                    <div className="space-y-4">
                      <Label>Tutor Gender Preference</Label>
                      <RadioGroup
                        value={formData.tutorGender}
                        onValueChange={(value) => updateFormData("tutorGender", value)}
                        className="flex space-x-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="any" id="any-gender" />
                          <Label htmlFor="any-gender">No Preference</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-4">
                      <Label>Experience Level</Label>
                      <RadioGroup
                        value={formData.experience}
                        onValueChange={(value) => updateFormData("experience", value)}
                        className="space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="any" id="any-exp" />
                          <Label htmlFor="any-exp">Any Experience Level</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="beginner" id="beginner" />
                          <Label htmlFor="beginner">Beginner (0-2 years)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="intermediate" id="intermediate" />
                          <Label htmlFor="intermediate">Intermediate (2-5 years)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="expert" id="expert" />
                          <Label htmlFor="expert">Expert (5+ years)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-4">
                      <Label>Urgency</Label>
                      <RadioGroup
                        value={formData.urgency}
                        onValueChange={(value) => updateFormData("urgency", value)}
                        className="space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="urgent" id="urgent" />
                          <Label htmlFor="urgent">Urgent - Need to start within a week</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="normal" id="normal" />
                          <Label htmlFor="normal">Normal - Can start within 2-3 weeks</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="flexible" id="flexible" />
                          <Label htmlFor="flexible">Flexible - No rush</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requirements">Additional Requirements</Label>
                      <Textarea
                        id="requirements"
                        placeholder="Any specific requirements, teaching style preferences, or other details..."
                        value={formData.requirements}
                        onChange={(e) => updateFormData("requirements", e.target.value)}
                        rows={3}
                      />
                    </div>
                  </>
                )}

                {/* Step 4: Review */}
                {currentStep === "review" && (
                  <div className="space-y-6">
                    <div className="bg-muted/50 rounded-lg p-6">
                      <h3 className="text-lg font-serif font-semibold text-card-foreground mb-4">Job Preview</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-card-foreground text-lg">{formData.title}</h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="secondary">{formData.subject}</Badge>
                            <Badge variant="outline">{formData.grade}</Badge>
                            <Badge variant="outline">{formData.location}</Badge>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium text-card-foreground mb-2">Description</h5>
                          <p className="text-muted-foreground">{formData.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-card-foreground mb-2">Budget</h5>
                            <p className="text-muted-foreground">
                              {formData.budgetType === "negotiable"
                                ? "Negotiable"
                                : `৳${formData.budgetRange[0]} - ৳${formData.budgetRange[1]}${formData.budgetType === "hourly" ? "/hour" : "/month"}`}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-card-foreground mb-2">Schedule</h5>
                            <p className="text-muted-foreground">
                              {formData.sessionsPerWeek} sessions/week, {formData.sessionDuration} min each
                            </p>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium text-card-foreground mb-2">Teaching Methods</h5>
                          <div className="flex gap-2">
                            {formData.teachingMethods.map((method) => (
                              <Badge key={method} variant="outline" className="capitalize">
                                {method === "home" && <Home className="w-3 h-3 mr-1" />}
                                {method === "online" && <Video className="w-3 h-3 mr-1" />}
                                {method === "group" && <Users className="w-3 h-3 mr-1" />}
                                {method}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-2">What happens next?</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Your job will be visible to qualified tutors</li>
                        <li>• You'll receive applications from interested tutors</li>
                        <li>• Review tutor profiles and choose the best fit</li>
                        <li>• Start your learning journey!</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border">
                  {currentStep !== "basics" && (
                    <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
                      <ArrowLeft className="mr-2 w-4 h-4" />
                      Back
                    </Button>
                  )}
                  <Button
                    onClick={currentStep === "review" ? () => {} : nextStep}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    {currentStep === "review" ? "Post Job" : "Continue"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
