import * as dotenv from "dotenv";
if (process.env.PROJECTENV === "development") {
  dotenv.config({ path: "../../.env" });
}

export default {
  port: process.env.PORT ?? "",
  mongoUri: process.env.MONGOURI?.toString() ?? "",
};
