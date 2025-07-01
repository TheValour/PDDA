import { portsName, portsDetails, vesselTypes, cargoTypes, berthTypes } from '../util/data.js';

// Get all ports with their rates
export const getPortsNames = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: portsName,
      message: "Ports data retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving ports data",
      error: error.message
    });
  }
};

export const getPortDetails = async (req, res) => {
  try {
    const { code } = req.params;
    const port = portsDetails.find(p => p.code === code);
    if (!port) {
      return res.status(404).json({
        success: false,
        message: "Port not found"
      });
    }
    res.status(200).json({
      success: true,
      data: port,
      message: "Port details retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving port details",
      error: error.message
    });
  }
};

// Get all vessel types
export const getVesselTypes = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: vesselTypes,
      message: "Vessel types retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving vessel types",
      error: error.message
    });
  }
};

// Get all cargo types
export const getCargoTypes = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: cargoTypes,
      message: "Cargo types retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving cargo types",
      error: error.message
    });
  }
};

// Get all berth types
export const getBerthTypes = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: berthTypes,
      message: "Berth types retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving berth types",
      error: error.message
    });
  }
};