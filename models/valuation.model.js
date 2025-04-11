import mongoose from "mongoose";

const valuationSchema = new mongoose.Schema({
  id: String,
  initialQuestions: Object,
  detailedQuestionnaire: Object,
  billing: Object,
});

const Valuation = mongoose.models.Valuation || mongoose.model("Valuation", valuationSchema);

export default Valuation;
