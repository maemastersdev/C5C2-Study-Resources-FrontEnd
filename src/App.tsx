/*----------------Importing React Components-------------------------*/

import { useState } from "react";
import { Grid } from "./components/index";
import PageHeader from "./components/PageHeader/PageHeader";

/*Need to add state and props  for the following :
const [loginActive, setLoginActive]
user_id,
user_name 

*/

function App(): JSX.Element {
  const [filterSearchTerm, setFilterSearchTerm] = useState("");
  const [currentActiveUser, setCurrentActiveUser] = useState("");
  const [tagsArray, setTagsArray] = useState<string[]>([]);

  return (
    <>
      <PageHeader
        setFilterSearchTerm={setFilterSearchTerm}
        filterSearchTerm={filterSearchTerm}
        currentActiveUser={currentActiveUser}
        setCurrentActiveUser={setCurrentActiveUser}
        tagsArray={tagsArray}
        setTagsArray={setTagsArray}
      />
      <Grid />
    </>
  );
}

export default App;
