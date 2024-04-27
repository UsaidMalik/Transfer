import { db } from "./db";

function calcRank(c: number, x: number, m:number, score:number, 
    days:number){
    return c * score + m * score * days/(days + x)
}

export async function topn(n: number){
    const Users = await db.collection('Users')
    const UsersMeta = await db.collection("Users-Metadata")
    const topn : {name: string, score: number, streak: number, ranking: number}[]= []
    const x = 1 // kick in time for the formula
    const m = 2 // how much the streak helps
    const c = 1.5 // how much the score itself is weighted
    
    // ranking = c* score + m*score*days/(days + x) this only kicks in after x days
    // where x > 1 m is how much the multiplier should be for the streak
    // if score goes up then the user should get more ranking
    // if the days go up but the score doesnt the user should decrease in reanking
    // if the days resets back to 1 the user should lose much of their boosted ranking
    //

    const cursor = await UsersMeta.find({});
    while (await cursor.hasNext()){
        
        const userMetaData = await cursor.next();
        // Assuming 'score' and 'days' are fields in your Users collection
        const score = userMetaData?.score;
        const days = userMetaData?.streak;
        const ranking = calcRank(c, x, m, score, days);
        // Add user and ranking to topn array

        // check if its fulll or if its lower than the lowest user
        if (topn.length > n){
            // condition assumes array always sorted with right most element smallest
            if (ranking > topn[n - 1].ranking){
                const user = await Users.findOne({_id: userMetaData?.userId})
                const userName = user?.username
                topn[n - 1] = {name: userName, score: score, streak: days, ranking: ranking}
                topn.sort((a, b) => b.ranking - a.ranking);
                // re sort to finf the proper ranks
            }  
        }else{
            const user = await Users.findOne({_id: userMetaData?.userId})
            const userName = user?.username
            topn.push({name: userName, score: score, streak: days, ranking: ranking});
            topn.sort((a, b) => b.ranking - a.ranking);
        }
    }

    // Sort the topn array based on ranking

    // Return the top 'n' users   
    return topn // the right  
}