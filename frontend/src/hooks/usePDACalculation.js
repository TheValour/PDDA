import { useMemo } from 'react';

export const usePDACalculation = ({
  vesselDetails,
  cargoDetails,
  stayDetails,
  selectedPort,
}) => {
  return useMemo(() => {
    if (!selectedPort || !vesselDetails.grossTonnage || !vesselDetails.lengthOverall) {
      return null;
    }

    const rates = selectedPort.rates;
    
    // Calculate stay duration in days and hours
    const arrivalDate = new Date(stayDetails.arrivalDate);
    const departureDate = new Date(stayDetails.departureDate);
    const stayDurationDays = Math.max(1, Math.ceil((departureDate.getTime() - arrivalDate.getTime()) / (1000 * 60 * 60 * 24)));
    const stayDurationHours = Math.max(1, Math.ceil((departureDate.getTime() - arrivalDate.getTime()) / (1000 * 60 * 60)));

    // Port dues: ₹ per GRT
    const portDues = vesselDetails.grossTonnage * rates.portDues;

    // Pilotage charges: ₹ per GRT (NOT per LOA)
    const pilotageCharges = vesselDetails.grossTonnage * rates.pilotage;

    // Towage charges: Fixed amount per visit
    const towageCharges = rates.towage;

    // Berth charges: ₹ per GRT per hour
    const berthCharges = stayDurationHours * vesselDetails.grossTonnage * rates.berthCharges;

    // Cargo handling charges: Depends on cargo type
    let cargoHandlingCharges = 0;
    if (cargoDetails.quantity > 0) {
      if (cargoDetails.type === 'Containers') {
        // For containers: ₹ per TEU
        cargoHandlingCharges = cargoDetails.quantity * rates.cargoHandling;
      } else {
        // For other cargo: ₹ per MT (assuming rates.cargoHandling is per MT for non-container cargo)
        cargoHandlingCharges = cargoDetails.quantity * rates.cargoHandling;
      }
    }

    // Anchorage charges: ₹ per GRT per hour (only if using anchorage)
    const anchorageCharges = stayDetails.anchorage ? 
      (stayDurationHours * vesselDetails.grossTonnage * rates.anchorageCharges) : 0;

    // Security charges: 
    let securityCharges = 0;
    if (cargoDetails.type === 'Containers' && cargoDetails.quantity > 0) {
      // ₹ per container for containers
      securityCharges = cargoDetails.quantity * rates.securityCharges;
    } else {
      // Fixed charge for non-container vessels
      securityCharges = rates.securityCharges;
    }

    // Environmental fee: ₹ per MT (assuming cargo quantity represents MT)
    const environmentalFee = cargoDetails.quantity > 0 ? 
      cargoDetails.quantity * rates.environmentalFee : 0;

    // Documentation fee: Fixed amount
    const documentationFee = rates.documentationFee;

    // Fresh water supply: ₹ per MT (assuming standard consumption)
    // Estimate 1 MT per 1000 GRT per day as standard consumption
    const estimatedWaterConsumption = (vesselDetails.grossTonnage / 1000) * stayDurationDays;
    const freshWaterCharges = estimatedWaterConsumption * rates.freshWaterSupply;

    // Waste disposal charges: Fixed amount per visit
    const wasteDisposalCharges = rates.wasteDisposal;

    // Calculate subtotal
    const subtotal = 
      portDues +
      pilotageCharges +
      towageCharges +
      berthCharges +
      cargoHandlingCharges +
      anchorageCharges +
      securityCharges +
      environmentalFee +
      documentationFee +
      freshWaterCharges +
      wasteDisposalCharges;

    // Calculate GST (18% as per Indian tax structure for port services)
    const taxes = subtotal * 0.18;

    // Calculate total
    const total = subtotal + taxes;

    return {
      portDues,
      pilotageCharges,
      towageCharges,
      berthCharges,
      cargoHandlingCharges,
      anchorageCharges,
      securityCharges,
      environmentalFee,
      documentationFee,
      freshWaterCharges,
      wasteDisposalCharges,
      subtotal,
      taxes,
      total,
      // Additional calculation details for transparency
      calculationDetails: {
        stayDurationDays,
        stayDurationHours,
        estimatedWaterConsumption,
        grossTonnage: vesselDetails.grossTonnage,
        cargoQuantity: cargoDetails.quantity,
        cargoType: cargoDetails.type,
        usingAnchorage: stayDetails.anchorage
      }
    };
  }, [vesselDetails, cargoDetails, stayDetails, selectedPort]);
};