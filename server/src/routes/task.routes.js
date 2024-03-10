module.exports = app => {
    const tasks = require("../controllers/task.controllers");

    const router = require("express").Router();

    // Create a new task
    router.post("/", tasks.create);

    // Get all tasks
    router.get("/", tasks.findAll);
    
    // Get all completed tasks
    router.get("/completed", tasks.findAllCompleted);

    // Get single task
    router.get("/:id", tasks.findOne);

    // Update single task
    router.patch("/:id", tasks.update);

    // Delete single task
    router.delete("/:id", tasks.delete);

    app.use("/api/tasks", router);
}