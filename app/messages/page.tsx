"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Search,
  Send,
  Paperclip,
  Phone,
  Video,
  MoreVertical,
  Smile,
  FileText,
  Download,
  Check,
  CheckCheck,
  GraduationCap,
  ArrowLeft,
  Star,
  Calendar,
  MapPin,
} from "lucide-react"

const mockConversations = [
  {
    id: 1,
    name: "Rashida Khatun",
    role: "Mathematics Tutor",
    avatar: "/bangladeshi-female-teacher.png",
    lastMessage: "Great progress in today's algebra session! Keep practicing the problems I shared.",
    lastMessageTime: "2:30 PM",
    unreadCount: 0,
    online: true,
    verified: true,
    rating: 4.9,
    subject: "Mathematics",
  },
  {
    id: 2,
    name: "Mohammad Rahman",
    role: "Chemistry Tutor",
    avatar: "/bangladeshi-male-teacher.png",
    lastMessage: "Don't forget to review the organic chemistry notes before our next class.",
    lastMessageTime: "Yesterday",
    unreadCount: 2,
    online: false,
    verified: true,
    rating: 4.8,
    subject: "Chemistry",
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    role: "Programming Tutor",
    avatar: "/bangladeshi-male-programmer-teacher.png",
    lastMessage: "I've uploaded the JavaScript exercises to our shared folder.",
    lastMessageTime: "2 days ago",
    unreadCount: 0,
    online: true,
    verified: true,
    rating: 4.9,
    subject: "Programming",
  },
  {
    id: 4,
    name: "Fatima Begum",
    role: "English Tutor",
    avatar: "/bangladeshi-female-english-teacher.png",
    lastMessage: "Your essay writing has improved significantly. Well done!",
    lastMessageTime: "3 days ago",
    unreadCount: 1,
    online: false,
    verified: true,
    rating: 4.7,
    subject: "English",
  },
]

