import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: String,
  category: String,
  proficiency: Number
});

export const Skill = mongoose.model('Skill', skillSchema);
