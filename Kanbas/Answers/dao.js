import { findQuestionsForQuiz } from "../Questions/dao.js";
import model from "./model.js";
import quizModel from "../Quizzes/model.js";
export async function findAnswersForQuiz(quizId) {
    return model.find({ quiz: quizId, finished: true });
}
export async function findAnswersForUser(quizId, userId) {
    return model.findOne({ quiz: quizId, user: userId });
}
export async function createAnswer(quizId, answer) {
    return model.create({ quizId: quizId, attempt: 1, finished: false, ...answer });
}
export async function deleteAnswer(answerId) {
    return model.deleteOne({ _id: answerId });
}
export async function addAnswerToMap(quizId, userId, questionId, newAnswer) {
    const answer = await model.findOne({ quiz: quizId, user: userId });
    if (answer) {
        answer.answers.set(questionId, newAnswer);
        return answer.save();
    }
    return model.create({ quiz: quizId, user: userId, attempt: 1, answers: { [questionId]: newAnswer }, finished: false });
}

export async function addAttempt(quizId, userId) {
    const answer = await model.findOne({ quiz: quizId, user: userId });
    if (answer) {
        answer.attempt++;
        answer.finished = true;
        answer.score = 0;
        let questions = await findQuestionsForQuiz(quizId);
        questions.forEach(question => {
            if (question.answer === answer.answers.get(question._id)) {
                answer.score = answer.score + question.points;
            }
        });
        return answer.save();
    }
    return false;
}

export async function newAttempt(quizId, userId) {
    const quiz = await quizModel.findById(quizId);
    const answer = await model.findOne({ quiz: quizId, user: userId });
    if (answer) {
        if (quiz.number_of_attempts > answer.attempt || quiz.number_of_attempts === 0) {
            answer.answers = {};
            answer.finished = false;
            return answer.save();
        } else {
            return false;
        }
    }
    return model.create({ quiz: quizId, user: userId, attempt: 1, answers: {}, finished: false });
}

export async function updateAnswer(quizId, userId, newAnswer) {
    console.log(newAnswer);
    return model.updateOne({ quiz: quizId, user: userId}, { $set: newAnswer });
}