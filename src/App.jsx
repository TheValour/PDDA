import React, { useState } from 'react';
import { ports } from './data/ports';
import { VesselDetails } from './components/VesselDetails';
import { CargoDetails } from './components/CargoDetails';
import { PortServices } from './components/PortServices';
import { StayDetails } from './components/StayDetails';
import { PortSelection } from './components/PortSelection';
import { PDAResults } from './components/PDAResults';
import { CalculateButton } from './components/CalculateButton';
import { usePDACalculation } from './hooks/usePDACalculation';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [selectedPortId, setSelectedPortId] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [vesselDetails, setVesselDetails] = useState({
    name: '',
    imo: '',
    flag: '',
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
    unit: '',
    hazardous: false,
  });

  const [portServices, setPortServices] = useState({
    pilotage: true,
    towage: false,
    linesmen: true,
    freshWater: 0,
    bunkering: false,
    wasteDisposal: false,
    security: true,
  });

  const [stayDetails, setStayDetails] = useState({
    arrivalDate: '',
    departureDate: '',
    berthType: '',
    anchorage: false,
  });

  const selectedPort = ports.find(p => p.id === selectedPortId) || null;
  
  const calculation = usePDACalculation({
    vesselDetails,
    cargoDetails,
    portServices,
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
      imo: '',
      flag: '',
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
      unit: '',
      hazardous: false,
    });
    setPortServices({
      pilotage: true,
      towage: false,
      linesmen: true,
      freshWater: 0,
      bunkering: false,
      wasteDisposal: false,
      security: true,
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
            
            <PortServices
              portServices={portServices}
              onChange={setPortServices}
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