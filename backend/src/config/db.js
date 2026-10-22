import {neon} from "@neondatabase/serverless";
import dotenv from 'dotenv';

dotenv.config({quiet: true})

export const sql = neon(process.env.DATABASE_URL);

export async function getPgVersion(){

    const result = await sql`SELECT version()`;
    console.log(`DataBase connected Successfully`, result[0]);
}