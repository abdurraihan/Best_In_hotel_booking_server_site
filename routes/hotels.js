import express from  "express"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/controller.hotel.js";


const router = express.Router();

// CREATE 
router.post("/", createHotel)

//UPDATE
router.put("/:id",updateHotel)

//DELETE
router.delete("/:id", deleteHotel)

//GET by Id
router.get("/:id", getHotel)

//GET ALL 
router.get("/", getHotels)




export default router;