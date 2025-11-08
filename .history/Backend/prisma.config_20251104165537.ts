import { defineConfig, env } from "prisma/config";
import * as dotenv from "dotenv";

// load file .env thủ công
dotenv.config({ path: ".env" }); // chắc chắn path đúng
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
