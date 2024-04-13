import { redirect } from "next/navigation";

export const maxDuration = 300;

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

async function run(userId:string, newUserName: string) {
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

    const result = await collection.updateOne(query, update);
    console.log(`Successfully updated the document: ${result}`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function POST(
  req: Request,
) {
  const formData = await req.formData()
  const newUserName = formData.get("username") as string;
  const userId = formData.get("userId") as string; // assuming you're getting userId from form 

  run(userId, newUserName).catch(console.dir); // running data to connect to it
  console.log(userId)
  redirect(`/user/${userId}/`)
}