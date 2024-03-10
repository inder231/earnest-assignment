const db = require("../models");
const Task = db.tasks;
const Op = db.Sequelize.Op;

// Create ans save a new task
exports.create = async (req, res, next) => {
    try {
        if (!req.body.title || !req.body.description) throw new Error("Provide title and description!");

        const task = {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed ? req.body.completed : false
        }

        await Task.create(task);
        res.status(201).json({ message: "Task created successfully!" })

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
exports.findOne = (req, res, next) => {
    try {

    } catch (error) {
        return next(error);
    }
};

// Update a task by the id
exports.update = (req, res, next) => {
    try {

    } catch (error) {
        return next(error);
    }
};

// Delete a task by the id
exports.delete = (req, res, next) => {
    try {

    } catch (error) {
        return next(error);
    }
};

// Find all completed tasks in the database
exports.findAllCompleted = (req, res, next) => {
    try {

    } catch (error) {
        return next(error);
    }
};