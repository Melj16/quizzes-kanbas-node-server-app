import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
    {
        name: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        type: String,
        due: String,
        available: String,
        until: String,
        for: String,
        number_of_questions: String,
        points: String,
        time_limit: Number,
        multiple_attempts: Boolean,
        show_answers: Boolean,
        one_at_a_time: Boolean,
        lock_questions_after_answering: Boolean,
        web_cam: Boolean,
        shuffle_questions: Boolean,
        access_code: String,
        published: Boolean,
    },
    { collection: "quizzes" }
);
export default quizSchema;