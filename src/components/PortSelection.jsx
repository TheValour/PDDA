import React from 'react';
import { ports } from '../data/ports';
import { MapPin } from 'lucide-react';

export const PortSelection = ({ selectedPortId, onChange }) => {
  const selectedPort = ports.find(p => p.id === selectedPortId);

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border-b border-slate-200">
      <h2 className="text-lg font-bold mb-4">Port Selection</h2>

      <div>
        <label className="block text-sm mb-2">
          <MapPin className="inline-block mr-2 text-blue-500" />
          Select Indian Port
        </label>
        <select
          value={selectedPortId}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a port</option>
          {ports.map((port) => (
            <option key={port.id} value={port.id}>
              {port.name}
            </option>
          ))}
        </select>
      </div>

      {selectedPort && (
        <div className="mt-4 p-3 bg-yellow-50 rounded border border-slate-200">
          <h3 className="font-medium mb-2">Port Information</h3>
          <p><strong>Name:</strong> {selectedPort.name}</p>
          <p><strong>Location:</strong> {selectedPort.country}</p>
        </div>
      )}
    </div>
  );
};