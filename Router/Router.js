import { uploadimage,getProduct,getproductbyindex } from "../Controller/Controller.js";
import  express  from "express";
const router=express.Router();
router.post('/uploads',uploadimage)
router.get('/getproduct',getProduct)
router.get('/getproductbyindex/:productIndex',getproductbyindex)
export default router;