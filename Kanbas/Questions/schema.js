import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        quizId: String,
        type: String,
        title: String,
        question: String,
        answer: String,
        points: Number,
        choices: [String],
        
    },
    { collection: "questions" }
);
export default schema;