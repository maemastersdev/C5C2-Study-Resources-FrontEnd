import axios from "axios";
import serverUrl from "./serverUrl";

const hasResourceBeenLiked = async (
  currentActiveUser: string,
  resource_id: number
): Promise<boolean> => {
  const response: boolean = await (
    await axios.get(`${serverUrl}/hasLiked/${currentActiveUser}/${resource_id}`)
  ).data;
  return response;
};
export default hasResourceBeenLiked;
