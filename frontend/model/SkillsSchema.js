import mongoose from "mongoose";

const SkillsSchema = new mongoose.Schema({
  ids: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  foto_name: { type: String, required: true },
  quote: { type: String },
});

export default mongoose.model("Skills", SkillsSchema);