import { RowDataPacket } from "mysql2";
import pool from "./dbConfig";
import { v4 as uuidv4 } from "uuid";

interface User {
    userName: string;
    userId: string;
    userPassword: string;
}

class DB_functions {
    async exists(name: string | undefined, id: string | undefined, password: string | undefined): Promise<boolean> {
        try {
            let query = "SELECT * FROM USER WHERE 1=1";
            const queryParams: (string | number)[] = [];

            if (id) {
                query += " AND userId = ?";
                queryParams.push(id);
            }

            if (password) {
                query += " AND userPassword = ?";
                queryParams.push(password);
            }

            if (name) {
                query += " AND userName = ?";
                queryParams.push(name);
            }

            const [rows] = await pool.query<RowDataPacket[]>(query, queryParams);

            return rows.length > 0;
        } catch (error) {
            console.error('Error checking existence at exists(): ', error);
            throw error;
        }
    }

    async findByID(id: string): Promise<RowDataPacket[] | string> {
        try {
            const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM USER WHERE uuidINT = ?", [id]);

            if (rows.length > 0) {
                return rows;
            }
            return "No users found with the ID you provided";
        } catch (error) {
            console.error('Error checking existence at findByID(): ', error);
            throw error;
        }
    }

    async findByUserId(id:string):Promise<RowDataPacket[] | string>{
        try {
            const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM USER WHERE userId = ?", [id]);

            if (rows.length > 0) {
                return rows;
            }
            return "No users found with the ID you provided";
        } catch (error) {
            console.error('Error checking existence at findByID(): ', error);
            throw error;
        }
    }

    async create(user: User): Promise<string> {
        try {
            const uuid = uuidv4();
            const { userName, userId, userPassword } = user;
            await pool.query("INSERT INTO user (userName, userId, uuidINT, userPassword) VALUES (?, ?, ?, ?)", [userName, userId, uuid, userPassword]);
            return "User successfully created";
        } catch (error) {
            console.error('Error checking existence at create(): ', error);
            throw error;
        }
    }
}

export default DB_functions;
