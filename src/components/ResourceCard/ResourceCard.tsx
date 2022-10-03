import React, { useEffect, useState } from "react";
/*------------STYLING IMPORT -----------------------*/
import "./ResourceCard.scss";
/*------------ASSET IMPORT-----------------------*/

import spacePictures from "../../assets/images/spacePictures";
import {
  IComment,
  IResourceArray,
  ITagsArray,
} from "../../Interfaces/Interfaces";
import axios from "axios";
import serverUrl from "../../utils/serverUrl";
import getRandomProperty from "../../utils/getRandomPropery";
import GenericModal from "../GenericModal/GenericModal";

import { CommentListings, LikesResourceCard, PostComment } from "../index";
import getCommentsForResources from "../../utils/getCommentsForResources";
import { VscExpandAll } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import addOrRemoveToFavourites from "../../utils/addOrRemoveToFavourites";
import isResourceFavourite from "../../utils/isResourceFavourite";
import moment from "moment";

const ResourceCard = ({
  resource_id,
  resource_name,
  review,
  url,
  content_type,
  learning_stage,
  author_name,
  thumbnail,
  user_name,
  date,
  currentActiveUser,
  setTagsArray,
}: IResourceArray): JSX.Element => {
  const [tagsList, setTagsList] = useState<ITagsArray[]>([]);
  const [randomIndex, setRandomIndex] = useState("");
  const [resourceComments, setResourceComments] = useState<IComment[]>([]);
  const [favResource, setFavResource] = useState<Promise<boolean>>(
    isResourceFavourite(resource_id, currentActiveUser)
  );

  useEffect(() => {
    const getTagsForResource = async (): Promise<void> => {
      const response = await axios.get(`${serverUrl}/tags/${resource_id}`);
      const tags: ITagsArray[] = await response.data;
      setTagsList(tags);
    };

    getTagsForResource();
    getCommentsForResources(resource_id, setResourceComments);
    setRandomIndex(getRandomProperty(spacePictures));
  }, [resource_id, setResourceComments]);

  return (
    <>
      <div className="container_card">
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
                  {moment(date).fromNow()}
                  <br />
                  {`Author: ${author_name}`}
                  <br />{" "}
                  {learning_stage.length <= 2
                    ? `Reccomended Week : ${learning_stage}`
                    : learning_stage}
                </b>
              </div>
            </a>
          </div>
          <div className="body_post">
            <div className="post_content">
              <b>
                {resource_name} ({content_type}):
              </b>
              <p>{review}</p>
              <div className="container_infos">
                <div className="tags__list">
                  <ul>
                    <b>Tags:</b>
                    {tagsList.map((tag) => (
                      <li key={tag.unique_tag_id}>
                        <b>{tag.tag} |</b>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="top-buttons">
            <GenericModal>
              <CommentListings resourceComments={resourceComments}>
                {/* Gonna put the child map here */}
              </CommentListings>
              {currentActiveUser.length > 0 && (
                <PostComment
                  resource_id={resource_id}
                  currentActiveUser={currentActiveUser}
                  setResourceComments={setResourceComments}
                />
              )}
            </GenericModal>
            <button
              className="glow-on-hover"
              style={{ width: "2rem", height: "2rem", marginTop: "0.5rem" }}
              onClick={() => window.open(`/study/${resource_id}`, "_blank")}
            >
              <VscExpandAll />
            </button>
            <button
              className="glow-on-hover"
              style={{ width: "2rem", height: "2rem", marginTop: "0.5rem" }}
              onClick={async () => {
                await addOrRemoveToFavourites(
                  resource_id,
                  currentActiveUser,
                  setFavResource,
                  await favResource
                );
                setFavResource(
                  isResourceFavourite(resource_id, currentActiveUser)
                );
              }}
            >
              {}
              <FaRegHeart />
            </button>
          </div>
        </div>
        <div className="likes_wrapper">
          {currentActiveUser.length > 0 && (
            <LikesResourceCard resource_id={resource_id} />
          )}
        </div>
      </div>
    </>
  );
};

export default ResourceCard;
