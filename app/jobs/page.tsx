"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  BookOpen,
  Home,
  Video,
  Users,
  Calendar,
  SlidersHorizontal,
  X,
  Send,
  GraduationCap,
  Eye,
  Heart,
} from "lucide-react"

const mockJobs = [
  {
    id: 1,
    title: "Need Mathematics Tutor for HSC Preparation",
    subject: "Mathematics",
    grade: "Class 11-12 (HSC)",
    description:
      "Looking for an experienced mathematics tutor to help with HSC preparation. Need help with calculus, algebra, and geometry. Student is currently struggling with advanced topics.",
    location: "Dhanmondi, Dhaka",
    budget: "৳1000-1500/hour",
    budgetType: "hourly",
    duration: "6 months",
    sessions: "3 sessions/week",
    sessionDuration: "90 min",
    methods: ["home", "online"],
    urgency: "urgent",
    postedBy: "Sarah Ahmed",
    postedDate: "2 days ago",
    applications: 12,
    student: {
      name: "Sarah Ahmed",
      grade: "HSC 1st Year",
      avatar: "/placeholder.svg",
    },
  },
  {
    id: 2,
    title: "Programming Tutor for Web Development",
    subject: "Programming",
    grade: "University/College",
    description:
      "University student looking for JavaScript and React tutoring. Want to build strong foundation in web development for career preparation.",
    location: "Gulshan, Dhaka",
    budget: "৳1200-1800/hour",
    budgetType: "hourly",
    duration: "4 months",
    sessions: "2 sessions/week",
    sessionDuration: "120 min",
    methods: ["online"],
    urgency: "normal",
    postedBy: "Rafiq Hassan",
    postedDate: "1 day ago",
    applications: 8,
    student: {
      name: "Rafiq Hassan",
      grade: "3rd Year CSE",
      avatar: "/placeholder.svg",
    },
  },
  {
    id: 3,
    title: "Chemistry Help for SSC Exam",
    subject: "Chemistry",
    grade: "Class 9-10 (SSC)",
    description:
      "Need help with organic and inorganic chemistry concepts. Preparing for SSC exams and want to improve understanding of chemical reactions.",
    location: "Uttara, Dhaka",
    budget: "৳600-900/hour",
    budgetType: "hourly",
    duration: "3 months",
    sessions: "2 sessions/week",
    sessionDuration: "60 min",
    methods: ["home"],
    urgency: "urgent",
    postedBy: "Fatima Khan",
    postedDate: "3 hours ago",
    applications: 5,
    student: {
      name: "Fatima Khan",
      grade: "SSC Candidate",
      avatar: "/placeholder.svg",
    },
  },
  {
    id: 4,
    title: "English Literature Tutor Needed",
    subject: "English",
    grade: "Class 11-12 (HSC)",
    description:
      "Looking for an English literature tutor who can help with poetry analysis, prose, and essay writing. Need guidance for HSC English preparation.",
    location: "Mirpur, Dhaka",
    budget: "৳800-1200/hour",
    budgetType: "hourly",
    duration: "5 months",
    sessions: "2 sessions/week",
    sessionDuration: "90 min",
    methods: ["home", "online"],
    urgency: "normal",
    postedBy: "Ahmed Rahman",
    postedDate: "1 week ago",
    applications: 15,
    student: {
      name: "Ahmed Rahman",
      grade: "HSC 2nd Year",
      avatar: "/placeholder.svg",
    },
  },
]

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

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [budgetRange, setBudgetRange] = useState([500, 2000])
  const [teachingMethods, setTeachingMethods] = useState<string[]>([])
  const [urgencyFilter, setUrgencyFilter] = useState("All")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [applicationMessage, setApplicationMessage] = useState("")

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesSubjects = selectedSubjects.length === 0 || selectedSubjects.includes(job.subject)
    const matchesLocation = selectedLocation === "All Locations" || job.location === selectedLocation
    const matchesMethods =
      teachingMethods.length === 0 || teachingMethods.some((method) => job.methods.includes(method))
    const matchesUrgency = urgencyFilter === "All" || job.urgency === urgencyFilter

    return matchesSearch && matchesSubjects && matchesLocation && matchesMethods && matchesUrgency
  })

  const handleApply = (jobId: number) => {
    // Handle job application logic
    console.log(`Applied to job ${jobId} with message: ${applicationMessage}`)
    setApplicationMessage("")
    setSelectedJob(null)
  }

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
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-serif font-bold text-foreground">Tuition Bondhu</span>
              </Link>
            </motion.div>

            <div className="flex items-center space-x-3">
              <Link href="/dashboard/tutor">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link href="/post-job">
                <Button className="bg-primary hover:bg-primary/90">Post Job</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-6">
        {/* Search Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Browse Tutoring Jobs</h1>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search jobs by subject, title, or description..."
                className="pl-10 h-12 bg-background border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="h-12 px-4 border-border"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
                {showFilters && <X className="w-4 h-4 ml-2" />}
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:w-80 space-y-6"
              >
                <Card className="bg-card border-border">
                  <CardContent className="p-6 space-y-6">
                    <h3 className="font-serif font-semibold text-lg text-card-foreground">Filters</h3>

                    {/* Subjects */}
                    <div>
                      <Label className="text-sm font-medium mb-3 block">Subjects</Label>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {subjects.map((subject) => (
                          <div key={subject} className="flex items-center space-x-2">
                            <Checkbox
                              id={subject}
                              checked={selectedSubjects.includes(subject)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedSubjects([...selectedSubjects, subject])
                                } else {
                                  setSelectedSubjects(selectedSubjects.filter((s) => s !== subject))
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

                    {/* Location */}
                    <div>
                      <Label className="text-sm font-medium mb-3 block">Location</Label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All Locations">All Locations</SelectItem>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Teaching Methods */}
                    <div>
                      <Label className="text-sm font-medium mb-3 block">Teaching Methods</Label>
                      <div className="space-y-2">
                        {[
                          { id: "home", label: "Home Tutoring", icon: Home },
                          { id: "online", label: "Online Classes", icon: Video },
                          { id: "group", label: "Group Sessions", icon: Users },
                        ].map((method) => (
                          <div key={method.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={method.id}
                              checked={teachingMethods.includes(method.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setTeachingMethods([...teachingMethods, method.id])
                                } else {
                                  setTeachingMethods(teachingMethods.filter((m) => m !== method.id))
                                }
                              }}
                            />
                            <method.icon className="w-4 h-4 text-muted-foreground" />
                            <Label htmlFor={method.id} className="text-sm">
                              {method.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Urgency */}
                    <div>
                      <Label className="text-sm font-medium mb-3 block">Urgency</Label>
                      <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All">All</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => {
                        setSelectedSubjects([])
                        setSelectedLocation("All Locations")
                        setTeachingMethods([])
                        setUrgencyFilter("All")
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Job Results */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center justify-between"
            >
              <p className="text-muted-foreground">{filteredJobs.length} jobs found</p>
            </motion.div>

            <div className="space-y-6">
              <AnimatePresence>
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="flex-1 space-y-3">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-lg font-serif font-semibold text-card-foreground mb-2">
                                  {job.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  <Badge variant="secondary">{job.subject}</Badge>
                                  <Badge variant="outline">{job.grade}</Badge>
                                  {job.urgency === "urgent" && (
                                    <Badge className="bg-destructive text-destructive-foreground">Urgent</Badge>
                                  )}
                                </div>
                              </div>
                              <Button variant="ghost" size="sm" className="p-2">
                                <Heart className="w-4 h-4" />
                              </Button>
                            </div>

                            <p className="text-muted-foreground line-clamp-2">{job.description}</p>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {job.budget}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.sessions}, {job.sessionDuration}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {job.duration}
                              </div>
                            </div>

                            <div className="flex gap-2">
                              {job.methods.map((method) => (
                                <Badge key={method} variant="outline" className="text-xs flex items-center gap-1">
                                  {method === "home" && <Home className="w-3 h-3" />}
                                  {method === "online" && <Video className="w-3 h-3" />}
                                  {method === "group" && <Users className="w-3 h-3" />}
                                  {method}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center justify-between pt-2">
                              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                <span>Posted {job.postedDate}</span>
                                <span>•</span>
                                <span>{job.applications} applications</span>
                              </div>

                              <div className="flex gap-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" size="sm">
                                      <Eye className="w-4 h-4 mr-2" />
                                      View Details
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-2xl">
                                    <DialogHeader>
                                      <DialogTitle className="text-xl font-serif font-bold">{job.title}</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary">{job.subject}</Badge>
                                        <Badge variant="outline">{job.grade}</Badge>
                                        <Badge variant="outline">{job.location}</Badge>
                                      </div>

                                      <div>
                                        <h4 className="font-medium mb-2">Description</h4>
                                        <p className="text-muted-foreground">{job.description}</p>
                                      </div>

                                      <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                          <h4 className="font-medium mb-2">Budget</h4>
                                          <p className="text-muted-foreground">{job.budget}</p>
                                        </div>
                                        <div>
                                          <h4 className="font-medium mb-2">Schedule</h4>
                                          <p className="text-muted-foreground">
                                            {job.sessions}, {job.sessionDuration} each
                                          </p>
                                        </div>
                                      </div>

                                      <div>
                                        <h4 className="font-medium mb-2">Student Information</h4>
                                        <div className="flex items-center space-x-3">
                                          <Avatar className="w-10 h-10">
                                            <AvatarImage src={job.student.avatar || "/placeholder.svg"} />
                                            <AvatarFallback>
                                              {job.student.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div>
                                            <p className="font-medium">{job.student.name}</p>
                                            <p className="text-sm text-muted-foreground">{job.student.grade}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>

                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button className="bg-primary hover:bg-primary/90" size="sm">
                                      <Send className="w-4 h-4 mr-2" />
                                      Apply Now
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Apply for this Job</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <div>
                                        <h4 className="font-medium mb-2">{job.title}</h4>
                                        <p className="text-sm text-muted-foreground">
                                          {job.subject} • {job.grade}
                                        </p>
                                      </div>

                                      <div className="space-y-2">
                                        <Label htmlFor="application-message">Cover Message</Label>
                                        <Textarea
                                          id="application-message"
                                          placeholder="Introduce yourself and explain why you're the perfect tutor for this job..."
                                          value={applicationMessage}
                                          onChange={(e) => setApplicationMessage(e.target.value)}
                                          rows={4}
                                        />
                                      </div>

                                      <div className="flex gap-3">
                                        <Button variant="outline" className="flex-1 bg-transparent">
                                          Cancel
                                        </Button>
                                        <Button
                                          className="flex-1 bg-primary hover:bg-primary/90"
                                          onClick={() => handleApply(job.id)}
                                        >
                                          Send Application
                                        </Button>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredJobs.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">No jobs found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
