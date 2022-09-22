import axios from "axios";

const getAllResources = async (): Promise<void> => {
  const allResources = await (
    await axios.get("https://c5c2-study-resources.herokuapp.com/resources")
  ).data;
  console.log(allResources);
};

export default getAllResources;
