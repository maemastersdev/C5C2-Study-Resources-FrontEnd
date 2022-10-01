/*----------------Importing React Components-------------------------*/
import { useEffect, useState } from "react";
import { Grid, PageHeader } from "../index";
import { IResourceArray } from "../../Interfaces/Interfaces";


function Home(): JSX.Element {
  const [filterSearchTerm, setFilterSearchTerm] = useState("");
  const [currentActiveUser, setCurrentActiveUser] = useState("");
  const [tagsArray, setTagsArray] = useState<string[]>([]);
  const [postTagsArray, setPostTagsArray] = useState<string[]>([]);
  const [resourcesArray, setResourcesArray] = useState<IResourceArray[]>([]);

  useEffect(() => {
    const data = window.localStorage.getItem("CURRENT_USER");
    if (data !== null) setCurrentActiveUser(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "CURRENT_USER",
      JSON.stringify(currentActiveUser)
    );
  }, [currentActiveUser]);

  return (
    <>
      <PageHeader
        setFilterSearchTerm={setFilterSearchTerm}
        filterSearchTerm={filterSearchTerm}
        currentActiveUser={currentActiveUser}
        setCurrentActiveUser={setCurrentActiveUser}
        tagsArray={tagsArray}
        setTagsArray={setTagsArray}
        postTagsArray={postTagsArray}
        setPostTagsArray={setPostTagsArray}
        setResourcesArray={setResourcesArray}
      />
      <Grid
        resourcesArray={resourcesArray}
        setResourcesArray={setResourcesArray}
        tagsArray={tagsArray}
        setTagsArray={setTagsArray}
        filterSearchTerm={filterSearchTerm}
        currentActiveUser={currentActiveUser}
      />
    </>
  );
}

export default Home;
