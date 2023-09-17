import React from "react";
import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";
import TopicCard from "../TopicCard/TopicCard";

export default function TopicsContainer() {
    const data = useSelector(selectTopics);
    return (
    <div>
        <TopicCard data={data[0]} />
    </div>
    );
}