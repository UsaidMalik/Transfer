import { db } from '@/app/_lib/db'
import { ObjectId } from 'mongodb'

export async function listNFriends(n: number){
    const Users = await db.collection('Users')
    const usersMetaData = await db.collection("Users-Metadata")
    const nFriends : {name:string, streak:string, score:string}[] = []
    const cursor = await Users.find({});
    let i = 0
    while (await cursor.hasNext() &&  i < n){        
        const user = await cursor.next();
        const userMetadata = await usersMetaData.findOne({userId: new ObjectId(user?._id)})
        const name = user?.username

        const streak = userMetadata?.streak;
        const score = userMetadata?.score
        nFriends.push({name, streak,score})
        i += 1;
    }
    console.log(nFriends)
    return nFriends // the right  
}