/*--------IMPORT FROM REAT-----------------*/
import React, { useEffect } from "react";
/*--------STYLING IMPORT -----------------*/
import "./Grid.scss";
/*--------EXTERNAL LIBRARIES -----------------*/

/*--------UTILITY FUNCTIONS -----------------*/
import { getAllResources } from "../../utils/index";

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
        <button>post1</button>
        <button>post2</button>
        <button>post3</button>
        <button>post4</button>
        <button>post5</button>
      </div>
    </div>
  );
};

export default Grid;
