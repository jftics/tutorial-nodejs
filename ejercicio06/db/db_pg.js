import pg from 'pg'
import { configDB } from "../config.js"

export class db_pg{

    static async  execute(query, params){
        const { Pool } = pg
        const pool = new Pool(configDB)
        let data =null

        try {
            if(params){
                data = await pool.query(query,params); 
            }
            else{
                data = await pool.query(query); 
            }
         } catch (err) {
            console.error(err);
         } finally {
            await pool.end()
         }

         
        return data

    }
}
