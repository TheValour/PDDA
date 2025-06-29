import React from 'react';
import { MapPin, Globe, Flag } from 'lucide-react';
import { ports } from '../data/ports';

export const PortSelection = ({ selectedPortId, onChange }) => {
  const selectedPort = ports.find(p => p.id === selectedPortId);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <Flag className="w-6 h-6 text-orange-600" />
          <Globe className="w-6 h-6 text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Indian Port Selection</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            <MapPin className="inline w-4 h-4 mr-1" />
            Select Indian Port
          </label>
          <select
            value={selectedPortId}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          >
            <option value="">Select an Indian port</option>
            {ports.map((port) => (
              <option key={port.id} value={port.id}>
                {port.name}
              </option>
            ))}
          </select>
        </div>

        {selectedPort && (
          <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-green-50 rounded-lg border border-orange-200">
            <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
              <Flag className="w-4 h-4 text-orange-600" />
              Selected Indian Port Information
            </h3>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div>
                <span className="text-slate-600 font-medium">Port Name:</span>
                <p className="text-slate-800 font-semibold">{selectedPort.name}</p>
              </div>
              <div className="mt-2">
                <span className="text-slate-600 font-medium">Location:</span>
                <p className="text-slate-800">{selectedPort.country}</p>
              </div>
            </div>
            <div className="mt-3 p-2 bg-blue-50 rounded border border-blue-200">
              <p className="text-xs text-blue-800">
                <strong>Note:</strong> All calculations are based on current Indian maritime regulations and port tariffs.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};