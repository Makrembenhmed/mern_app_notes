import  express from "express";

import {getProduits,getProduit,updateProduit,createProduit,deleteProduit,getProduitsWithStock} from "../controllers/produitControllers.js";

//import { requireAuth } from "../middlewares/requireAuth.js";


const router = express.Router()
//router.use(requireAuth)

router.route('/').get(getProduits).post(createProduit)
router.route('/dispo').get(getProduitsWithStock)
router.route('/:id').get(getProduit).put(updateProduit).delete(deleteProduit)


export default router