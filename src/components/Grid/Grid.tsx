/*--------IMPORT FROM REAT-----------------*/
import React, { useEffect } from "react";
/*--------STYLING IMPORT -----------------*/
import "./Grid.scss";
/*--------EXTERNAL LIBRARIES -----------------*/

/*--------UTILITY FUNCTIONS -----------------*/
import getAllResources from "../../utils/getAllResources";

/*--------REACT COMPONENT-----------------*/
import { ResourceCard } from "../index";
import { IGrid } from "../../Interfaces/Interfaces";
import filterGridByTags from "../../utils/filterGridByTags";

const Grid = ({
  resourcesArray,
  setResourcesArray,
  tagsArray,
  setTagsArray,
  filterSearchTerm,
  currentActiveUser,
}: IGrid): JSX.Element => {
  useEffect(() => {
    filterGridByTags(resourcesArray, tagsArray);
    getAllResources(setResourcesArray, tagsArray, filterSearchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tagsArray, filterSearchTerm]);

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
            content_type={item.content_type}
            author_name={item.author_name}
            thumbnail={item.thumbnail}
            user_id={item.user_id}
            user_name={item.user_name}
            date={item.date}
            currentActiveUser={currentActiveUser}
            setTagsArray={setTagsArray}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
