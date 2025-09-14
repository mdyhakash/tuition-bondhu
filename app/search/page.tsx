"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import {
  Search,
  MapPin,
  Star,
  Clock,
  BookOpen,
  X,
  Heart,
  MessageCircle,
  GraduationCap,
  Home,
  Video,
  Users,
  SlidersHorizontal,
} from "lucide-react"

// Mock tutor data
const mockTutors = [
  {
    id: 1,
    name: "Rashida Khatun",
    subjects: ["Mathematics", "Physics"],
    location: "Dhanmondi, Dhaka",
    rating: 4.9,
    reviews: 127,
    experience: "5 years",
    price: "৳800-1200/hour",
    image: "/bangladeshi-female-teacher.png",
    verified: true,
    online: true,
    home: true,
    group: false,
    availability: "Available",
    education: "MSc in Mathematics, DU",
    languages: ["Bengali", "English"],
  },
  {
    id: 2,
    name: "Mohammad Rahman",
    subjects: ["Chemistry", "Biology"],
    location: "Gulshan, Dhaka",
    rating: 4.8,
    reviews: 89,
    experience: "7 years",
    price: "৳1000-1500/hour",
    image: "/bangladeshi-male-teacher.png",
    verified: true,
    online: true,
    home: true,
    group: true,
    availability: "Available",
    education: "PhD in Chemistry, BUET",
    languages: ["Bengali", "English"],
  },
  {
    id: 3,
    name: "Fatima Begum",
    subjects: ["English", "Literature"],
    location: "Uttara, Dhaka",
    rating: 4.7,
    reviews: 156,
    experience: "4 years",
    price: "৳600-900/hour",
    image: "/bangladeshi-female-english-teacher.png",
    verified: true,
    online: true,
    home: false,
    group: true,
    availability: "Busy until Dec 15",
    education: "MA in English, JU",
    languages: ["Bengali", "English"],
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    subjects: ["Computer Science", "Programming"],
    location: "Mirpur, Dhaka",
    rating: 4.9,
    reviews: 203,
    experience: "6 years",
    price: "৳1200-1800/hour",
    image: "/bangladeshi-male-programmer-teacher.png",
    verified: true,
    online: true,
    home: true,
    group: false,
    availability: "Available",
    education: "BSc in CSE, BUET",
    languages: ["Bengali", "English"],
  },
  {
    id: 5,
    name: "Nasreen Akter",
    subjects: ["Economics", "Business Studies"],
    location: "Wari, Dhaka",
    rating: 4.6,
    reviews: 78,
    experience: "3 years",
    price: "৳700-1000/hour",
    image: "/bangladeshi-female-business-teacher.png",
    verified: true,
    online: false,
    home: true,
    group: true,
    availability: "Available",
    education: "MBA, IBA-DU",
    languages: ["Bengali", "English"],
  },
  {
    id: 6,
    name: "Karim Uddin",
    subjects: ["History", "Social Studies"],
    location: "Old Dhaka",
    rating: 4.5,
    reviews: 92,
    experience: "8 years",
    price: "৳500-800/hour",
    image: "/bangladeshi-male-history-teacher.png",
    verified: true,
    online: true,
    home: true,
    group: true,
    availability: "Available",
    education: "MA in History, CU",
    languages: ["Bengali", "English", "Urdu"],
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

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [selectedLocation, setSelectedLocation] = useState("")
  const [priceRange, setPriceRange] = useState([500, 2000])
  const [teachingMethods, setTeachingMethods] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])
  const [sortBy, setSortBy] = useState("rating")

  const toggleFavorite = (tutorId: number) => {
    setFavorites((prev) => (prev.includes(tutorId) ? prev.filter((id) => id !== tutorId) : [...prev, tutorId]))
  }

  const filteredTutors = mockTutors.filter((tutor) => {
    const matchesSearch =
      searchQuery === "" ||
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subjects.some((subject) => subject.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesSubjects =
      selectedSubjects.length === 0 || selectedSubjects.some((subject) => tutor.subjects.includes(subject))

    const matchesLocation = selectedLocation === "" || tutor.location === selectedLocation

    const price = Number.parseInt(tutor.price.split("-")[0].replace("৳", ""))
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1]

    const matchesMethods =
      teachingMethods.length === 0 ||
      (teachingMethods.includes("online") && tutor.online) ||
      (teachingMethods.includes("home") && tutor.home) ||
      (teachingMethods.includes("group") && tutor.group)

    const matchesRating = tutor.rating >= minRating

    return matchesSearch && matchesSubjects && matchesLocation && matchesPrice && matchesMethods && matchesRating
  })

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
              <Link href="/login">
                <Button variant="ghost" className="hidden sm:inline-flex">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
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
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Find Your Perfect Tutor</h1>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by name, subject, or location..."
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

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-12 w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="experience">Most Experienced</SelectItem>
                </SelectContent>
              </Select>
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
                          <SelectItem value="all">All Locations</SelectItem>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Price Range */}
                    <div>
                      <Label className="text-sm font-medium mb-3 block">
                        Price Range: ৳{priceRange[0]} - ৳{priceRange[1]}/hour
                      </Label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={2000}
                        min={300}
                        step={100}
                        className="w-full"
                      />
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

                    {/* Minimum Rating */}
                    <div>
                      <Label className="text-sm font-medium mb-3 block">Minimum Rating</Label>
                      <div className="flex gap-2">
                        {[0, 3, 4, 4.5].map((rating) => (
                          <Button
                            key={rating}
                            variant={minRating === rating ? "default" : "outline"}
                            size="sm"
                            onClick={() => setMinRating(rating)}
                            className="flex items-center gap-1"
                          >
                            <Star className="w-3 h-3" />
                            {rating === 0 ? "Any" : rating}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => {
                        setSelectedSubjects([])
                        setSelectedLocation("")
                        setPriceRange([500, 2000])
                        setTeachingMethods([])
                        setMinRating(0)
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center justify-between"
            >
              <p className="text-muted-foreground">{filteredTutors.length} tutors found</p>
            </motion.div>

            <div className="grid gap-6">
              <AnimatePresence>
                {filteredTutors.map((tutor, index) => (
                  <motion.div
                    key={tutor.id}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          {/* Avatar */}
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <img
                                src={tutor.image || "/placeholder.svg"}
                                alt={tutor.name}
                                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                              />
                              {tutor.verified && (
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                  <GraduationCap className="w-3 h-3 text-primary-foreground" />
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 space-y-3">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                              <div>
                                <h3 className="text-lg font-serif font-semibold text-card-foreground">{tutor.name}</h3>
                                <p className="text-sm text-muted-foreground">{tutor.education}</p>
                              </div>

                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => toggleFavorite(tutor.id)}
                                  className="p-2"
                                >
                                  <Heart
                                    className={`w-4 h-4 ${
                                      favorites.includes(tutor.id)
                                        ? "fill-red-500 text-red-500"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                </Button>
                                <div className="text-right">
                                  <p className="text-lg font-semibold text-primary">{tutor.price}</p>
                                  <p className="text-xs text-muted-foreground">{tutor.experience} exp</p>
                                </div>
                              </div>
                            </div>

                            {/* Subjects */}
                            <div className="flex flex-wrap gap-2">
                              {tutor.subjects.map((subject) => (
                                <Badge key={subject} variant="secondary" className="text-xs">
                                  {subject}
                                </Badge>
                              ))}
                            </div>

                            {/* Details */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {tutor.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-primary text-primary" />
                                {tutor.rating} ({tutor.reviews} reviews)
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {tutor.availability}
                              </div>
                            </div>

                            {/* Teaching Methods */}
                            <div className="flex gap-2">
                              {tutor.home && (
                                <Badge variant="outline" className="text-xs flex items-center gap-1">
                                  <Home className="w-3 h-3" />
                                  Home
                                </Badge>
                              )}
                              {tutor.online && (
                                <Badge variant="outline" className="text-xs flex items-center gap-1">
                                  <Video className="w-3 h-3" />
                                  Online
                                </Badge>
                              )}
                              {tutor.group && (
                                <Badge variant="outline" className="text-xs flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  Group
                                </Badge>
                              )}
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-2 pt-2">
                              <Link href={`/tutor/${tutor.id}`} className="flex-1">
                                <Button className="w-full bg-primary hover:bg-primary/90">View Profile</Button>
                              </Link>
                              <Link href={`/messages?tutor=${tutor.id}`} className="flex-1">
                                <Button
                                  variant="outline"
                                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                                >
                                  <MessageCircle className="w-4 h-4 mr-2" />
                                  Message
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredTutors.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">No tutors found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
