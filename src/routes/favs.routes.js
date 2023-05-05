import express from "express";
import { getAllFavs } from "../controllers/fav.controller.js";
import { createFav } from "../controllers/fav.controller.js";
//import { getOneFav } from "../controllers/fav.controller.js";
//import { updateFav } from "../controllers/fav.controller.js";
//import { deleteFav } from "../controllers/fav.controller.js";
const router = express.Router();

//Get all favs
router.get("/", getAllFavs);

//get Fav by id
//router.get("/:id", getOneFav);

//Crear Fave
router.post("/", createFav);

//Update Fav
//router.put("/:id", updateFav);

//Delete Fav
//router.delete("/:id", deleteFav);

export default router;
