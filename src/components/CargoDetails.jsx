import React, { useState, useEffect } from 'react';
import { Package } from 'lucide-react';
import axios from 'axios';

export const CargoDetails = ({ cargoDetails, onChange }) => {
  const [cargoTypes, setCargoTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCargoTypes = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/cargo-types');
        setCargoTypes(response.data.data);
      } catch (error) {
        console.error('Error fetching cargo types:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCargoTypes();
  }, []);

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
            className="w-full px-4 py-3 border border-slate-300 rounded-lg"
            disabled={loading}
          >
            <option value="">{loading ? 'Loading...' : 'Select cargo type'}</option>
            {cargoTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Quantity (Metric Tons)
          </label>
          <input
            type="number"
            value={cargoDetails.quantity || ''}
            onChange={(e) => handleInputChange('quantity', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg"
            placeholder="0"
            min="0"
          />
        </div>
      </div>
    </div>
  );
};