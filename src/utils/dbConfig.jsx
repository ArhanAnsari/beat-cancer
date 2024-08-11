import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://beat-cancer_owner:hy1jNzXbM6TO@ep-autumn-frog-a1jepgkx.ap-southeast-1.aws.neon.tech/beat-cancer?sslmode=require"
);
export const db = drizzle(sql, { schema });
