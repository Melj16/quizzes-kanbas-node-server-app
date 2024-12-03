import * as quizzesDao from "./dao.js";
export default function QuestionRoutes(app) {
    app.get("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const questions = await quizzesDao.findQuestionsForQuiz(quizId);
        res.send(questions);
    });
    app.post("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const question = req.body;
        const status = await quizzesDao.createQuestion(quizId, question);
        res.send(status);
    });
    app.put("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const questionUpdates = req.body;
        const status = await quizzesDao.updateQuestion(questionId, questionUpdates);
        res.send(status);
    });
    app.delete("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const status = await quizzesDao.deleteQuestion(questionId);
        res.send(status);
    });
}