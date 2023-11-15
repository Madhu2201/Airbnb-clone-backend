import { uploadimage,getProduct } from "../controller/Controller.js";
import  express  from "express";
const router=express.Router();
router.post('/uploads',uploadimage)
router.get('/getproduct',getProduct)
export default router;