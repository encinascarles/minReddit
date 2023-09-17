import { Avatar, Card, CardHeader, CardMedia } from "@mui/material";
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
        <CardHeader
          avatar={data ?
            (<Avatar>
              {data.author[0]}
            </Avatar>) : null
          }
          title={data && data.title}
          subheader = {data && data.author}
        />
        {data && data.thumbnail && (<CardMedia component="img" image={data && data.thumbnail} />)}
        
      </Card>
    </div>
  );
}
