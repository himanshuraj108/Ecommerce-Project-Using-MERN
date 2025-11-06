import express from "express";
import colors from "colors";
import "dotenv/config";
import morgan from "morgan";
import connectDB from "./config/db.js";
import router from "./routes/authRoute.js";

const app = express();
const port = process.env.PORT || 3000;

await connectDB();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", router);

app.get("/", (req, res) => {
  res.send("<h1>API IS RUNNING</h1>");
});

app.listen(port, () => {
  console.log(
    `Server is running on mode ${process.env.DEV_MODE} on http://localhost:${port}`
      .bgCyan.white
  );
});
