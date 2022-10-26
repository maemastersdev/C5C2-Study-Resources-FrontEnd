import axios from "axios";
import { singleResource } from "../Interfaces/Interfaces";
import serverUrl from "./serverUrl";

const blankPage = {
  resource_id: 404,
  resource_name: "Nothing Found",
  author_name: "Nothing Found",
  url: "Nothing Found",
  content_type: "Nothing Found",
  learning_stage: "Nothing Found",
  date: "Nothing Found",
  user_name: "Nothing Found",
  review: "Nothing Found",
  thumbnail: "Nothing Found",
  likes: 404,
};

const getSingleResource = async (
  resourceId: string | undefined,
  setResource: React.Dispatch<React.SetStateAction<singleResource>>
): Promise<void> => {
  const response = (await axios.get(`${serverUrl}/resource/${resourceId}`))
    .data;

  if (response.length === 0) {
    setResource(blankPage);
  } else {
    const singleResource: singleResource = await response[0];
    setResource(singleResource);
  }
};

export default getSingleResource;
