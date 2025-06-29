import { useMemo } from 'react';

export const usePDACalculation = ({
  vesselDetails,
  cargoDetails,
  portServices,
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

    // Pilotage charges based on LOA (Indian maritime regulations)
    const pilotageCharges = portServices.pilotage ? vesselDetails.lengthOverall * rates.pilotage : 0;

    // Towage charges (flat rate per service in Indian ports)
    const towageCharges = portServices.towage ? rates.towage : 0;

    // Berth charges based on stay duration (Indian port standard)
    const berthCharges = stayDuration * rates.berthCharges;

    // Cargo handling charges (per ton basis in Indian ports)
    const cargoHandlingCharges = cargoDetails.quantity > 0 ? cargoDetails.quantity * rates.cargoHandling : 0;

    // Anchorage charges (per day for Indian ports)
    const anchorageCharges = stayDetails.anchorage ? stayDuration * rates.anchorageCharges : 0;

    // Security charges (ISPS compliance - flat rate in Indian ports)
    const securityCharges = portServices.security ? rates.securityCharges : 0;

    // Environmental fee based on GT (Indian environmental regulations)
    const environmentalFee = vesselDetails.grossTonnage * rates.environmentalFee;

    // Documentation fee (Indian port documentation charges)
    const documentationFee = rates.documentationFee;

    // Fresh water supply charges (per ton in Indian ports)
    const freshWaterCharges = portServices.freshWater > 0 ? portServices.freshWater * rates.freshWaterSupply : 0;

    // Waste disposal charges (Indian port waste management)
    const wasteDisposalCharges = portServices.wasteDisposal ? rates.wasteDisposal : 0;

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
  }, [vesselDetails, cargoDetails, portServices, stayDetails, selectedPort]);
};