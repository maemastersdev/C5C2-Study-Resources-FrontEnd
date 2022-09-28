/*----------------Importing React Components-------------------------*/

import { useState } from "react";
import { Grid, BaseModal } from "./components/index";
import PageHeader from "./components/PageHeader/PageHeader";
import SignIn from "./components/SignInComponent/SignIn";



/*Need to add state and props  for the following :
const [loginActive, setLoginActive]
user_id,
user_name 

*/

function App(): JSX.Element {

  const [user, setUser] = useState("");
  const [loginActive, setLoginActive]= useState<boolean>(false);

  return (
    <>
      <PageHeader />
      <BaseModal />
      <SignIn setUser={setUser} />
      <Grid />
    </>
  );
}

export default App;
