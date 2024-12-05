import model from "./model.js";
export async function findAnswersForQuiz(quizId) {
    return model.find({ quiz: quizId });
}
export async function findAnswersForUser(quizId, userId) {
    return model.find({ quiz: quizId, user: userId });
}
export async function createAnswer(quizId, answer) {
    return model.create({ quizId: quizId, ...answer });
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
    return model.create({ quiz: quizId, user: userId, answers: { questionId: newAnswer } });
}