import { Button, Modal } from "antd";
import React, { useState } from "react";
import ResourceSubmissionForm from "../ResourceSubmissionForm/ResourseSubmissionForm";

const BaseModal: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => setOpen(true)}
        shape="round"
        style={{
          background: "rgba(198, 40, 200, 0.5)",
          borderColor: "rgba(41, 12, 41, 0.5)",
          color: "black",
          height:"50px"
        }}
      >
        Submit Post
      </Button>

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
