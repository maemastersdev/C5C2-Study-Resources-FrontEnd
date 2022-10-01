import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IComment, singleResource } from "../../Interfaces/Interfaces";
import getCommentsForResources from "../../utils/getCommentsForResources";
import getSingleResource from "../../utils/getSingleResource";
import CommentListings from "../CommentListings/CommentListings";
import GenericModal from "../GenericModal/GenericModal";
import PostComment from "../PostComment/PostComment";
import { AiOutlineHome } from "react-icons/ai";
import { MdLaunch } from "react-icons/md";

import "./SingleResourcePage.css";

const blankPage = {
  resource_id: 404,
  resource_name: "Nothing Found",
  author_name: "Nothing Found",
  url: "Nothing Found",
  content_type: "Nothing Found",
  learning_stage: "Nothing Found",
  date: "Nothing Found",
  user_name: "Nothing Found",
  review: "Nothing Found",
  thumbnail: "Nothing Found",
  likes: 404,
};

const SingleResourcePage = (): JSX.Element => {
  const [resource, setResource] = useState<singleResource>(blankPage);
  const [currentActiveUser, setCurrentActiveUser] = useState("");
  const [resourceComments, setResourceComments] = useState<IComment[]>([]);
  const { resourceId } = useParams();

  useEffect(() => {
    const data = window.localStorage.getItem("CURRENT_USER");
    if (data !== null) setCurrentActiveUser(JSON.parse(data));

    async function getData() {
      await getSingleResource(resourceId, setResource);
      getCommentsForResources(Number(resourceId), setResourceComments);
    }

    getData();
  }, [resourceId, setResource]);

  const postInformation: singleResource = resource;

  return (
    <div className="resource-page">
      <aside className="resource-card">
        <div className="resource-left">
          <img src={postInformation.thumbnail} alt="thumbnail" />
        </div>
        <div className="resource-right">
          <h2 style={{ marginTop: "1rem" }}>
            <b>Welcome {currentActiveUser}</b>
          </h2>
          <hr />
          <h2>
            <b>
              {postInformation.resource_name} ({postInformation.content_type})
            </b>
          </h2>
          <p>{postInformation.review}</p>
          <p>This Post has {postInformation.likes} likes </p>
          <p> Orignally Posted by: {postInformation.user_name}</p>
          <p>Author : {postInformation.author_name}</p>
          <p>
            Posted on:{" "}
            {moment(postInformation.date).format("MMMM Do YYYY, h:mm:ss a")} (
            {moment(postInformation.date).fromNow()})
          </p>
          <div className="utility_buttons">
            <button
              className="glow-on-hover"
              style={{ width: "2rem", height: "2rem", marginTop: "0.5rem" }}
              onClick={() => window.open(postInformation.url, "_blank")}
            >
              <MdLaunch />
            </button>
            <button
              className="glow-on-hover"
              style={{ width: "2rem", height: "2rem", marginTop: "0.5rem" }}
              onClick={() => window.open("/", "_blank")}
            >
              <AiOutlineHome />
            </button>
            {currentActiveUser.length > 0 && (
              <>
                <GenericModal>
                  <CommentListings resourceComments={resourceComments}>
                    {/* Gonna put the child map here */}
                  </CommentListings>
                  {currentActiveUser.length > 0 && (
                    <PostComment
                      resource_id={Number(resourceId)}
                      currentActiveUser={currentActiveUser}
                      setResourceComments={setResourceComments}
                    />
                  )}
                </GenericModal>
              </>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SingleResourcePage;
