"use client"

import { TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const grades = [
  { id: 1, course: "CS 101", assignment: "Assignment 1", score: 92, grade: "A", feedback: "Excellent work!" },
  { id: 2, course: "MATH 201", assignment: "Quiz 2", score: 88, grade: "B+", feedback: "Good job, review chapter 3" },
  { id: 3, course: "PHYS 301", assignment: "Lab Report", score: 95, grade: "A", feedback: "Outstanding analysis!" },
  { id: 4, course: "HIST 101", assignment: "Essay", score: 85, grade: "B", feedback: "Needs more citations" },
]

const getGradeColor = (grade: string) => {
  if (grade.startsWith("A")) return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
  if (grade.startsWith("B")) return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
  if (grade.startsWith("C")) return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
  return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
}

export default function RecentGrades() {
  return (
    <Card className="shadow-md">
      <CardHeader className="border-b border-border pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Recent Grades
            </CardTitle>
            <CardDescription>Your latest assessment scores</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-3">
          {grades.map((grade) => (
            <div
              key={grade.id}
              className="flex items-start justify-between p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-muted transition-all"
            >
              <div className="flex-1">
                <p className="font-semibold text-foreground">{grade.course}</p>
                <p className="text-sm text-muted-foreground mb-2">{grade.assignment}</p>
                <p className="text-xs text-muted-foreground italic">{grade.feedback}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Badge >{grade.grade}</Badge>
                <span className="text-sm font-semibold text-primary">{grade.score}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
