import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
        attempt: Number,
        answers: {
            type: Map,
            of: String
        },
        finished: Boolean
    },
    { collection: "answers" }
);
export default schema;