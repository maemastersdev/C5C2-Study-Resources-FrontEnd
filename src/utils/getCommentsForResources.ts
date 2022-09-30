import axios from "axios";
import { IComment } from "../Interfaces/Interfaces";
import serverUrl from "./serverUrl";

const getCommentsForResources = async (resource_id : number, setResourceComments : React.Dispatch<React.SetStateAction<IComment[]>>): Promise<void> => {
    const response = await axios.get(`${serverUrl}/comments/${resource_id}`);
    const comments: IComment[] = await response.data;
    setResourceComments(comments);
  };

  export default getCommentsForResources;