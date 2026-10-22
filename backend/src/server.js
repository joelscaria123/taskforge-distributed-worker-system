import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import { sql, getPgVersion } from './config/db.js';


dotenv.config({ quiet: true});

const app = express();

const PORT = process.env.PORT;


app.use(cors({ origin: "http://localhost:3000"}));

app.use(express.json());


app.get("/api/health", (req,res) => {

     res.status(200).json({message :"API is healthy and running"})
})

async function startServer(){

    try{

        await getPgVersion();

        app.listen(PORT, () => {

         console.log("Server running on PORT", PORT);
        });


    }

    catch(error){

       console.log("Error in startServer")
    }
}

startServer();

