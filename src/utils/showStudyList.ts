import axios from "axios";
import { IResourceArray, IStudyList } from "../Interfaces/Interfaces";
import serverUrl from "./serverUrl";

const showStudyList = async (
  currentActiveUser: string,
  setResourcesArray: React.Dispatch<React.SetStateAction<IResourceArray[]>>,
  currentUserStudyList: Promise<IStudyList[]>
): Promise<void> => {
  const response = (await axios.get(`${serverUrl}/resources`)).data;

  const studyListResoureArrayId = (await currentUserStudyList).map(
    (item: IStudyList) => item.resource_id
  );

  const studyListArray = response.filter((item: IResourceArray) =>
    studyListResoureArrayId.indexOf(item.resource_id) !== -1 ? true : false
  );

  setResourcesArray(studyListArray);
};

export default showStudyList;
