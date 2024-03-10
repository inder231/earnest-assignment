const db = require("../models");
const Task = db.tasks;
const Op = db.Sequelize.Op;
const createError = require("http-errors");

// Create ans save a new task
exports.create = async (req, res, next) => {
    try {
        if (!req.body.title || !req.body.description) throw createError.BadRequest("Please provide title and description properly!")

        const task = {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed ? req.body.completed : false
        }

        const new_task = await Task.create(task);

        res.status(201).json({ message: "Task created successfully!", task: new_task })

    } catch (error) {
        return next(error);
    }
}

// Retrieve all tasks from the database
exports.findAll = async (req, res, next) => {
    try {
        const title = req.query.title;
        const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
        const tasks = await Task.findAll({ where: condition });
        res.status(200).json({ tasks });
    } catch (error) {
        return next(error);
    }
};

// Find a single task by id
exports.findOne = async (req, res, next) => {
    try {
        const id = req.params.id;
        const task = await Task.findByPk(id);
        if (!task) throw createError.NotFound(`Task with id ${id} is not available!`);
        res.status(200).json({ task });
    } catch (error) {
        return next(error);
    }
};

// Update a task by the id
exports.update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const response = await Task.update(req.body, {
            where: { id: id }
        })
        if (response[0] === 0) throw createError.NotFound(`Task with id ${id} is not available!`);

        res.status(200).json({ message: "Task updated successfully!" });
    } catch (error) {
        return next(error);
    }
};

// Delete a task by the id
exports.delete = async (req, res, next) => {
    try {
        const id = req.params.id;
        const response = await Task.destroy({ where: { id: id } });
        if (response === 0) throw createError.NotFound(`Task with ${id} is not available!`);
        res.status(200).json({ message: "Task deleted successfully!" });
    } catch (error) {
        return next(error);
    }
};

// Find all completed tasks in the database
exports.findAllCompleted = async (req, res, next) => {
    try {
        const completedTasks = await Task.findAll({ where: { completed: true } });
        res.status(200).json({ completedTasks });
    } catch (error) {
        return next(error);
    }
};