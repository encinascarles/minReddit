import { createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import getRedditData from "../util/redditAPI";



export default function Topics() {
    const {id}= useParams()
    const [data, setData] = useState(null)
    
    useEffect( () => {
        getRedditData(id)
        .then(res => {
            setData(res)
            console.log(res)
        })
    },[])

    return (
        <div>
            <h1>Topics</h1>
            <h1>{data && data[0].title}</h1>
        </div>
    );
}