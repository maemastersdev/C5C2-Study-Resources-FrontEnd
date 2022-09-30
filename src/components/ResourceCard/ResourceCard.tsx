import React, { useEffect, useState } from "react";
/*------------STYLING IMPORT -----------------------*/
import "./ResourceCard.scss";
/*------------ASSET IMPORT-----------------------*/

import spacePictures from "../../assets/images/spacePictures";
import { IResourceArray, ITagsArray } from "../../Interfaces/Interfaces";
import axios from "axios";
import serverUrl from "../../utils/serverUrl";
import getRandomProperty from "../../utils/getRandomPropery";
import formatDate from "../../utils/dateFormatting";
import GenericModal from "../GenericModal/GenericModal";

const ResourceCard = ({
  resource_id,
  resource_name,
  review,
  url,
  content_type,
  author_name,
  thumbnail,
  user_name,
  date,
}: IResourceArray): JSX.Element => {
  const [tagsList, setTagsList] = useState<ITagsArray[]>([]);
  const [randomIndex, setRandomIndex] = useState("");

  useEffect(() => {
    const getTagsForResource = async (): Promise<void> => {
      const response = await axios.get(`${serverUrl}/tags/${resource_id}`);
      const tags: ITagsArray[] = await response.data;
      setTagsList(tags);
    };

    getTagsForResource();
    setRandomIndex(getRandomProperty(spacePictures));
  }, [resource_id]);

  return (
    <>
     <div className="container">
      <div className="post">
        <div className="header_post">
          <a href={url} rel="noreferrer" target="_blank">
            <img
              src={
                thumbnail
                  ? thumbnail
                  : spacePictures[randomIndex as keyof typeof spacePictures]
              }
              alt="thumbnail"
            />
            <div>
              <b className="user_name">
                Posted by {user_name}
                <br />
                {formatDate(date)}
                <br />
                {`Author: ${author_name}`}
              </b>
            </div>
          </a>
        </div>

        <div className="body_post">
          <div className="post_content">
            <b>
              {resource_name} ({content_type}) :
            </b>
            <p>{review}</p>

            <div className="container_infos">
              <div className="tags__list">
                <b>Tags:</b>
                <ul>
                  {tagsList.map((tag) => (
                    <ul key={tag.unique_tag_id}>
                      <b>{tag.tag} |</b>
                    </ul>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="comment_container" >
        <GenericModal/>
      </div>
    </div>
    </>
   
    
  );
};

export default ResourceCard;
