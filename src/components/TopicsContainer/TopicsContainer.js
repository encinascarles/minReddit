import React from "react";
import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";
import TopicCard from "../TopicCard/TopicCard";
import { Stack } from "@mui/material";

export default function TopicsContainer() {
    const data = useSelector(selectTopics);
    return (
    <div>
        <Stack spacing={2}>
            {data[0] && data.map((info) => (<TopicCard data={info} />))}
        </Stack>
    </div>
    );
}