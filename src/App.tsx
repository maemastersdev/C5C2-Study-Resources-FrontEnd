/*----------------Importing React Components-------------------------*/

import { useState } from "react";
import { Grid } from "./components/index";
import PageHeader from "./components/PageHeader/PageHeader";
import { IResourceArray } from "./Interfaces/Interfaces";

/*Need to add state and props  for the following :
const [loginActive, setLoginActive]
user_id,
user_name 

*/

function App(): JSX.Element {
  const [filterSearchTerm, setFilterSearchTerm] = useState("");
  const [currentActiveUser, setCurrentActiveUser] = useState("");
  const [tagsArray, setTagsArray] = useState<string[]>([]);
  const [postTagsArray, setPostTagsArray] = useState<string[]>([]);
  const [resourcesArray, setResourcesArray] = useState<IResourceArray[]>([]);

  console.log("The user is currently searching for :", filterSearchTerm);
  console.log("The current tag filters are :", tagsArray);

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
        filterSearchTerm={filterSearchTerm}
      />
    </>
  );
}

export default App;
