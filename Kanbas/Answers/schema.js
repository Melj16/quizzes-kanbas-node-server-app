import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
        attempt: Number,
        score: Number,
        answers: {
            type: Map,
            of: String
        },
        finished: Boolean,
        date: { type: Date, default: Date.now }
    },
    { collection: "answers" }
);
export default schema;