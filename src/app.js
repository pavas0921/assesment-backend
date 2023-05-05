import express from "express";
import userRoutes from "./routes/user.routes.js";
import favRoutes from "./routes/favs.routes.js";

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("<hi>Hello<h1/>");
});

app.listen(PORT, () => {
  console.log("server initialized");
});

//Middleware
app.use(express.json());
app.use("/user", userRoutes);
app.use("/favs", favRoutes);