const mockMessages = [
  {
    id: 1,
    senderId: 1,
    senderName: "Rashida Khatun",
    message: "Hello! I'm excited to start our mathematics sessions. How are you feeling about algebra?",
    timestamp: "10:00 AM",
    status: "read",
    type: "text",
  },
  {
    id: 2,
    senderId: "me",
    senderName: "You",
    message: "Hi! I'm a bit nervous but excited to learn. I've been struggling with quadratic equations.",
    timestamp: "10:05 AM",
    status: "read",
    type: "text",
  },
  {
    id: 3,
    senderId: 1,
    senderName: "Rashida Khatun",
    message:
      "That's completely normal! Quadratic equations can be tricky at first. Let me share some practice problems.",
    timestamp: "10:07 AM",
    status: "read",
    type: "text",
  },
  {
    id: 4,
    senderId: 1,
    senderName: "Rashida Khatun",
    message: "",
    timestamp: "10:08 AM",
    status: "read",
    type: "file",
    fileName: "Quadratic_Equations_Practice.pdf",
    fileSize: "2.3 MB",
  },
  {
    id: 5,
    senderId: "me",
    senderName: "You",
    message: "Thank you! I'll work through these before our next session.",
    timestamp: "10:15 AM",
    status: "read",
    type: "text",
  },
  {
    id: 6,
    senderId: 1,
    senderName: "Rashida Khatun",
    message: "Perfect! Don't hesitate to ask if you get stuck on any problem. I'm here to help.",
    timestamp: "10:16 AM",
    status: "read",
    type: "text",
  },
  {
    id: 7,
    senderId: "me",
    senderName: "You",
    message: "I have a question about problem #3. Could we discuss it in our next session?",
    timestamp: "2:25 PM",
    status: "delivered",
    type: "text",
  },
  {
    id: 8,
    senderId: 1,
    senderName: "Rashida Khatun",
    message: "Great progress in today's algebra session! Keep practicing the problems I shared.",
    timestamp: "2:30 PM",
    status: "sent",
    type: "text",
  },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0])
  const [messages, setMessages] = useState(mockMessages)
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const isMobile = useIsMobile()
  const [showMobileChat, setShowMobileChat] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        senderId: "me",
        senderName: "You",
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        status: "sent" as const,
        type: "text" as const,
      }
      setMessages([...messages, message])
      setNewMessage("")

      // Simulate typing indicator and response
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        const response = {
          id: messages.length + 2,
          senderId: selectedConversation.id,
          senderName: selectedConversation.name,
          message: "Thanks for your message! I'll get back to you soon.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          status: "sent" as const,
          type: "text" as const,
        }
        setMessages((prev) => [...prev, response])
      }, 2000)
    }
  }

  const filteredConversations = mockConversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.subject.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="h-screen bg-background flex flex-col">
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
              <Button variant="ghost" className="hidden sm:inline-flex">
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="flex-1 flex overflow-hidden">
        {/* Conversations Sidebar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`w-full sm:w-80 bg-card border-r border-border flex flex-col ${
            isMobile && showMobileChat ? "hidden" : "flex"
          } ${!isMobile ? "sm:flex" : ""}`}
        >
          {/* Search */}
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search conversations..."
                className="pl-10 bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Conversations List */}
          <ScrollArea className="flex-1">
            <div className="p-2">
              <AnimatePresence>
                {filteredConversations.map((conversation, index) => (
                  <motion.div
                    key={conversation.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      className={`mb-2 cursor-pointer transition-all duration-200 ${
                        selectedConversation.id === conversation.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                      }`}
                      onClick={() => {
                        setSelectedConversation(conversation)
                        if (isMobile) {
                          setShowMobileChat(true)
                        }
                      }}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {conversation.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            {conversation.online && (
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                            )}
                            {conversation.verified && (
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                                <GraduationCap className="w-2 h-2 text-accent-foreground" />
                              </div>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium text-card-foreground truncate">{conversation.name}</h4>
                              <span className="text-xs text-muted-foreground">{conversation.lastMessageTime}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-muted-foreground truncate flex-1">
                                {conversation.lastMessage}
                              </p>
                              {conversation.unreadCount > 0 && (
                                <Badge className="ml-2 bg-primary text-primary-foreground text-xs">
                                  {conversation.unreadCount}
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {conversation.subject}
                              </Badge>
                              <div className="flex items-center space-x-1">
                                <Star className="w-3 h-3 fill-primary text-primary" />
                                <span className="text-xs text-muted-foreground">{conversation.rating}</span>
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
          </ScrollArea>
        </motion.div>

        {/* Chat Area */}
        <div
          className={`flex-1 flex flex-col ${isMobile ? (showMobileChat ? "flex" : "hidden") : "flex"} ${
            !selectedConversation ? "items-center justify-center" : ""
          }`}
        >
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="p-4 border-b border-border bg-card"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {isMobile && (
                      <Button variant="ghost" size="sm" onClick={() => setShowMobileChat(false)}>
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                    )}
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={selectedConversation.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {selectedConversation.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {selectedConversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-card-foreground">{selectedConversation.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedConversation.online ? "Online" : "Last seen 2 hours ago"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-56">
                        <div className="space-y-2">
                          {isMobile && (
                            <>
                              <Button variant="ghost" className="w-full justify-start" size="sm">
                                <Phone className="w-4 h-4 mr-2" />
                                Voice Call
                              </Button>
                              <Button variant="ghost" className="w-full justify-start" size="sm">
                                <Video className="w-4 h-4 mr-2" />
                                Video Call
                              </Button>
                            </>
                          )}
                          <Button variant="ghost" className="w-full justify-start" size="sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            Schedule Session
                          </Button>
                          <Button variant="ghost" className="w-full justify-start" size="sm">
                            <MapPin className="w-4 h-4 mr-2" />
                            View Profile
                          </Button>
                          <Button variant="ghost" className="w-full justify-start" size="sm">
                            <Star className="w-4 h-4 mr-2" />
                            Rate Tutor
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </motion.div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  <AnimatePresence>
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`flex ${message.senderId === "me" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-xs sm:max-w-sm lg:max-w-md ${
                            message.senderId === "me"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          } rounded-lg p-3 shadow-sm`}
                        >
                          {message.type === "text" ? (
                            <p className="text-sm">{message.message}</p>
                          ) : (
                            <div className="flex items-center space-x-2">
                              <FileText className="w-4 h-4" />
                              <div className="flex-1">
                                <p className="text-sm font-medium">{message.fileName}</p>
                                <p className="text-xs opacity-70">{message.fileSize}</p>
                              </div>
                              <Button variant="ghost" size="sm" className="p-1">
                                <Download className="w-3 h-3" />
                              </Button>
                            </div>
                          )}
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs opacity-70">{message.timestamp}</span>
                            {message.senderId === "me" && (
                              <div className="flex items-center space-x-1">
                                {message.status === "sent" && <Check className="w-3 h-3 opacity-70" />}
                                {message.status === "delivered" && <CheckCheck className="w-3 h-3 opacity-70" />}
                                {message.status === "read" && <CheckCheck className="w-3 h-3 text-accent" />}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator */}
                  <AnimatePresence>
                    {isTyping && (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-muted text-muted-foreground rounded-lg p-3 shadow-sm">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-current rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-current rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Message Input */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-4 border-t border-border bg-card"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="pr-10 bg-background"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 hidden sm:inline-flex"
                    >
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  {isMobile && (
                    <Button variant="ghost" size="sm">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                  )}
                  <Button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center p-8"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">Welcome to Messages</h3>
              <p className="text-muted-foreground">
                Select a conversation to start chatting with your tutors or students
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
