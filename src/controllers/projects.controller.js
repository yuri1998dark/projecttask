import { Project } from "../models/Projects.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
  const allProjects = await Project.findAll();

  res.json(allProjects);
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;

  try {
    const newProject = {
      name,
      priority,
      description,
    };

    await Project.create(newProject);

    res.status(200).json({ message: "create sucessfully",name });
  } catch (error) {
    console.log(error);
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;
  try {
    const updatedProject = await Project.findByPk(id);
    if (updatedProject) {
      await updatedProject.update({
        name,
        priority,
        description,
      });

      await updatedProject.save();
      res.status(200).json({ message: "Project modify sucessfully" });
    } else {
      res.status(404).json({ message: "Project no found!" });
    }
  } catch (error) {
    console.error("Error al modificar el objeto:", error);
    res.status(500).json({ mensaje: "Error to modify Project" });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProject = await Project.findByPk(id);
    await deletedProject.destroy();
    res.status(200).json({ message: "Project destroyed sucessfully" });
  } catch (error) {
    console.error("Error al modificar el objeto:", error);
    res.status(500).json({ mensaje: "Error to destroy the Project" });
  }
};
export const getProject = async (req, res) => {
    const {id} = req.params;
    try {
        const project= await Project.findByPk(id);
        res.json(project);
        
        
    } catch (error) {
        res.status(500).json({ mensaje: "Error to find a specific project" });
    }
  
  };
  
export const getProjectTasks = async(req,res) => {
  try {
    const {id} = req.params
    const tasks = await Task.findAll({
      where:{projectid:id}
    })
    res.json(tasks)
} catch (error) {
  res.status(500).json({ mensaje: "Error to find a specific tasks from a Project" });
}
}