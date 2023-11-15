import { uploadimage,getProduct } from "../controller/Controller.js";
import upload from "../middleware/product.middleware.js";
import  express  from "express";
const router=express.Router();
router.post('/uploads',uploadimage)
router.get('/getproduct',getProduct)
export default router;