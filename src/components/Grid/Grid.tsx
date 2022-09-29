/*--------IMPORT FROM REAT-----------------*/
import React, { useEffect} from "react";
/*--------STYLING IMPORT -----------------*/
import "./Grid.scss";
/*--------EXTERNAL LIBRARIES -----------------*/

/*--------UTILITY FUNCTIONS -----------------*/
import getAllResources from "../../utils/getAllResources";

/*--------REACT COMPONENT-----------------*/
import { ResourceCard } from "../index";
import { IGrid } from "../../Interfaces/Interfaces";



const Grid = ({resourcesArray, setResourcesArray} : IGrid): JSX.Element => {
 

  useEffect(() => {
    getAllResources(setResourcesArray);
  }, [setResourcesArray]);

  return (
    <div className="Wrapper">
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
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
