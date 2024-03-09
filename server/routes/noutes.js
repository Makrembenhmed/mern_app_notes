import  express from "express";

import { getNotes,getNote,updateNote,createNote,deleteNote } from "../controllers/notes.controller.js";

import { requireAuth } from "../middlewares/requireAuth.js";


const router = express.Router()
router.use(requireAuth)
router.route('/').get(getNotes).post(createNote)
router.route('/:id').get(getNote).put(updateNote).delete(deleteNote)

export default router