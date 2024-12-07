import * as answersDao from "./dao.js";
export default function AnswerRoutes(app) {
    app.get("/api/quizzes/:quizId/answers", async (req, res) => {
        const { quizId } = req.params;
        const answers = await answersDao.findAnswersForQuiz(quizId);
        res.send(answers);
    });
    app.post("/api/quizzes/:quizId/answers", async (req, res) => {
        const { quizId } = req.params;
        const newAnswer = req.body;
        const status = await answersDao.createAnswer(quizId, newAnswer);
        res.send(status);
    });
    app.get("/api/answers/:answerId", async (req, res) => {
        const { questionId } = req.params;
        const questionUpdates = req.body;
        const status = await answersDao.updateQuestion(questionId, questionUpdates);
        res.send(status);
    });
    app.put("/api/quizzes/:quizId/user/:userId/answers/update", async (req, res) => {
        const { quizId, userId } = req.params;
        console.log(req.body);
        const { updateAnswer } = req.body;
        console.log(updateAnswer);
        const status = await answersDao.updateAnswer(quizId, userId, updateAnswer);
        res.send(status);
    });
    app.put("/api/quizzes/:quizId/user/:userId/answers/finished", async (req, res) => {
        const { quizId, userId } = req.params;
        const status = await answersDao.addAttempt(quizId, userId);
        res.send(status);
    });
    app.put("/api/quizzes/:quizId/user/:userId/answer", async (req, res) => {
        const { quizId, userId } = req.params;
        const {questionId, updateAnswer } = req.body;
        const status = await answersDao.addAnswerToMap(quizId, userId, questionId, updateAnswer);
        res.send(status);
    });
    app.get("/api/quizzes/:quizId/user/:userId/answers", async (req, res) => {
        const { quizId, userId } = req.params;
        const answers = await answersDao.findAnswersForUser(quizId, userId);
        res.send(answers);
    });

    app.post("/api/quizzes/:quizId/user/:userId/answers", async (req, res) => {
        const { quizId, userId } = req.params;
        const status = await answersDao.newAttempt(quizId, userId);
        res.send(status);
    });
}