import { Button, Modal } from "antd";
import React, { useState } from "react";

interface IGenericModal {
  children: React.ReactNode;
}

const GenericModal = ({ children }: IGenericModal): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
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
        onOk={handleOk}
        onCancel={handleCancel}
        width={"50%"}
        bodyStyle={{ height: "70vh" }}
        style={{ top: 20 }}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        {children}
      </Modal>
    </>
  );
};

export default GenericModal;
