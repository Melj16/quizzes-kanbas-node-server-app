import model from "./model.js";
import { Types } from "mongoose";
export function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
}

export function createQuizForCourse(courseId, quiz) {
    return model.create({ course: courseId, ...quiz });
}

export function updateQuiz(quizId, quiz) {
    return model.updateOne({ _id: new Types.ObjectId(quizId) }, { $set: quiz });
}

export function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId });
}
export function findQuizById(quizId) {
    return model.findById(quizId);
}