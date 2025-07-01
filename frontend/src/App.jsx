import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VesselDetails } from './components/VesselDetails';
import { CargoDetails } from './components/CargoDetails';
import { StayDetails } from './components/StayDetails';
import { PortSelection } from './components/PortSelection';
import { PDAResults } from './components/PDAResults';
import { CalculateButton } from './components/CalculateButton';
import { usePDACalculation } from './hooks/usePDACalculation';
import Footer from './components/Footer';
import Header from './components/Header';
const API = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [selectedPortId, setSelectedPortId] = useState('');
  const [selectedPort, setSelectedPort] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [vesselDetails, setVesselDetails] = useState({
    name: '',
    vesselType: '',
    grossTonnage: 0,
    deadweightTonnage: 0,
    lengthOverall: 0,
    beam: 0,
    draft: 0,
  });

  const [cargoDetails, setCargoDetails] = useState({
    type: '',
    quantity: 0,
  });

  const [stayDetails, setStayDetails] = useState({
    arrivalDate: '',
    departureDate: '',
    berthType: '',
    anchorage: false,
  });

  // Fetch selected port details when port ID changes
  useEffect(() => {
    const fetchPortDetails = async () => {
      if (selectedPortId) {
        try {
          const response = await axios.get(`${API}/ports/${selectedPortId}`);
          setSelectedPort(response.data.data);
        } catch (error) {
          console.error('Error fetching port details:', error);
          setSelectedPort(null);
        }
      } else {
        setSelectedPort(null);
      }
    };
    fetchPortDetails();
  }, [selectedPortId]);
  
  const calculation = usePDACalculation({
    vesselDetails,
    cargoDetails,
    stayDetails,
    selectedPort,
  });

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setSelectedPortId('');
    setVesselDetails({
      name: '',
      vesselType: '',
      grossTonnage: 0,
      deadweightTonnage: 0,
      lengthOverall: 0,
      beam: 0,
      draft: 0,
    });
    setCargoDetails({
      type: '',
      quantity: 0,
    });
    
    setStayDetails({
      arrivalDate: '',
      departureDate: '',
      berthType: '',
      anchorage: false,
    });
  };

  // Check if minimum required fields are filled
  const canCalculate = selectedPortId && 
                     vesselDetails.name && 
                     vesselDetails.grossTonnage > 0 && 
                     vesselDetails.lengthOverall > 0 &&
                     stayDetails.arrivalDate &&
                     stayDetails.departureDate;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Header/>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Input Forms */}
          <div className="lg:col-span-2 space-y-8">
            <PortSelection
              selectedPortId={selectedPortId}
              onChange={setSelectedPortId}
            />
            
            <VesselDetails
              vesselDetails={vesselDetails}
              onChange={setVesselDetails}
            />
            
            <CargoDetails
              cargoDetails={cargoDetails}
              onChange={setCargoDetails}
            />
            
            <StayDetails
              stayDetails={stayDetails}
              onChange={setStayDetails}
            />

            {/* Calculate Button */}
            <CalculateButton
              canCalculate={canCalculate}
              onCalculate={handleCalculate}
              onReset={handleReset}
              showResults={showResults}
            />
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <PDAResults
                calculation={showResults ? calculation : null}
                portName={selectedPort?.name || ''}
                vesselName={vesselDetails.name || 'Unnamed Vessel'}
                showResults={showResults}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;