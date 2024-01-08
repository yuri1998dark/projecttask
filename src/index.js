import app from "./app.js";
import { sequelize } from "./database/database.js";
/* import './models/Projects.js'
import './models/Task.js' */
const port = 3000;

const main = async() => {
  try {
    await sequelize.sync({force:false});
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  app.listen(port);
 console.log("Server running on port", port);
};

main();