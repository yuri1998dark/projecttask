import express from "express";
import projectsRoutes from './routes/projects.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import morgan from "morgan";

const app = express();
app.use(express.json());

app.use(projectsRoutes);
app.use(taskRoutes)
app.use(morgan('dev'))


export default app;


