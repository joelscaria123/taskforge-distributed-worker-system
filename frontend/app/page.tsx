"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

   const [message, setMessage] = useState("Error");


   useEffect(() => {

     async function getName(){
 
        try{

           const response = await axios.get("http://localhost:5000/api/health");
           const message = await response.data.message;
           setMessage(message);
        }

        catch(error){

           console.log("Error in getName Function", error);
           return Response.json({ error: "Internal Server Error"});
       
        }
       
      }

      getName();

   }, [])



  return (
    <div>
      {message}
    </div>
  );
}
