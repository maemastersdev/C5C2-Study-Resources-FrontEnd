// <------- Import things we need ---------->
import React, { useEffect, useState } from "react";
import axios from "axios";
import serverUrl from "../../utils/serverUrl";
import getAllLikes from "../../utils/getAllLikes";

interface ILikesAndDislikes {
  resource_id: number;
}

export default function LikesDislikes({
  resource_id,
}: ILikesAndDislikes): JSX.Element {
  const [resourceLikes, setResourceLikes] = useState<number>(0);

  useEffect(() => {
    getAllLikes(resource_id, setResourceLikes);
  }, [resource_id, resourceLikes]);

  const likeResource = async (resource_id: number) => {
    await axios.put(`${serverUrl}/like/${resource_id}`, {
      resource_id: resource_id,
    });
    await getAllLikes(resource_id, setResourceLikes);
    console.log(resourceLikes);
  };

  const dislikeResource = async (resource_id: number) => {
    await axios.put(`${serverUrl}/dislike/${resource_id}`, {
      resource_id: resource_id,
    });
    await getAllLikes(resource_id, setResourceLikes);
    console.log(resourceLikes);
  };

  return (
    <>
      <div className="likes_container">
        {/* <p> {resourceLikes} </p> */}
        <button
          className="glow-on-hover"
          style={{ width: "6.9rem", height: "2rem", marginBottom: "0.5rem" }}
          type="button"
          onClick={() => likeResource(resource_id)}
        >
          Like
        </button>
        <b>{resourceLikes}</b>
        <button
          className="glow-on-hover"
          style={{ width: "6.9rem", height: "2rem", marginBottom: "0.5rem" }}
          type="button"
          onClick={() => dislikeResource(resource_id)}
        >
          Dislike
        </button>
      </div>
    </>
  );
}
