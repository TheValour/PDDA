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
    
    // Calculate stay duration in days
    const arrivalDate = new Date(stayDetails.arrivalDate);
    const departureDate = new Date(stayDetails.departureDate);
    const stayDuration = Math.max(1, Math.ceil((departureDate.getTime() - arrivalDate.getTime()) / (1000 * 60 * 60 * 24)));

    // Basic port dues based on GT (Indian ports typically charge per GT)
    const portDues = vesselDetails.grossTonnage * rates.portDues;

    // Pilotage charges based on LOA (mandatory for Indian ports)
    const pilotageCharges = vesselDetails.lengthOverall * rates.pilotage;

    // Towage charges (standard service for Indian ports)
    const towageCharges = rates.towage;

    // Berth charges based on stay duration (Indian port standard)
    const berthCharges = stayDuration * rates.berthCharges;

    // Cargo handling charges (per ton basis in Indian ports)
    const cargoHandlingCharges = cargoDetails.quantity > 0 ? cargoDetails.quantity * rates.cargoHandling : 0;

    // Anchorage charges (per day for Indian ports)
    const anchorageCharges = stayDetails.anchorage ? stayDuration * rates.anchorageCharges : 0;

    // Security charges (ISPS compliance - mandatory for Indian ports)
    const securityCharges = rates.securityCharges;

    // Environmental fee based on GT (Indian environmental regulations)
    const environmentalFee = vesselDetails.grossTonnage * rates.environmentalFee;

    // Documentation fee (Indian port documentation charges)
    const documentationFee = rates.documentationFee;

    // Fresh water supply charges (standard provision)
    const freshWaterCharges = rates.freshWaterSupply;

    // Waste disposal charges (standard service for Indian ports)
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
    };
  }, [vesselDetails, cargoDetails, stayDetails, selectedPort]);
};