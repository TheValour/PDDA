import React from 'react'
import { Flag } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Flag className="w-5 h-5 text-amber-300" />
          <h3 className="text-lg font-bold">Indian Maritime PDA Calculator</h3>
        </div>
        <p className="text-sm text-gray-400">
          GST compliant calculations for Indian ports
        </p>
      </div>
    </footer>
  )
}
