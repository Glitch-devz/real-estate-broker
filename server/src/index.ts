//declaration
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

//routes
import AdminRoute from "./routes/admin.router";
import PublicRoute from "./routes/public.router";

//envs
import envConfigs from "./configs/env.config";

//database connection
let connectionUri = envConfigs.mongoUri;
let options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(connectionUri, options, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("connected to database");
  }
});

const app = express();
app.use(cors());
app.use(express.json());

app.use("/assets", express.static(__dirname + "/assets"));
app.use("/admin", AdminRoute);
app.use("/", PublicRoute);

//listener
let port = parseInt(envConfigs.port || "5000");
app.listen(port, () => console.log(`:${port}`));
