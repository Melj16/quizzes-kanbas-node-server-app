import * as enrollmentDao from "./dao.js";
export default function EnrollmentsRoutes(app) {
    app.post("/:userId/:courseId/enroll", (req, res) => {
        const { userId, courseId } = req.params;
        const newEnrollment = enrollmentDao.enrollUserInCourse(userId, courseId);
        res.send(newEnrollment);
    });
    app.delete("/:userId/:courseId/unenroll", (req, res) => {
        const { userId, courseId } = req.params;
        const status = enrollmentDao.unenrollUserInCourse(userId, courseId);
        res.send(status);
    });
}