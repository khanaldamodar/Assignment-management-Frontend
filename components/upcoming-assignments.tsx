"use client"

import { Clock, AlertCircle, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const assignments = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    course: "CS 101",
    dueDate: "Nov 30, 2025",
    status: "pending",
    progress: 45,
    priority: "high",
  },
  {
    id: 2,
    title: "Mathematical Analysis Essay",
    course: "MATH 201",
    dueDate: "Dec 3, 2025",
    status: "pending",
    progress: 20,
    priority: "medium",
  },
  {
    id: 3,
    title: "Physics Lab Report",
    course: "PHYS 301",
    dueDate: "Dec 5, 2025",
    status: "completed",
    progress: 100,
    priority: "low",
  },
  {
    id: 4,
    title: "History Research Project",
    course: "HIST 101",
    dueDate: "Dec 7, 2025",
    status: "pending",
    progress: 60,
    priority: "medium",
  },
]

const getStatusIcon = (status: string) => {
  if (status === "completed") return <CheckCircle2 className="w-5 h-5 text-green-500" />
  if (status === "pending") return <Clock className="w-5 h-5 text-amber-500" />
  return <AlertCircle className="w-5 h-5 text-red-500" />
}

const getPriorityColor = (priority: string) => {
  if (priority === "high") return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
  if (priority === "medium") return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
  return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
}

export default function UpcomingAssignments() {
  return (
    <Card className="shadow-md">
      <CardHeader className="border-b border-border pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Upcoming Assignments</CardTitle>
            <CardDescription>Track your assignment deadlines</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className="group relative rounded-lg border border-border p-4 hover:border-primary/50 hover:bg-card transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getStatusIcon(assignment.status)}
                    <h3 className="font-semibold text-foreground">{assignment.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{assignment.course}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                        style={{ width: `${assignment.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">{assignment.progress}%</span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                  <Badge className="text-xs">
  {assignment.dueDate}
</Badge>
<Badge className={`text-xs ${getPriorityColor(assignment.priority)}`}>
  {assignment.priority}
</Badge>
</div>
                </div>

                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Open
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
