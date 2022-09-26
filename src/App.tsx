/*----------------Importing React Components-------------------------*/
import { Grid, ResourceSubmissionForm } from "./components/index";

function App(): JSX.Element {
  return (
    <>
      <Grid />
      <ResourceSubmissionForm user_id={"1"} user_name={"Neo"} />
    </>
  );
}

export default App;
