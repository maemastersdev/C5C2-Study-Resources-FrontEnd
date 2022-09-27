import { Button, Modal } from "antd";
import React, { useState } from "react";
import ResourceSubmissionForm from "../ResourceSubmissionForm/ResourseSubmissionForm";

import './BaseModal.css'

const BaseModal: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button 
      className="glow-on-hover" 
      type="button"
      onClick={() => setOpen(true)}
      >Submit A Post</button>
       <button 
      className="glow-on-hover" 
      type="button"
      >Log Out</button>
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
