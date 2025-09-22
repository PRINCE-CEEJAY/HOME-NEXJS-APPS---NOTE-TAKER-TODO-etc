import mongoose from "mongoose";
const Schema = new mongoose.Schema({
  title: { type: String, requred: true },
  text: { type: String, required: true },
});
export const NoteC = mongoose.models.NoteC || mongoose.model("NoteC", Schema);
