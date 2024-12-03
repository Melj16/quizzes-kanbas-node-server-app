import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        quizId: String,
        title: String,
        question: String,
        answer: String,
        points: String,
        choices: [String],
        
    },
    { collection: "questions" }
);
export default schema;