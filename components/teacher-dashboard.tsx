"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Class {
  id: string
  name: string
  students: number
  avgProgress: number
}

interface Assignment {
  id: string
  title: string
  submitted: number
  pending: number
  deadline: string
}

const SAMPLE_CLASSES: Class[] = [
  { id: "1", name: "Mathematics 101", students: 28, avgProgress: 75 },
  { id: "2", name: "English Literature", students: 32, avgProgress: 82 },
  { id: "3", name: "Science Lab", students: 25, avgProgress: 68 },
]

const SAMPLE_ASSIGNMENTS: Assignment[] = [
  { id: "1", title: "Algebra Problem Set", submitted: 24, pending: 4, deadline: "Dec 5, 2024" },
  { id: "2", title: "Essay on Shakespeare", submitted: 28, pending: 4, deadline: "Dec 8, 2024" },
  { id: "3", title: "Lab Report", submitted: 20, pending: 5, deadline: "Dec 10, 2024" },
]

export function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "classes" | "submissions" | "analytics">("overview")

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-balance">Welcome </h1>
            <p className="text-muted-foreground text-lg">
              Manage your classes, track student progress, and create assignments all in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-b border-border">
        <div className="flex gap-2 flex-wrap">
          {["overview", "classes", "submissions", "analytics"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             
              <Button
                variant="outline"
                className="h-auto py-6 flex flex-col items-center justify-center gap-2 border-primary text-primary hover:bg-primary/10 bg-transparent"
                onClick={() => setActiveTab("submissions")}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>View Submissions</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-6 flex flex-col items-center justify-center gap-2 border-primary text-primary hover:bg-primary/10 bg-transparent"
                onClick={() => setActiveTab("analytics")}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span>Class Analytics</span>
              </Button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-6 space-y-2 border-border">
                <p className="text-sm text-muted-foreground font-medium">Total Classes</p>
                <p className="text-3xl font-bold text-primary">{SAMPLE_CLASSES.length}</p>
              </Card>
              <Card className="p-6 space-y-2 border-border">
                <p className="text-sm text-muted-foreground font-medium">Total Students</p>
                <p className="text-3xl font-bold text-primary">
                  {SAMPLE_CLASSES.reduce((sum, c) => sum + c.students, 0)}
                </p>
              </Card>
              <Card className="p-6 space-y-2 border-border">
                <p className="text-sm text-muted-foreground font-medium">Pending Reviews</p>
                <p className="text-3xl font-bold text-destructive">
                  {SAMPLE_ASSIGNMENTS.reduce((sum, a) => sum + a.pending, 0)}
                </p>
              </Card>
              <Card className="p-6 space-y-2 border-border">
                <p className="text-sm text-muted-foreground font-medium">Avg. Class Progress</p>
                <p className="text-3xl font-bold text-primary">
                  {Math.round(SAMPLE_CLASSES.reduce((sum, c) => sum + c.avgProgress, 0) / SAMPLE_CLASSES.length)}%
                </p>
              </Card>
            </div>

            {/* Classes Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Your Classes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SAMPLE_CLASSES.map((cls) => (
                  <Card
                    key={cls.id}
                    className="p-6 space-y-4 border-border hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{cls.name}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{cls.students} students enrolled</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium">Progress</span>
                        <span className="text-primary font-semibold">{cls.avgProgress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${cls.avgProgress}%` }}
                        />
                      </div>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent" size="sm">
                      View Class
                    </Button>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Assignments */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Recent Assignments</h2>
              <Card className="border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Assignment</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Submitted</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Pending</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Deadline</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SAMPLE_ASSIGNMENTS.map((assignment) => (
                        <tr key={assignment.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                          <td className="px-6 py-4 font-medium text-foreground">{assignment.title}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{assignment.submitted} submitted</td>
                          <td className="px-6 py-4 text-sm">
                            <span className="px-3 py-1 rounded-full bg-destructive/10 text-destructive font-medium">
                              {assignment.pending} pending
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{assignment.deadline}</td>
                          <td className="px-6 py-4">
                            <Button variant="outline" size="sm">
                              Review
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Classes Tab */}
        {activeTab === "classes" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">All Classes</h2>
              <Button className="bg-primary hover:bg-primary/90">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add New Class
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SAMPLE_CLASSES.map((cls) => (
                <Card
                  key={cls.id}
                  className="p-6 space-y-6 border-border hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{cls.name}</h3>
                    <p className="text-muted-foreground">{cls.students} students</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Class Progress</span>
                      <span className="text-lg font-bold text-primary">{cls.avgProgress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div
                        className="bg-primary h-3 rounded-full transition-all"
                        style={{ width: `${cls.avgProgress}%` }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full bg-transparent" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" size="sm">
                      Edit Class
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Submissions Tab */}
        {activeTab === "submissions" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Student Submissions</h2>
            <Card className="border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Student</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Assignment</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Submitted On</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        student: "Emma Johnson",
                        assignment: "Algebra Problem Set",
                        date: "Dec 4, 2024",
                        status: "Pending",
                      },
                      {
                        student: "Liam Smith",
                        assignment: "Essay on Shakespeare",
                        date: "Dec 5, 2024",
                        status: "Graded",
                      },
                      { student: "Sophie Brown", assignment: "Lab Report", date: "Dec 3, 2024", status: "Pending" },
                      {
                        student: "Noah Davis",
                        assignment: "Algebra Problem Set",
                        date: "Dec 5, 2024",
                        status: "Pending",
                      },
                    ].map((item, idx) => (
                      <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground">{item.student}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{item.assignment}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{item.date}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              item.status === "Graded" ? "bg-primary/20 text-primary" : "bg-amber-500/20 text-amber-600"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Button variant="outline" size="sm">
                            {item.status === "Graded" ? "View Grade" : "Grade"}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Class Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-4 border-border">
                <h3 className="text-lg font-semibold">Performance by Class</h3>
                <div className="space-y-3">
                  {SAMPLE_CLASSES.map((cls) => (
                    <div key={cls.id} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium">{cls.name}</span>
                        <span className="text-primary font-semibold">{cls.avgProgress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: `${cls.avgProgress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="p-6 space-y-4 border-border">
                <h3 className="text-lg font-semibold">Assignment Completion</h3>
                <div className="space-y-3">
                  {SAMPLE_ASSIGNMENTS.map((assignment) => {
                    const total = assignment.submitted + assignment.pending
                    const percentage = Math.round((assignment.submitted / total) * 100)
                    return (
                      <div key={assignment.id} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-medium truncate">{assignment.title}</span>
                          <span className="text-primary font-semibold">{percentage}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${percentage}%` }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
