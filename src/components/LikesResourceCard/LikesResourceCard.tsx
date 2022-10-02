// <------- Import things we need ---------->
import React, { useEffect, useState } from "react";
import axios from "axios";
import serverUrl from "../../utils/serverUrl";

interface ILikesAndDislikes {
  resource_id: number | null ;
}

interface ILikes {
  likes: number;
}

export default function LikesDislikes({
  resource_id,
}: ILikesAndDislikes): JSX.Element {
  const [resourceLikes, setResourceLikes] = useState<number>(0);



  useEffect(() => {   
    
    async function getAllLikes(): Promise<void> {
    const response = await axios.get(`${serverUrl}/likes/${resource_id}`);
    const allLikesArr: ILikes[] = await response.data;
    const allLikes = allLikesArr[0]
    setResourceLikes(allLikes.likes);
  }

    getAllLikes();}, [resource_id, resourceLikes]);

  const likeResource = async (resource_id: number | null) => {
    await axios.put(`${serverUrl}/like/${resource_id}`, {
      resource_id: resource_id,
    });
    console.log(resourceLikes);
  };

  const dislikeResource = async (resource_id: number |null ) => {
    await axios.put(`${serverUrl}/dislike/${resource_id}`, {
      resource_id: resource_id,
    });
    console.log(resourceLikes);
  };

  return (
    <>
      <p> {resourceLikes} </p>
      <button
        className="glow-on-hover"
        type="button"
        onClick={() => likeResource(resource_id)}
      >
        Like
      </button>

      <button
        className="glow-on-hover"
        type="button"
        onClick={() => dislikeResource(resource_id)}
      >
        Dislike
      </button>
    </>
  );
}
