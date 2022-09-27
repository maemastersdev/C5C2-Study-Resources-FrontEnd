import { IResourceArray } from "../Interfaces/Interfaces";

const filterResourceArrayBySearch = (
  searchTerm: string,
  resourceArray: IResourceArray[]
): IResourceArray[] => {
  const filteredArray = resourceArray.filter((item) =>
    Object.values(item).indexOf(searchTerm) > -1 ? false : true
  );

  console.log("this is the filtered array ", filteredArray);

  return filteredArray;
};

// They can search resources to find those that contain a given string in their name, description, tags, or author.

export default filterResourceArrayBySearch;
