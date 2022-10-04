import { Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { IResourceArray, IStudyList } from "../../Interfaces/Interfaces";
import exitStudyList from "../../utils/exitStudyList";
import serverUrl from "../../utils/serverUrl";
import showStudyList from "../../utils/showStudyList";
import ResourceSubmissionForm from "../ResourceSubmissionForm/ResourseSubmissionForm";
import SignIn from "../SignIn/SignInComponent";

import "./BaseModal.css";

interface IBaseModal {
  currentAcitveUser: string;
  setCurrentActiveUser: React.Dispatch<React.SetStateAction<string>>;
  postTagsArray: string[];
  tagsArray: string[];
  filterSearchTerm: string;
  setFilterSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setPostTagsArray: React.Dispatch<React.SetStateAction<string[]>>;
  setResourcesArray: React.Dispatch<React.SetStateAction<IResourceArray[]>>;
}

const BaseModal = ({
  currentAcitveUser,
  setCurrentActiveUser,
  tagsArray,
  postTagsArray,
  filterSearchTerm,
  setFilterSearchTerm,
  setPostTagsArray,
  setResourcesArray,
}: IBaseModal): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [showingStudyList, setShowingStudyList] = useState(false);

  const ShowUtilities = currentAcitveUser.length > 0;

  const currentUserStudyList = async () => {
    const response: IStudyList[] = (
      await axios.get(`${serverUrl}/favourites/${currentAcitveUser}`)
    ).data;
    return response;
  };

  const signOutUser = () => {
    setCurrentActiveUser("");
    console.log("You have been logged out");
  };

  return (
    <>
      {!ShowUtilities ? (
        // add SignInComponent
        <SignIn
          currentActiveUser={currentAcitveUser}
          setCurrentActiveUser={setCurrentActiveUser}
        />
      ) : (
        <>
          <button
            className="glow-on-hover"
            type="button"
            onClick={() => setOpen(true)}
          >
            Submit A Post
          </button>
         {
          !showingStudyList ?  <button
          className="glow-on-hover"
          type="button"
          onClick={ async () => {
            await showStudyList(
              currentAcitveUser,
              setResourcesArray,
              currentUserStudyList());
              setShowingStudyList(true)
          }}
        >
          Show Study List
        </button> : 
         <button
         className="glow-on-hover"
         type="button"
         onClick={ async () => exitStudyList(setResourcesArray, setShowingStudyList)}
      >
         Exit Study List
       </button>
         }
          <button
            className="glow-on-hover"
            type="button"
            onClick={() => setFilterSearchTerm("")}
          >
            Clear Text Search
          </button>
          <button className="glow-on-hover" type="button" onClick={signOutUser}>
            Log Out
          </button>
        </>
      )}
      <Modal
        title="New Post Submission"
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={1000}
        bodyStyle={{ height: "700px" }}
        footer={null}
      >
        <ResourceSubmissionForm
          user_name={currentAcitveUser}
          setOpen={setOpen}
          postTagsArray={postTagsArray}
          tagsArray={tagsArray}
          filterSearchTerm={filterSearchTerm}
          setPostTagsArray={setPostTagsArray}
          setResourcesArray={setResourcesArray}
        />
      </Modal>
    </>
  );
};

export default BaseModal;
