/*--------IMPORT FROM REAT-----------------*/
import React, { useEffect, useState } from "react";
/*--------STYLING IMPORT -----------------*/
import "./Grid.scss";
/*--------EXTERNAL LIBRARIES -----------------*/

/*--------UTILITY FUNCTIONS -----------------*/
// import { getAllResources } from "../../utils/index";

/*--------REACT COMPONENT-----------------*/
import { ResourceCard } from "../index";
import axios from "axios";
import { IResourceArray } from "../../Interfaces/Interfaces";
import serverUrl from "../../utils/serverUrl";

// interface IGrid {
//   children: ReactNode
// }

const Grid = (): JSX.Element => {
  const [resourcesArray, setResourcesArray] = useState<IResourceArray[]>([]);

  async function getAllResources(): Promise<void> {
    const response = await axios.get(`${serverUrl}/resources`);
    const allResources: IResourceArray[] = await response.data;
    setResourcesArray(allResources);
  }

  useEffect(() => {
    getAllResources();
  }, []);

  return (
    <div className="Wrapper">
      <h1 className="Grid__Header">Study Resources</h1>
      <div className="Content">
        {resourcesArray.map((item) => (
          <ResourceCard
            key={item.resource_id}
            resource_id={item.resource_id}
            resource_name={item.resource_name}
            review={item.review}
            url={item.url}
            author_name={item.author_name}
            thumbnail={item.thumbnail}
            user_id={item.user_id}
            user_name={item.user_name}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
