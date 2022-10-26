import { IResourceArray } from "../Interfaces/Interfaces";

const filterGridBySearchTerm = (
  resourcesArray: IResourceArray[],
  filterSearchTerm: string
): IResourceArray[] => {
  const searchFilteredArray = resourcesArray.filter((item) => {
    const nameCheck =
      item["resource_name"]
        ?.toLowerCase()
        ?.includes(filterSearchTerm.toLowerCase()) && 1;
    const authourCheck =
      item["author_name"]
        ?.toLowerCase()
        .includes(filterSearchTerm.toLowerCase()) && 1;
    const review =
      item["author_name"]
        ?.toLowerCase()
        .includes(filterSearchTerm.toLowerCase()) && 1;
    const searchMatchArray = [nameCheck, authourCheck, review];

    return searchMatchArray.includes(1);
  });

  return searchFilteredArray;
};

export default filterGridBySearchTerm;
