import { Router } from "express"
import { getProducts, login, register } from "../controller/auth.product.controller.js"
const router = Router()

router.post("/register", register)
router.post("/login", login)
router.get("/products", getProducts)
export default router