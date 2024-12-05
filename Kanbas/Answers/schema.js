import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
        answers: {
            type: Map,
            of: String
        }
    },
    { collection: "answers" }
);
export default schema;