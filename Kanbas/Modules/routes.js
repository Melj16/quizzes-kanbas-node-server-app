import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {
    app.put("/api/modules/:moduleId", (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const status = modulesDao.updateModule(moduleId, moduleUpdates);
        res.send(status);
    });
    app.delete("/api/modules/:moduleId", (req, res) => {
        const { moduleId } = req.params;
        const status = modulesDao.deleteModule(moduleId);
        res.send(status);
    });
}
