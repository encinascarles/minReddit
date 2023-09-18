import { Avatar, Button, ButtonGroup, Card, CardActions, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

export default function TopicCard(props) {
  const [data, setData] = useState();
  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props.data]);

  function CardMediaProc() {
    if (data.media_type === "image"){
        return <CardMedia component="img" image={data && data.media} />
    } else if (data.media_type === "hosted:video") {
        return <CardMedia component="video" src={data && data.media} controls />
    }

  }

  return (
    <div>
      <Card>
        <CardHeader
          avatar={data ? <Avatar>{data.author[0]}</Avatar> : null}
          title={data && data.title}
          subheader={data && data.author}
        />
        {data && data.thumbnail && (
            <CardMediaProc />
        )}
        <CardActions>
            <ButtonGroup variant="contained" sx={{
                borderRadius: "20px",
                height: "40px",
                alignItems: "center",
            }}>
                <IconButton><ArrowUpwardOutlinedIcon/></IconButton>
                <Typography>{data.ups}</Typography>
                <IconButton><ArrowDownwardOutlinedIcon/></IconButton>
            </ButtonGroup>
            <Button variant="contained" sx={{
                borderRadius: "20px",
                height: "40px",
            }}>
                <Typography>{data.num_comments}</Typography>
                <ChatOutlinedIcon />
            </Button>
        </CardActions>
      </Card>
    </div>
  );
}
