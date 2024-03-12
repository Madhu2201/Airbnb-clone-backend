import { login, signup, getAllUsers } from "../Controller/userController.js"
import express from "express"
const router=express.Router();
router.post('/signup',signup)
router.post('/login',login)
router.get('/getuser',getAllUsers)
export default router;