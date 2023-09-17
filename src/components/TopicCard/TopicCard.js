import { Card, CardHeader } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function TopicCard(props) {
  const [data, setData] = useState();
  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props.data]);
  return (
    <div>
      <Card>
        <CardHeader title={data&&data.title} />
      </Card>
    </div>
  );
}
