module.exports = app => {
    const tasks = require("../controllers/task.controllers");

    const router = require("express").Router();

    // Create a new task
    router.post("/", tasks.create);

    // Get all tasks
    router.get("/", tasks.findAll);

    app.use("/api/tasks", router);
}