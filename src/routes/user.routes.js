import express from "express";
import { getAllUsers } from "../controllers/user.controller.js";
import { createUser } from "../controllers/user.controller.js";
import { getOneUser } from "../controllers/user.controller.js";
import { updateUser } from "../controllers/user.controller.js";
import { deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

//get all users
router.get("/", getAllUsers);

//get user by id
router.get("/:id", getOneUser);

//Crear user
router.post("/", createUser);

//Update user
router.put("/:id", updateUser);

//Delete user
router.delete("/:id", deleteUser);

export default router;
