import { betterAuth } from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle";
import { db } from "@/database";

// This file sets up authentication using BetterAuth with a Drizzle ORM adapter for PostgreSQL.
// It imports the necessary modules and initializes the auth configuration.
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider:"pg",
}),})