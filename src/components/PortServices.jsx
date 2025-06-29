import React from 'react';
import { Settings, Droplets, Fuel, Shield, Users, Trash2 } from 'lucide-react';

export const PortServices = ({ portServices, onChange }) => {
  const handleServiceChange = (field, value) => {
    onChange({
      ...portServices,
      [field]: value,
    });
  };

  const services = [
    { key: 'pilotage', label: 'Pilotage', icon: Users },
    { key: 'towage', label: 'Towage', icon: Settings },
    { key: 'linesmen', label: 'Linesmen', icon: Users },
    { key: 'bunkering', label: 'Bunkering', icon: Fuel },
    { key: 'wasteDisposal', label: 'Waste Disposal', icon: Trash2 },
    { key: 'security', label: 'Security Services', icon: Shield },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-6 h-6 text-orange-600" />
        <h2 className="text-xl font-bold text-slate-800">Port Services</h2>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ key, label, icon: Icon }) => (
            <label key={key} className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={portServices[key]}
                onChange={(e) => handleServiceChange(key, e.target.checked)}
                className="w-4 h-4 text-orange-600 focus:ring-orange-500 rounded"
              />
              <Icon className="w-5 h-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">{label}</span>
            </label>
          ))}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            <Droplets className="inline w-4 h-4 mr-1" />
            Fresh Water Supply (tons)
          </label>
          <input
            type="number"
            value={portServices.freshWater || ''}
            onChange={(e) => handleServiceChange('freshWater', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="0"
            min="0"
            step="0.1"
          />
        </div>
      </div>
    </div>
  );
};