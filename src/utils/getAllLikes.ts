import axios from "axios";
import serverUrl from "./serverUrl";

interface ILikes {
  likes: number;
}

async function getAllLikes(
  resource_id: number,
  setResourceLikes: React.Dispatch<React.SetStateAction<number>>
): Promise<void> {
  const response = await axios.get(`${serverUrl}/likes/${resource_id}`);
  const allLikesArr: ILikes[] = await response.data;
  const allLikes = allLikesArr[0];
  setResourceLikes(allLikes.likes);
}

export default getAllLikes;
