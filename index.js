const express = require("express");

const app = express();

app.use(express.json());

const projectRoutes = require("./routes/projects");
const actionRoutes = require("./routes/actions");

app.use("/api/projects", projectRoutes);
app.use("/api/actions", actionRoutes);

const port = 4000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}.`);
});
