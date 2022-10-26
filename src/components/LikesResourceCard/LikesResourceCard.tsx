// <------- Import things we need ---------->
import React, { useEffect, useState } from "react";
import axios from "axios";
import serverUrl from "../../utils/serverUrl";
import getAllLikes from "../../utils/getAllLikes";
import hasResourceBeenLiked from "../../utils/hasResourceBeenLiked";

interface ILikesAndDislikes {
  currentActiveUser: string;
  resource_id: number;
}

export default function LikesDislikes({
  currentActiveUser,
  resource_id,
}: ILikesAndDislikes): JSX.Element {
  const [resourceLikes, setResourceLikes] = useState<number>(0);

  useEffect(() => {
    getAllLikes(resource_id, setResourceLikes);
  }, [resource_id, resourceLikes]);

  const likeResource = async (resource_id: number) => {
    const hasLiked = await hasResourceBeenLiked(currentActiveUser, resource_id);

    console.log(`Have you already liked this`, hasLiked);

    if (!hasLiked) {
      await axios.put(`${serverUrl}/like/${currentActiveUser}/${resource_id}`, {
        resource_id: resource_id,
      });
      await getAllLikes(resource_id, setResourceLikes);
      console.log(resourceLikes);
    } else {
      alert("you have already liked this post!");
    }
  };
  const dislikeResource = async (resource_id: number) => {
    const hasLiked = await hasResourceBeenLiked(currentActiveUser, resource_id);

    console.log(`Have you already disliked this?`, hasLiked);

    if (hasLiked) {
      await axios.put(
        `${serverUrl}/dislike/${currentActiveUser}/${resource_id}`,
        {
          resource_id: resource_id,
        }
      );
      await getAllLikes(resource_id, setResourceLikes);
      console.log(resourceLikes);
    } else {
      alert("Have a heart you've already disliked this one!");
    }
  };

  return (
    <>
      <div className="likes_container">
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
