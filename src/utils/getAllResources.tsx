import axios from "axios";
import { IResourceArray } from "../Interfaces/Interfaces";
import serverUrl from "./serverUrl";

const getAllResources = async (
  setResourcesArray: React.Dispatch<React.SetStateAction<IResourceArray[]>>
): Promise<void> => {
  const response = await axios.get(`${serverUrl}/resources`);
  const allResources: IResourceArray[] = await response.data;
  setResourcesArray(allResources);
};

export default getAllResources;
