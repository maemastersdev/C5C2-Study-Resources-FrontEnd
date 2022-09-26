import { Button, Modal } from "antd";
import React, { useState } from "react";
import ResourceSubmissionForm from "../ResourceSubmissionForm/ResourseSubmissionForm";

const BaseModal: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Submit Post
      </Button>
      <Modal
        title="New Post Submission"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        bodyStyle={{ height: "600px" }}
      >
        <ResourceSubmissionForm user_id={"1"} user_name={"Neo"} />
      </Modal>
    </>
  );
};

export default BaseModal;
