"use client"
import { BookOpen, FileText, Library } from "lucide-react"
import LoginForm from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Academic Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BookOpen className="absolute top-10 left-12 w-20 h-20 text-blue-200 opacity-20 rotate-12" />
        <Library className="absolute top-1/4 right-20 w-24 h-24 text-purple-200 opacity-15 -rotate-45" />
        <FileText className="absolute bottom-32 left-1/4 w-16 h-16 text-slate-200 opacity-20 rotate-20" />
        <BookOpen className="absolute bottom-20 right-1/3 w-20 h-20 text-blue-200 opacity-15 -rotate-12" />
        <Library className="absolute top-1/2 left-1/3 w-28 h-28 text-purple-100 opacity-10 rotate-45" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-md">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-4 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Assignment Management</h1>
            <p className="text-sm text-slate-600">System</p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-95">
            <h2 className="text-2xl font-semibold text-slate-900 mb-1">Welcome Back</h2>
            <p className="text-slate-600 mb-8 text-sm">Sign in to your account to continue</p>

            <LoginForm />
          </div>

          {/* Footer Text */}
          <p className="text-center text-xs text-slate-500 mt-6">Protected by advanced security measures</p>
        </div>
      </div>
    </div>
  )
}
