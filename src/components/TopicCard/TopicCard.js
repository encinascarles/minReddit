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
      <h1>prova</h1>
     <h1>{data.title}</h1>
    </div>
  );
}
