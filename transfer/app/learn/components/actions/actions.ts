"use server"

import { MongoClient, ServerApiVersion } from "mongodb";
import { sessionOptions, SessionData, defaultSession } from "@/app/_lib/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { ObjectId } from "mongodb";

export async function submitQuestion (
    prevState: { error: undefined | string },
    formData: FormData
  ) {
    const selectedAnswer = formData.get("selectedAnswer");
    const correctAnswer = formData.get("correctAnswer")
    const points = formData.get("points")
    console.log(selectedAnswer, correctAnswer, points)
    if (selectedAnswer === ""){
        return
    }
  
  if (selectedAnswer === correctAnswer){

    const session = await getIronSession<SessionData>(cookies(), sessionOptions);
    const prevScore = session.score ?? 0
    const newScore = prevScore + Number(points)
    session.score = newScore;
        
    const uri = process.env.MONGODB_URI as string
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });

    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db = await client.db('Transfer'); // replace with your database nameexport 
    await db.collection('Users-Metadata').updateOne(
        { userId: new ObjectId(session.userId) },
        { $set: { score: newScore } }
      );
      
    await session.save();
    return {response: "Correct Answer!"}
    } else{
        return {response: "Incorrect Answer!"}
    }
  
  }