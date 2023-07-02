import express from "express";
import { getAdmins } from "../../controllers/admins/getAllAdmins";
import { getAdmin } from "../../controllers/admins/getAdmin";
import { registerAdmin } from "../../controllers/admins/registerAdmin";
import { updateAdmin } from "../../controllers/admins/updateAdmin";
import { deleteAdmin } from "../../controllers/admins/deleteAdmin";
import { deleteAdmins } from "../../controllers/admins/deleteAllAdmins";

const router = express.Router();

router.get("/get", getAdmins);
router.get("/get/:id", getAdmin);

router.post("/create", registerAdmin);

router.patch("/update/:id", updateAdmin);

router.delete("/delete/:id", deleteAdmin);
router.delete("/delete", deleteAdmins);

export default router;
