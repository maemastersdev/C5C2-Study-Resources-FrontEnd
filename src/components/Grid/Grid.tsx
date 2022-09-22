/*--------IMPORT FROM REAT-----------------*/
import React from "react";
/*--------STYLING IMPORT -----------------*/
import "./Grid.scss";
/*--------EXTERNAL LIBRARIES -----------------*/

/*--------UTILITY FUNCTIONS -----------------*/
// import { getAllResources } from "../../utils/index";

/*--------REACT COMPONENT-----------------*/
import { ResourceCard } from "../index";

// interface IGrid {
//   children: ReactNode
// }

// interface IResourceArray {
//   resource_id : number,
//   resource_name : string,
//   author_name : string,
//   url : string,
//   content_type : string,
//   learning_stage : number,
//   date : string,
//   user_id : string,
//   review : string,
//   likes : number,

// }

const Grid = (): JSX.Element => {
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
