"use client"

import { useState } from "react"
import Sidebar from "./sidebar"
import TopBar from "./top-bar"
import UpcomingAssignments from "./upcoming-assignments"
import RecentGrades from "./recent-grades"
import Notifications from "./notifications"
import WelcomeBanner from "./welcome-banner"

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-1 flex flex-col">
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <WelcomeBanner />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <UpcomingAssignments />
                <RecentGrades />
              </div>
              <div>
                <Notifications />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
