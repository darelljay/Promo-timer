import { createConnection, Connection } from "mysql2/promise";
import pool from "./dbConfig";

// let connection: Connection;

export const executeQuery = async (query: string, params?: any): Promise<any> => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute(query, params);
        connection.release();
        return rows;
    } catch (err) {
        console.error('Error executing query at db.ts: ', err);
        throw err;
    }
};