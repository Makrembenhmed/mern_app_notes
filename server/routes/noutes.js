import  express from "express";

import { getNotes,getNote,updateNote,createNote,deleteNote } from "../controllers/notes.controller.js";

const router = express.Router()
router.route('/').get(getNotes).post(createNote)
router.route('/:id').get(getNote).put(updateNote).delete(deleteNote)

export default router