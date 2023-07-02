import express from "express";
import { getStations } from "../../controllers/stations/getStations";
import { registerUser } from "../../controllers/users/registerUser";
import { getUser } from "../../controllers/users/getUser";
import { getUsers } from "../../controllers/users/getAllUsers";
import { loginUser } from "../../controllers/users/loginUser";
import { updateUser } from "../../controllers/users/updateUser";
import { deleteUsers } from "../../controllers/users/deleteAllUsers";
import { deleteUser } from "../../controllers/users/deleteUser";

const router = express.Router();

router.get("/", getStations);
router.get("/get/:id", getUser);
router.get("/get", getUsers);

router.post("/create", registerUser);
router.post("/login", loginUser);

router.patch("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);
router.delete("/delete", deleteUsers)

export default router;

