
import {MongoClient, ServerApiVersion, ObjectId} from 'mongodb';

const uri = process.env.DATABASE as string;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(userId:string) {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
  
      const db = client.db('Transfer'); // replace with your database name
      const collection = db.collection('Users'); // replace with your collection name
      console.log(userId)
      const user = await collection.findOne({ _id: new ObjectId(userId)});
      console.log(user)
      if (!user) {
        throw new Error(`User with ID ${userId} not found`);
      }
    return user.username;
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  

export default async function Page({ params }: { params: { username: string } }) {
    //  const [productData, setData] = useState(null);
      const userID : string = params.username
      const myUserName = await run(userID);
      console.log(myUserName)
    return (
        <div>
        <span className='text-black'>My user name is {myUserName}</span>
        <form method="POST" action={`/user/${userID}/api`}>
            <input type="text" placeholder="Change User Name"
            name="username"/>
            <input type="hidden" name="userId" value={userID}  />

            <input type="submit"/>
        </form>
    </div>
    )
}