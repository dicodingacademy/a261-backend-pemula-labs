import express from "express";
import {
  createNote,
  getNotes,
  getNoteById,
  editNoteById,
  deleteNoteById,
} from "../controller/notes-controller.js";

import {validate, validateQuery} from "../../../middlewares/validate.js";
import { notePayloadSchema, noteQuerySchema } from "../../../services/notes/validator/schema.js";

const router = express.Router();

router.post("/notes", validate(notePayloadSchema), createNote);
router.get("/notes", validateQuery(noteQuerySchema), getNotes);
router.get("/notes/:id", getNoteById);
router.put("/notes/:id", validate(notePayloadSchema), editNoteById);
router.delete("/notes/:id", validate(notePayloadSchema), deleteNoteById);

export default router;
