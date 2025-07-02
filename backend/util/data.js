export const portsName = [
  { name: 'Jawaharlal Nehru Port Trust (JNPT)', code: 'INNSA' },
  { name: 'Chennai Port Trust', code: 'INMAA' },
  { name: 'Kolkata Port Trust (Syama Prasad Mookerjee Port)', code: 'INCCU' },
  { name: 'Visakhapatnam Port Trust', code: 'INVTZ' },
  { name: 'Deendayal Port Trust (Kandla)', code: 'INIXY' },
  { name: 'Cochin Port Trust', code: 'INCOK' },
  { name: 'Paradip Port Trust', code: 'INPRT' },
  { name: 'V.O. Chidambaranar Port Trust (Tuticorin)', code: 'INTUT' },
  { name: 'Mormugao Port Trust', code: 'INMRM' },
  { name: 'New Mangalore Port Trust', code: 'INNML' }
];

export const portsDetails = [
  {
  id: "mumbai",
  name: "Jawaharlal Nehru Port Trust",
  code: "INNSA",
  country: "India",
  rates: {
    portDues: 4.5114,                 // ₹ per GRT for Coastal Container Vessels
    pilotage: 10.0464,                // ₹ per GRT for vessels up to 30,000 GRT (Coastal)
    towage: 7990.16,                  // Minimum ₹ for Pilotage-cum-Towage per visit (Coastal)
    berthCharges: 0.1428,             // ₹ per GRT per hour for Coastal vessels at JNPT berths
    cargoHandling: 2274.77,           // ₹ per TEU for coastal normal loaded containers (Ship to Yard)
    anchorageCharges: 0.0595,         // ₹ per GRT per hour for occupying anchorage berth (Coastal)
    securityCharges: 165,             // ₹ per container Port Mandatory Usage Charge (Coastal)
    environmentalFee: 33.46,          // ₹ per MT for Dry Bulk Cargo like Food Grains (used as environmental fee reference)
    documentationFee: 0,              // Not explicitly specified for documentation fee
    freshWaterSupply: 106.3771,       // ₹ per MT for water supplied to coastal vessels
    wasteDisposal: 805.3899           // ₹ per visit for garbage collection from ships
  }
},

  {
  id: "chennai",
  name: "Chennai Port Trust",
  code: "INMAA",
  country: "India",
  rates: {
    portDues: 8.4138,                 // ₹ per GRT (General Cargo - Coastal)
    pilotage: 11.1037,                // ₹ per GRT (General Cargo - Coastal, up to 10,000 GRT)
    towage: 29776.66,                 // ₹ per hour per tug (Coastal)
    berthCharges: 0.1189,             // ₹ per GRT per hour (General Cargo - Coastal)
    cargoHandling: 5900,              // ₹ per shift per Mazdoor (Stevedoring operations)
    anchorageCharges: 0.02977,        // ₹ per GRT per hour (Coastal)
    securityCharges: 150,            // Not explicitly available as lump sum in the SoR
    environmentalFee: 6.25,           // ₹ per MT for pollution levy on dry bulk cargo
    documentationFee: 62,             // ₹ per sheet for issue of certificates
    freshWaterSupply: 500,            // ₹ per MT
    wasteDisposal: 600               // Not explicitly mentioned
  }
},

  {
  id: "kolkata",
  name: "Syama Prasad Mookerjee Port (Kolkata Port Trust)",
  code: "INCCU",
  country: "India",
  rates: {
    portDues: 4.5114,                // ₹ per GRT for coastal vessels (as per standard coastal rate pattern)
    pilotage: 10.0464,               // ₹ per GRT for pilotage for coastal vessels (following standard structure similar to other ports, no specific value in snippet but inferred)
    towage: 7990.16,                 // Estimated minimum for Pilotage-cum-Towage coastal, for consistency with other ports (not explicitly listed, closest approximation)
    berthCharges: 0.1189,            // ₹ per GRT per hour (coastal), typical for general cargo (approximated based on standard)
    cargoHandling: 258.01,           // ₹ per MT for Dry Bulk Cargo Handling at Berth no.19(o) for Cargo under S.4.1.14 (Limestone, Coal, Ore, etc.)
    anchorageCharges: 0.0595,        // ₹ per GRT per hour (coastal), aligned with anchorage charges logic, though not explicitly listed
    securityCharges: 165,            // ₹ per container Port Mandatory Usage Charge (common across major ports, mapped for consistency)
    environmentalFee: 33.46,         // ₹ per MT for Food Grains/ Dry Bulk Cargo (used as proxy for environmental-related fee)
    documentationFee: 70,            // ₹ for Customs Document Printout (logical approximation from previous port structures)
    freshWaterSupply: 213.24,        // ₹ per 1000 liters, following typical rates at Indian ports
    wasteDisposal: 805.3899          // ₹ per visit for garbage collection from ships (common port rate, used as estimated proxy)
  }
},

  {
  id: "visakhapatnam",
  name: "Visakhapatnam Port Trust",
  code: "INVTZ",
  country: "India",
  rates: {
    portDues: 11.09,                 // ₹ per GRT for coastal vessels (Residual category)
    pilotage: 17.84,                 // ₹ per GRT for coastal vessels up to 30,000 GRT
    towage: 50901,                   // Minimum ₹ per towage movement (coastal)
    berthCharges: 0.1762,            // ₹ per GRT per hour for Crane berths (Residual category, coastal)
    cargoHandling: 26,               // ₹ per MT for all types of coal, coke, coal tar pitch (coastal)
    anchorageCharges: 0.0029,        // ₹ per GRT per hour for roads stay (after 48 hrs to 144 hrs)
    securityCharges: 165,            // Estimated consistent with common Port Mandatory usage (approximated)
    environmentalFee: 33.75,         // ₹ per MT for Alumina Bulk cargo (used as environmental-related fee)
    documentationFee: 70,            // Estimated based on typical documentation fees across ports
    freshWaterSupply: 213.24,        // ₹ per 1000 liters (estimated standard rate across Indian ports)
    wasteDisposal: 805.39            // Estimated garbage disposal charges based on other port data
  }
},

  {
  id: "kandla",
  name: "Deendayal Port Trust",
  code: "INIXY",
  country: "India",
  rates: {
    portDues: 11.5707,               // ₹ per GRT for coastal vessels (Kandla division)
    pilotage: 23.5258,               // ₹ per GRT for coastal vessels up to 30,000 GRT (Kandla division)
    towage: 13770.29,                // ₹ minimum for inward/outward pilotage cancellation (used as fixed towage reference)
    berthCharges: 0.125,             // ₹ per GRT per hour for Non-Crane General Cargo Berths (coastal vessels)
    cargoHandling: 14.85,            // ₹ per MT for Cement & Clinker (coastal bulk cargo)
    anchorageCharges: 0.028,         // ₹ per GRT per hour for inner anchorage (Kandla, coastal vessels)
    securityCharges: 165,            // Estimated standard security charge, consistent across ports
    environmentalFee: 36.76,         // ₹ per MT for Fertilizer and Raw Material Bulk (used as environmental-related fee reference)
    documentationFee: 70,            // Estimated based on typical Indian port documentation fees
    freshWaterSupply: 213.24,        // Estimated standard rate for water supply, consistent across ports
    wasteDisposal: 805.39            // Estimated garbage/waste disposal charge, mapped for consistency
  }
},

  // done
  {
  id: "cochin",
  name: "Cochin Port Trust",
  code: "INCOK",
  country: "India",
  rates: {
    portDues: 10.44,
    pilotage: 29.17,
    towage: 20989.42,
    berthCharges: 0.2191,
    cargoHandling: 27,
    anchorageCharges: 0.0233,
    securityCharges: 103450,
    environmentalFee: 73.74,
    documentationFee: 70,
    freshWaterSupply: 213.24,
    wasteDisposal: 73.74
  }
},

  {
  id: "paradip",
  name: "Paradip Port Trust",
  code: "INPDP",
  country: "India",
  rates: {
    portDues: 5.95,                   // ₹ per GRT for coastal vessels
    pilotage: 12.52,                  // ₹ per GRT for coastal vessels up to 30,000 GRT
    towage: 2582,                     // ₹ cancellation charge (minimum towage-like fee as fixed amount)
    berthCharges: 0.058,              // ₹ per GRT per hour for coastal vessels
    cargoHandling: 25.80,             // ₹ per MT for coal up to 5 lakh tonnes per annum (coastal)
    anchorageCharges: 0.10757,        // ₹ per GRT per hour for vessels at roadstead (coastal)
    securityCharges: 165,             // Standard estimated port security charge
    environmentalFee: 33.11,          // ₹ per MT for dry bulk cargo via Harbour Mobile Crane (coastal)
    documentationFee: 20,             // ₹ per page for document/certificate supply
    freshWaterSupply: 98.35,          // ₹ per MT for direct water supply at berth (coastal)
    wasteDisposal: 805.39             // Estimated waste disposal charge for consistency
  }
},

  {
  id: "tuticorin",
  name: "V.O. Chidambaranar Port Trust",
  code: "INTUT",
  country: "India",
  rates: {
    portDues: 28.16,                 // ₹ per GRT (foreign-going, once in 30 days)
    pilotage: 44.25,                 // ₹ per GRT for 0-20,000 GRT (foreign-going), min 77019.57 per ship
    towage: 15264.26,                // ₹ per tug per hour (Harbour tugs >10 Ton Bollard Pull)
    berthCharges: 0.64,              // ₹ per GRT per hour (foreign-going vessels 0-20,000 GRT)
    cargoHandling: 50.00,            // ₹ per MT (common labour rate for foreign vessels)
    anchorageCharges: 0.0266,        // ₹ per GRT per hour for foreign-going vessels up to 3,000 GRT
    securityCharges: 170,              // Not found, set as 0
    environmentalFee: 35.11,             // Not found, set as 0
    documentationFee: 127.69,        // ₹ for issue of duplicate copy of bills/receipts
    freshWaterSupply: 22659.85,      // ₹ minimum for fresh water supply (20% of pilotage charges)
    wasteDisposal: 605                 // Not found, set as 0
  }

  },
  {
  id: "mormugao",
  name: "Mormugao Port Trust",
  code: "INMRM",
  country: "India",
  rates: {
    portDues: 7.56,                  // ₹ per GRT per entry for coastal vessels
    pilotage: 15.76,                 // ₹ per GRT for coastal vessels up to 30,000 GRT
    towage: 23469.62,                // ₹ per tug per hour (coastal)
    berthCharges: 0.17,              // ₹ per GRT per hour for cargo/container vessels (coastal)
    cargoHandling: 28.20,            // ₹ per MT for dry bulk cargo - Iron Ore, Bauxite, Limestone, etc. (coastal, avg. tier)
    anchorageCharges: 0.03,          // ₹ per GRT per hour for working anchorage (coastal)
    securityCharges: 165,            // Estimated standard charge, not explicitly listed
    environmentalFee: 4.00,          // ₹ per MT Dust Suppression Levy
    documentationFee: 2000,          // ₹ per document for coastal vessel-related EDI charges
    freshWaterSupply: 169.43,        // ₹ per 1000 liters at berth (coastal)
    wasteDisposal: 805.39            // Estimated standard waste disposal, not explicitly listed
  }
},

  {
  id: "new_mangalore",
  name: "New Mangalore Port Trust",
  code: "INNML",
  country: "India",
  rates: {
    portDues: 5.57,                   // ₹ per GRT per entry for coastal vessels
    pilotage: 11.77,                  // ₹ per GRT for coastal vessels up to 30,000 GRT
    towage: 10000,                    // ₹ per tug hour for other than SPM operations (coastal)
    berthCharges: 0.062,              // ₹ per GRT per hour for general cargo vessels without wharf cranes (coastal)
    cargoHandling: 21,                // ₹ per MT for finished fertilizer (coastal, representative bulk cargo)
    anchorageCharges: 0.031,          // Approximate, based on 50% of applicable berth hire beyond 144 hours
    securityCharges: 165,             // Estimated standard security charge for consistency
    environmentalFee: 25,             // ₹ per MT for bunkering alongside berth (proxy for environmental fee)
    documentationFee: 1400,           // ₹ per certificate for entry/clearance without cargo operation
    freshWaterSupply: 213.24,         // Standard estimated port water supply rate
    wasteDisposal: 805.39             // Standard estimated waste disposal rate for consistency
  }
}
];

export const vesselTypes = [
  'Container Ship',
  'Bulk Carrier',
  'Tanker',
  'General Cargo',
  'RoRo',
  'Passenger Ship',
  'LPG Carrier',
  'Chemical Tanker',
  'Car Carrier',
  'Fishing Vessel',
  'Offshore Support Vessel',
  'Dredger',
  'Tug Boat',
];

export const cargoTypes = [
  'Containers',
  'Iron Ore',
  'Coal',
  'Crude Oil',
  'Petroleum Products',
  'Fertilizers',
  'Food Grains',
  'Salt',
  'Limestone',
  'Bauxite',
  'Breakbulk',
  'RoRo Cargo',
  'Passenger',
  'LPG',
  'Chemicals',
  'Vehicles',
  'General Cargo',
  'Textiles',
  'Spices',
  'Tea',
  'Coffee',
];

export const berthTypes = [
  'Container Terminal',
  'Bulk Terminal',
  'Liquid Terminal',
  'General Cargo Berth',
  'RoRo Terminal',
  'Passenger Terminal',
  'Offshore Berth',
  'Iron Ore Terminal',
  'Coal Terminal',
  'Oil Terminal',
  'LPG Terminal',
];