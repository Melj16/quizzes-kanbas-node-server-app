import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
    {
        title: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        available: String,
        until: String,
        due: String,
        points: String,
        description: String,
    },
    { collection: "assignments" }
);
export default assignmentSchema;