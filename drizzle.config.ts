import "dotenv/config";
import { DefineEnv

 } from "next/dist/build/swc/types";    
 export default ({
    out : "./drizzle",
    schema: "./src/database/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
        },
 })