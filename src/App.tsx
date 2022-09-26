/*----------------Importing React Components-------------------------*/

import { Grid, BaseModal } from "./components/index";
import PageHeader from "./components/PageHeader/PageHeader";

//Need to lift state for the following :
//user_id,
//user_name
//

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      <BaseModal />
      <Grid />
    </>
  );
}

export default App;
