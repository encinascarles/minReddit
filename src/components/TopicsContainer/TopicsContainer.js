import React from "react";
import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";

export default function TopicsContainer() {
    const data = useSelector(selectTopics);
    return (
    <div>
        <h1>{data[0] && data[0].title}</h1>
    </div>
    );
}