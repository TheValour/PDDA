import React, { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import axios from 'axios';

export const StayDetails = ({ stayDetails, onChange }) => {
  const [berthTypes, setBerthTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBerthTypes = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/berth-types');
        setBerthTypes(response.data.data);
      } catch (error) {
        console.error('Error fetching berth types:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBerthTypes();
  }, []);

  const handleInputChange = (field, value) => {
    onChange({
      ...stayDetails,
      [field]: value,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-6 h-6 text-purple-600" />
        <h2 className="text-xl font-bold text-slate-800">Stay Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Arrival Date
          </label>
          <input
            type="datetime-local"
            value={stayDetails.arrivalDate}
            onChange={(e) => handleInputChange('arrivalDate', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg "
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Departure Date
          </label>
          <input
            type="datetime-local"
            value={stayDetails.departureDate}
            onChange={(e) => handleInputChange('departureDate', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg "
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            <MapPin className="inline w-4 h-4 mr-1" />
            Berth Type
          </label>
          <select
            value={stayDetails.berthType}
            onChange={(e) => handleInputChange('berthType', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg "
            disabled={loading}
          >
            <option value="">{loading ? 'Loading...' : 'Select berth type'}</option>
            {berthTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Anchorage Required
          </label>
          <div className="flex items-center gap-4 mt-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="anchorage"
                checked={!stayDetails.anchorage}
                onChange={() => handleInputChange('anchorage', false)}
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm font-medium text-slate-700">No</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="anchorage"
                checked={stayDetails.anchorage}
                onChange={() => handleInputChange('anchorage', true)}
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm font-medium text-slate-700">Yes</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};