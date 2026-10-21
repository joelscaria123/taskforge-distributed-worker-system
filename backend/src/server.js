import express from 'express';
import dotenv from "dotenv";
import cors from "cors";


dotenv.config({ quiet: true});

const app = express();

const PORT = process.env.PORT;


app.use(cors({ origin: "http://localhost:3000"}));

app.use(express.json());


app.get("/api/health", (req,res) => {

     res.status(200).json({message :"API is healthy and running"})
})

app.listen(PORT, () => {

    console.log("Server running on PORT", PORT);
})

