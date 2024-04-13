import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const maxDuration = 10;

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = process.env.DATABASE
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function POST(
  req: Request,
) {
  const formData = await req.json();
  const newUserName = formData.username as string;
  const userId = formData.userId as string; // assuming you're getting userId from form 
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
 
    const db = client.db('Transfer'); // replace with your database name
    const collection = db.collection('Users'); // replace with your collection name
  
    const query = { _id: new ObjectId(userId) };
    const update = {
      $set: {
        "username": newUserName
      },
    };
    
    console.log(newUserName)
    const result = await collection.updateOne(query, update);

    console.log(`Successfully updated the document: ${result}, ${query}, ${update}`);
  
    console.log(userId)
    redirect(`/user/${userId}/`)

  } finally {
    // Ensures that the client will close when you finish/error
    client.close()
  }
 
}


export async function GET(
  req: Request,
  { params }: { params: { username: string } }
) {
  try{
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    const db = client.db('Transfer'); // replace with your database name
    const collection = db.collection('Users'); // replace with your collection name
    const userId = params.username;
    console.log(userId)
    const query = { _id: new ObjectId(userId) };
    const username = await (collection.findOne(query));

    return Response.json(username)
  }
  catch(error){
    return new NextResponse("Error getting username" + error, {status:500})
  }
}