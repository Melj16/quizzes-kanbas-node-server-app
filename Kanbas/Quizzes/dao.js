import model from "./model.js";
import questionModel from "../Questions/model.js";
import { Types } from "mongoose";
export async function findQuizzesForCourse(courseId) {
    const quizzes = await model.find({ course: courseId });
    let newQuizzes = [];
    for (const quiz of quizzes) {
        newQuizzes.push(await updateQuizFields(quiz._id));
    }
    return newQuizzes;
}

export function createQuizForCourse(courseId, quiz) {
    return model.create({ course: courseId, ...quiz });
}

export function updateQuiz(quizId, quiz) {
    return model.findByIdAndUpdate(quizId, { $set: quiz });
}

export function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId });
}
export function findQuizById(quizId) {
    return updateQuizFields(quizId);

}

async function updateQuizFields(quizId) {
    const questions = await questionModel.find({ quiz: quizId });
    let totalPoints = 0;
    let totalQuestions = 0;
    questions.forEach(question => {
        totalQuestions = totalQuestions + 1;
        totalPoints = totalPoints + question.points;
    });
    const quiz = await model.findById(quizId);
    quiz.points = totalPoints;
    quiz.number_of_questions = totalQuestions;
    await quiz.save();
    return quiz;
}