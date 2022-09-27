import { Modal } from "antd";
import React, { useState } from "react";
import ResourceSubmissionForm from "../ResourceSubmissionForm/ResourseSubmissionForm";

import "./BaseModal.css";

interface IBaseModal {
  currentAcitveUser: string;
  setCurrentActiveUser: React.Dispatch<React.SetStateAction<string>>;
}

const BaseModal = ({
  currentAcitveUser,
  setCurrentActiveUser,
}: IBaseModal): JSX.Element => {
  const [open, setOpen] = useState(false);

  const ShowUtilities = currentAcitveUser.length > 0;

  const signOutUser = () => {
    setCurrentActiveUser("");
    console.log("You have been logged out");
  };

  const LogInUser = () => {
    setCurrentActiveUser("Neo");
    console.log("You have been been logged In");
  };

  return (
    <>
      {!ShowUtilities ? (
        <button
          className="glow-on-hover"
          type="button"
          onClick={() => LogInUser()}
        >
          Log In
        </button>
      ) : (
        <>
          <button
            className="glow-on-hover"
            type="button"
            onClick={() => setOpen(true)}
          >
            Submit A Post
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
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        bodyStyle={{ height: "700px" }}
        footer={null}
      >
        <ResourceSubmissionForm user_id={"1"} user_name={"Neo"} />
      </Modal>
    </>
  );
};

export default BaseModal;
