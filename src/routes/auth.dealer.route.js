import {Router} from 'express';
import { getDealers, login, register, update } from '../controller/auth.dealer.controller.js';
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/dealers", getDealers)
router.patch("/update", update);
export default router;