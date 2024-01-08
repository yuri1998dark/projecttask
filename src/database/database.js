import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("projectsdb", "postgres", "ubu12345*+", {
  host: "localhost",
  dialect: "postgres",
});







