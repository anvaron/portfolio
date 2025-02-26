import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  submittedAt: Date
});

export const ContactSubmission = mongoose.model('ContactSubmission', contactSchema);
