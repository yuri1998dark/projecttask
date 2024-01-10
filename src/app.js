import express from "express";
import projectsRoutes from './routes/projects.routes.js'
import morgan from "morgan";

const app = express();
app.use(express.json());

app.use(projectsRoutes);
app.use(morgan)


export default app;


