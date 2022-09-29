import { IResourceArray } from "../Interfaces/Interfaces";
import axios from "axios";
import serverUrl from "./serverUrl";

const filterGridByTags = async (
  resourcesArray: IResourceArray[],
  tagsArray: string[]
): Promise<IResourceArray[]> => {
  if (tagsArray.length <= 0) return resourcesArray;

  const keepResourceIndex: boolean[] = [];

  for (const item of resourcesArray) {
    const tagsForSingleResource = (
      await axios.get(`${serverUrl}/tags/${item.resource_id}`)
    ).data;
    const SingleTagsArray = tagsForSingleResource.map(
      (object: { tag: string }) => object.tag
    );
    // console.log(`These are the tags for resource ${item.resource_id}` , tagsForSingleResource);
    // console.log(`These are just the tag values for resource ${item.resource_id}`,tagsArray);
    const containsMatchingTag = tagsArray.some((element) =>
      SingleTagsArray.includes(element)
    );
    // console.log(`The tag array is ${tagsArray} and ${item.resource_id} has a matching tag ? :`, containsMatchingTag)
    keepResourceIndex.push(containsMatchingTag);
    // console.log(keepResourceIndex);
  }
  const filteredTagResources = resourcesArray.filter(
    (singleResource, index) => keepResourceIndex[index]
  );

  //   console.log(filteredTagResources);

  return filteredTagResources;
};

export default filterGridByTags;
