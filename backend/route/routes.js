import { Router } from 'express';

import {
    getPortsNames,
    getVesselTypes,
    getPortDetails,
    getCargoTypes,
    getBerthTypes
} from "../controller/controller.js";

const router = Router();

// PDA Related Routes
router.get("/ports", getPortsNames);
router.get("/ports/:code", getPortDetails);
router.get("/vessel-types", getVesselTypes);
router.get("/cargo-types", getCargoTypes);
router.get("/berth-types", getBerthTypes);

export { router as pdaRoutes };
