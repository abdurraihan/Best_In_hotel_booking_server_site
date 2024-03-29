import express from  "express"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/controller.hotel.js";

import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET by Id
router.get("/:id", getHotel)

//GET ALL 
router.get("/", getHotels)




export default router;