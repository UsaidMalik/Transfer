"use client";
import { useState, useEffect } from "react"

async function getData(userID:string) {
    const res = await fetch(`https://transfer-sand.vercel.app/user/${userID}/api`)
    if (!res.ok) return "ERRROR";
    return res.json()
}

export default  function Page( { params }: { params: { username: string } } ) {
    const userID = params.username
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(userID);
            setUsername(data.username);
        }
        fetchData();
    }, [userID]); // from bing chat

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const newUserName = event.target.username.value;
        const res = await fetch(`/user/${userID}/api`, {
            method: 'POST',
            body: JSON.stringify({ username: newUserName, userId: userID }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (res.ok) {
            setUsername(newUserName);
        }
    } // got this from bing chat

    return (
        <div>
            <span className='text-black'>My user name is {username}</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Change User Name" name="username"/>
                <input type="hidden" name="userId" value={userID}  />
                <input type="submit"/>
            </form>
        </div>
    )
}
