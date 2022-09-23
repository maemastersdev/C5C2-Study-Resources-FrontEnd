import React, { useEffect, useState } from "react";
/*------------STYLING IMPORT -----------------------*/
import "./ResourceCard.scss";
/*------------ASSET IMPORT-----------------------*/

import spacePictures from "../../assets/images/spacePictures";
import {
  IResourceArray,
  ITagsArray,
  IUserName,
} from "../../Interfaces/Interfaces";
import axios from "axios";
import serverUrl from "../../utils/serverUrl";
import getRandomProperty from "../../utils/getRandomPropery";

const ResourceCard = ({
  resource_id,
  resource_name,
  review,
  url,
  author_name,
  thumbnail,
  user_id,
}: IResourceArray): JSX.Element => {
  const [tagsList, setTagsList] = useState<ITagsArray[]>([]);
  const [randomIndex, setRandomIndex] = useState("");
  const [currentUserName, setCurrentUserName] = useState<IUserName>();

  useEffect(() => {
    const getTagsForResource = async (): Promise<void> => {
      const response = await axios.get(`${serverUrl}/tags/${resource_id}`);
      const tags: ITagsArray[] = await response.data;
      setTagsList(tags);
    };
    const getSingleUserName = async (): Promise<void> => {
      const response = await axios.get(`${serverUrl}/user/${user_id}`);
      const nameResponse = await response.data;
      setCurrentUserName(nameResponse);
    };

    getTagsForResource();
    getSingleUserName();
    setRandomIndex(getRandomProperty(spacePictures));
  }, [resource_id, user_id]);

  return (
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
              <p className="user_name">
                Posted by {currentUserName?.user_name}{" "}
              </p>
            </div>
          </a>
        </div>

        <div className="body_post">
          <div className="post_content">
            <h1>{resource_name}</h1>
            <p>{review}</p>

            <div className="container_infos">
              <div className="postedBy">
                <span>author</span>
                {author_name}
              </div>
              <div className="container_tags">
                <span>tags</span>
                <div className="tags">
                  <ul>
                    {tagsList.map((tag) => (
                      <li key={tag.unique_tag_id}>{tag.tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
