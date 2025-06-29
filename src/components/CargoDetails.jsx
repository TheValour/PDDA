import React from 'react';
import { Package, AlertTriangle } from 'lucide-react';
import { cargoTypes } from '../data/ports';

export const CargoDetails = ({ cargoDetails, onChange }) => {
  const handleInputChange = (field, value) => {
    onChange({
      ...cargoDetails,
      [field]: value,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <Package className="w-6 h-6 text-teal-600" />
        <h2 className="text-xl font-bold text-slate-800">Cargo Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Cargo Type
          </label>
          <select
            value={cargoDetails.type}
            onChange={(e) => handleInputChange('type', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
          >
            <option value="">Select cargo type</option>
            {cargoTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Unit
          </label>
          <select
            value={cargoDetails.unit}
            onChange={(e) => handleInputChange('unit', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
          >
            <option value="">Select unit</option>
            <option value="tons">Metric Tons</option>
            <option value="teu">TEU</option>
            <option value="m3">Cubic Meters</option>
            <option value="units">Units</option>
            <option value="passengers">Passengers</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Quantity
          </label>
          <input
            type="number"
            value={cargoDetails.quantity || ''}
            onChange={(e) => handleInputChange('quantity', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            placeholder="0"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            <AlertTriangle className="inline w-4 h-4 mr-1" />
            Hazardous Cargo
          </label>
          <div className="flex items-center gap-4 mt-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="hazardous"
                checked={!cargoDetails.hazardous}
                onChange={() => handleInputChange('hazardous', false)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-sm font-medium text-slate-700">No</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="hazardous"
                checked={cargoDetails.hazardous}
                onChange={() => handleInputChange('hazardous', true)}
                className="w-4 h-4 text-red-600 focus:ring-red-500"
              />
              <span className="text-sm font-medium text-slate-700">Yes</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};