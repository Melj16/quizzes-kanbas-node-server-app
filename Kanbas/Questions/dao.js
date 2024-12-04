import model from "./model.js";
export function updateQuestion(questionId, questionUpdates) {
    return model.updateOne({ _id: questionId }, questionUpdates);
}
export function deleteQuestion(questionId) {
    return model.deleteOne({ _id: questionId });
}
export function createQuestion(module) {
    delete question._id;
    return model.create(question);
}
export function findQuestionsForQuiz(quizId) {
    return model.find({ quiz: quizId });
}