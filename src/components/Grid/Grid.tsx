/*--------IMPORT FROM REAT-----------------*/
import React, { useEffect } from "react";
/*--------STYLING IMPORT -----------------*/
import "./Grid.scss";
/*--------EXTERNAL LIBRARIES -----------------*/

/*--------UTILITY FUNCTIONS -----------------*/
import { getAllResources } from "../../utils/index";

/*--------REACT COMPONENT-----------------*/
import { ResourceCard } from "../index";

// interface IGrid {
//   children: ReactNode
// }

const Grid = (): JSX.Element => {
  useEffect(() => {
    getAllResources();
  }, []);

  return (
    <div className="Wrapper">
      <div className="Content">
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
    </div>
  );
};

export default Grid;
