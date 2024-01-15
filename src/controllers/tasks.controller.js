import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { name, done, projectid } = req.body;

  try {
    const newTask = {
      name,
      done,
      projectid,
    };
    await Task.create(newTask);
    res.status(200).json({ message: "task created successfully" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error to modify Project" });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  res.json(task);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedTask = await Task.findOne({
      where: { id },
    });
    updateTask.set(req.body);

    await updatedTask.save();
    res.status(200).json({ message: "Task modify sucessfully" });
  } catch (error) {
    console.error("Error al modificar el objeto:", error);
    res.status(500).json({ mensaje: "Error to modify Task " });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByPk(id);
    await deletedTask.destroy();
    res.status(200).json({ message: "Task destroyed sucessfully" });
  } catch (error) {
    console.error("Error al modificar el objeto:", error);
    res.status(500).json({ mensaje: "Error to destroy the Task" });
  }
};
