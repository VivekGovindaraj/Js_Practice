 import express from "express";

 import { getThoughts, createThoughts, updateThoughts , deleteThoughts, toggleFavourite,getFavourites,getStats} from "../controllers/ThoughtController.js";

 const router = express.Router();
 

 router.get("/favourites/all", getFavourites);
 
router.get("/stats/summary", getStats);
 //Get all the thoughts

 router.route("/")
 .get(getThoughts)
 .post(createThoughts)


 router.route('/:id')
 .put(updateThoughts)
 .delete(deleteThoughts)


 

 router.patch("/:id/favourite", toggleFavourite)
export default router;