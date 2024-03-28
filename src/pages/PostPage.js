import axios from "axios";
import React, { useState, useEffect } from "react";

export default function PostPage(){
    const [activePost, setActivePost] = useState({})
    const [activePostId, setActivePostID] = useState(1);

    useEffect(()=> {
        const fetchPost = async (postId) =>{
            const response = await axios.get("https://my-json-server.typicode.com/lurbh/JSONServer/posts/" + postId)
            console.log(response.data);
            setActivePost(response.data);
        }
        fetchPost(activePostId);
    },[activePostId]);

    return (
        <>
            <h1>Post</h1>
            <h3>Active Post</h3>
            <input  type="text"
                    value={activePostId}
                    name="activePostId" 
                    onChange={(e)=>setActivePostID(e.target.value)}
            />
            <div>
                <h4>{activePost.fullName}</h4>
                <h5>{activePost.email}</h5>
                <p>
                    {activePost.message}
                </p>
            </div>
        </>
    )
}