import axios from "axios";
import { IResourceArray } from "../Interfaces/Interfaces";
import serverUrl from "./serverUrl";

const exitStudyList = async (
  setResourcesArray: React.Dispatch<React.SetStateAction<IResourceArray[]>>,
  setShowingStudyList: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> => {
  const response = (await axios.get(`${serverUrl}/resources`)).data;

  setResourcesArray(response);
  setShowingStudyList(false);
};

export default exitStudyList;
