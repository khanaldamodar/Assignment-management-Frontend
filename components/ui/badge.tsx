"use client";

interface BadgeProps {
  children: React.ReactNode;
  color?: string; // optional background color
  className?: string; // optional extra classes
}

export function Badge({ children, color = "bg-blue-600", className = "" }: BadgeProps) {
  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold text-white rounded ${color} ${className}`}>
      {children}
    </span>
  );
}
