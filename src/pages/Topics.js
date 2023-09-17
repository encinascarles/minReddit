import { createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import getRedditData from "../util/redditAPI";
import style from "./Topics.module.css";
import NavBar from "../components/NavBar/NavBar";
import NavDrawer from "../components/NavDrawer/NavDrawer";
import TopicsContainer from "../components/TopicsContainer/TopicsContainer";
import { setTopics } from "../components/TopicsContainer/topicsSlice";


export default function Topics() {
    const {id}= useParams()
    const dispatch = useDispatch()
    
    
    useEffect( () => {
        getRedditData(id)
        .then(res => {
            dispatch(setTopics(res))
        })
    },[])

    return (
        <div className={style.messagesContainer}>
            <NavDrawer />
            <TopicsContainer />
        </div>
    );
}