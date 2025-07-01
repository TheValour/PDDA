import React, { useState, useEffect } from 'react';
import { Ship } from 'lucide-react';
import axios from 'axios';
const API = import.meta.env.VITE_API_BASE_URL;

export const VesselDetails = ({ vesselDetails, onChange }) => {
  const [vesselTypes, setVesselTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVesselTypes = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API}/vessel-types`);
        setVesselTypes(response.data.data);
      } catch (error) {
        console.error('Error fetching vessel types:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchVesselTypes();
  }, []);

  const handleInputChange = (field, value) => {
    onChange({
      ...vesselDetails,
      [field]: value,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <Ship className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold text-slate-800">Vessel Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Vessel Name
          </label>
          <input
            type="text"
            value={vesselDetails.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg"
            placeholder="Enter vessel name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Vessel Type
          </label>
          <select
            value={vesselDetails.vesselType}
            onChange={(e) => handleInputChange('vesselType', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg"
            disabled={loading}
          >
            <option value="">{loading ? 'Loading...' : 'Select vessel type'}</option>
            {vesselTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Gross Tonnage (GT)
          </label>
          <input
            type="number"
            value={vesselDetails.grossTonnage || ''}
            onChange={(e) => handleInputChange('grossTonnage', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg"
            placeholder="0"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Deadweight Tonnage (DWT)
          </label>
          <input
            type="number"
            value={vesselDetails.deadweightTonnage || ''}
            onChange={(e) => handleInputChange('deadweightTonnage', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg"
            placeholder="0"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Length Overall (LOA) - meters
          </label>
          <input
            type="number"
            value={vesselDetails.lengthOverall || ''}
            onChange={(e) => handleInputChange('lengthOverall', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg"
            placeholder="0"
            min="0"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Beam - meters
          </label>
          <input
            type="number"
            value={vesselDetails.beam || ''}
            onChange={(e) => handleInputChange('beam', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg"
            placeholder="0"
            min="0"
            step="0.1"
          />
        </div>
      </div>
    </div>
  );
};