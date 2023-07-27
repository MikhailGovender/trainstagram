import { config } from "dotenv";

config();

export const ENV = {
  TEST_VAR: process.env.TEST_VAR,
  PORT: process.env.PORT || "8080",
  SESSION_SECRET: process.env.SESSION_SECRET || "",
  DB_SERVER: process.env.DB_SERVER || "localhost",
  DB_NAME: process.env.DB_NAME || "Trainstagram",
  DB_USER: process.env.DB_USER || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
  ENV: process.env.ENVIRONMENT || "dev",
};
