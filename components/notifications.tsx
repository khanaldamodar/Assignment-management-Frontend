"use client"

import { MessageSquare, Bell, AlertCircle, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const notifications = [
  {
    id: 1,
    type: "message",
    title: "New message from Prof. Smith",
    description: "Regarding your recent submission",
    time: "2 hours ago",
    icon: MessageSquare,
  },
  {
    id: 2,
    type: "assignment",
    title: "Assignment grade released",
    description: "CS 101 Assignment 1 has been graded",
    time: "4 hours ago",
    icon: CheckCircle2,
  },
  {
    id: 3,
    type: "deadline",
    title: "Assignment due soon",
    description: "MATH 201 assignment due tomorrow",
    time: "1 day ago",
    icon: AlertCircle,
  },
  {
    id: 4,
    type: "message",
    title: "Class announcements",
    description: "New study materials posted",
    time: "2 days ago",
    icon: Bell,
  },
]

export default function Notifications() {
  return (
    <Card className="shadow-md h-full">
      <CardHeader className="border-b border-border pb-4">
        <CardTitle className="text-lg">Notifications</CardTitle>
        <CardDescription>Stay updated</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon
            return (
              <div
                key={notification.id}
                className="flex gap-3 p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-muted transition-all cursor-pointer group"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{notification.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{notification.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
