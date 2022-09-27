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
  console.log("The current search term is", filterSearchTerm);

  return (
    <>
      <PageHeader
        setFilterSearchTerm={setFilterSearchTerm}
        filterSearchTerm={filterSearchTerm}
      />
      <Grid />
    </>
  );
}

export default App;
