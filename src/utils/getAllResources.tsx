import axios from "axios";
import { IResourceArray } from "../Interfaces/Interfaces";
import serverUrl from "./serverUrl";

import filterGridByTags from "./filterGridByTags";
import filterGridBySearchTerm from "./filterGridBySearchTerm";

const getAllResources = async (
  setResourcesArray: React.Dispatch<React.SetStateAction<IResourceArray[]>>,
  tagsArray: string[],
  filterSearchTerm: string
): Promise<void> => {
  const response = await axios.get(`${serverUrl}/resources`);
  const allResources: IResourceArray[] = await response.data;

  setResourcesArray(
    filterGridBySearchTerm(
      await filterGridByTags(allResources, tagsArray),
      filterSearchTerm
    )
  );
};

export default getAllResources;
