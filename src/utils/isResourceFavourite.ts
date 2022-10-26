import axios from "axios";
import serverUrl from "./serverUrl";

const isResourceFavourite = async (
  resource_id: number,
  currentActiveUser: string
): Promise<boolean> => {
  const response: boolean = await (
    await axios.get(`${serverUrl}/getFav/${currentActiveUser}/${resource_id}`)
  ).data;

  return response;
};

export default isResourceFavourite;
