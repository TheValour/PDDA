import React from 'react';
import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const PortSelection = ({ selectedPortId, onChange }) => {
  const [ports, setPorts] = useState([]);
  const [selectedPortDetails, setSelectedPortDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPorts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/api/ports`);
        console.log('API Response:', response.data);
        setPorts(response.data.data); // Note: response.data.data because of API structure
      } catch (error) {
        console.error('Error fetching ports:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPorts();
  }, []);

  useEffect(() => {
    const fetchPortDetails = async () => {
      if (selectedPortId) {
        try {
          const response = await axios.get(`http://localhost:3000/api/ports/${selectedPortId}`);
          console.log('Port details fetched:', response.data);
          setSelectedPortDetails(response.data.data);
        } catch (error) {
          console.error('Error fetching port details:', error);
          setSelectedPortDetails(null);
        }
      } else {
        setSelectedPortDetails(null);
      }
    };
    fetchPortDetails();
  }, [selectedPortId]);

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border-b border-slate-200">
      <h2 className="text-lg font-bold mb-4">Port Selection</h2>

      <div>
        <label className="block text-sm mb-2">
          <MapPin className="inline-block mr-2 text-blue-500" />
          Select Indian Port
        </label>
        {loading ? (
          <p className="text-gray-500">Loading ports...</p>
        ) : (
          <select
            value={selectedPortId}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a port</option>
            {ports.map((port) => (
              <option key={port.code} value={port.code}>
                {port.name} - {port.code}
              </option>
            ))}
          </select>
        )}
      </div>

      {selectedPortDetails && (
        <div className="mt-4 p-3 bg-yellow-50 rounded border border-slate-200">
          <h3 className="font-medium mb-2">Port Information</h3>
          <p><strong>Name:</strong> {selectedPortDetails.name}</p>
          <p><strong>Code:</strong> {selectedPortDetails.code}</p>
          <p><strong>Location:</strong> {selectedPortDetails.country}</p>
        </div>
      )}
    </div>
  );
};