import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
    {
        name: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        type: String,
        due: String,
        available: String,
        until: String,
        number_of_questions: String,
        points: String,
    },
    { collection: "quizzes" }
);
export default quizSchema;