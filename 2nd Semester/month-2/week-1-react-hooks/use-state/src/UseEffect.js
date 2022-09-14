import React, { useEffect, useState } from "react";

export default function UseEffect() {
    const [resourceType, setResourceType] = useState("posts")

    useEffect(() => {
        console.log("rendered")
    }, [])

    return (
        <div>
            <div>
                <button onClick={setResourceType("posts")}>Posts</button>
                <button onClick={setResourceType("users")}>Users</button>
                <button onClick={setResourceType("comments")}>Comments</button>
            </div>
            <h1>{ resourceType }</h1>
        </div>
    )
}