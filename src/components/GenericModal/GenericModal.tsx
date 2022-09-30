import { Button, Modal } from "antd";
import React, { useState } from "react";

interface IGenericModal {
  children: React.ReactNode;
}

const GenericModal = ({ children }: IGenericModal): JSX.Element => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Comments
      </Button>
      <Modal
        open={open}
        title="Comments"
        onCancel={handleCancel}
        width={"50%"}
        bodyStyle={{ height: "80vh" }}
        style={{ top: 20 }}
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
};

export default GenericModal;
