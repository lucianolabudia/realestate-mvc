import express from "express";
import { formLogin, formRegister, recoveryForm } from "../controllers/userController.js";

const router = express.Router();


router.get('/login', formLogin);
router.get('/registro', formRegister);
router.get('/recuperar-cuenta', recoveryForm);

       
export default router;