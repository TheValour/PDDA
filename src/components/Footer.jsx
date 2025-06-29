import React from 'react'
import { Flag } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Flag className="w-6 h-6 text-orange-400" />
              <h3 className="text-xl font-bold">Indian Maritime PDA Calculator</h3>
            </div>
            <p className="text-slate-300">
              Professional port dues assessment for Indian maritime operations
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Compliant with Indian maritime regulations and port tariffs • Built for Indian shipping industry
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400">
              <span>Covers all major Indian ports</span>
              <span>•</span>
              <span>GST compliant calculations</span>
              <span>•</span>
              <span>Real-time tariff updates</span>
            </div>
          </div>
        </div>
      </footer>
  )
}
