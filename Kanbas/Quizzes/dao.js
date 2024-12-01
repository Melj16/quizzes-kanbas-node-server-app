import model from "./model.js";
export function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
}