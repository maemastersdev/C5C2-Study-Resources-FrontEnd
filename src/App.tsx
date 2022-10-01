/*----------------Importing React Components-------------------------*/
import { Routes, Route } from "react-router-dom";
import { Home, SingleResourcePage } from "./components/index";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study/:resourceId" element={<SingleResourcePage />} />
      </Routes>
    </>
  );
}

export default App;
