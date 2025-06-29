import React from 'react'
import { Anchor, Flag } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-orange-600 to-green-600 rounded-xl">
                    <Anchor className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold text-slate-900">Indian Maritime PDA Calculator</h1>
                    <Flag className="w-6 h-6 text-orange-600" />
                    </div>
                    <p className="text-slate-600 mt-1">Professional Port Dues Assessment for Indian Ports</p>
                </div>
            </div>
    </header>
  )
}
