import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
    {
        name: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        instructions: String,
        type: String,
        due: String,
        available: String,
        until: String,
        assignment_group: String,
        for: String,
        number_of_questions: Number,
        points: Number,
        time_limit: Number,
        multiple_attempts: Boolean,
        number_of_attempts: Number,
        show_answers: Boolean,
        show_responses: Boolean,
        one_at_a_time: Boolean,
        lock_questions_after_answering: Boolean,
        web_cam: Boolean,
        shuffle_answers: Boolean,
        access_code: String,
        published: Boolean,
        lock_answers: Boolean,
        group: String,
    },
    { collection: "quizzes" }
);
export default quizSchema;