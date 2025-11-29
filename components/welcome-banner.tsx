"use client"

import { BookOpen } from "lucide-react"

export default function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-accent to-primary/80 p-8 md:p-12 text-primary-foreground shadow-lg">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36 blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-semibold opacity-90">Welcome back!</p>
            <h1 className="text-3xl md:text-4xl font-bold">John Doe</h1>
          </div>
        </div>

        <p className="text-lg opacity-90 max-w-2xl leading-relaxed">
          You have <span className="font-semibold">3 pending assignments</span> due this week. Keep up the great work
          and stay organized!
        </p>

        <div className="mt-6 flex gap-3">
          <button className="px-6 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg font-semibold transition-all">
            View All Assignments
          </button>
        </div>
      </div>
    </div>
  )
}
