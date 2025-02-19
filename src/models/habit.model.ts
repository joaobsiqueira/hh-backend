import { Schema, Document, model } from "mongoose";

export interface HabitDocument extends Document {
  name: string;
  description: string;
  frequency: number;
  monthlyOccurrences: number;
  totalOccurrences: number;
}

const habitSchema = new Schema<HabitDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  frequency: { type: Number, required: true },
  monthlyOccurrences: { type: Number, default: 0 },
  totalOccurrences: { type: Number, default: 0 },
});

const HabitModel = model<HabitDocument>("Habit", habitSchema);

export default HabitModel;
