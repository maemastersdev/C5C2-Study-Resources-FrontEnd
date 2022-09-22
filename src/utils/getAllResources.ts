import axios from "axios";

const getAllResources = async (): Promise<void> => {
  const allResources = await (
    await axios.get("https://c5c2-study-resources.herokuapp.com/resources")
  ).data;

  return allResources;
};

export default getAllResources;
