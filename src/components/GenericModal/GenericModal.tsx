import { Modal } from "antd";
import React, { useState } from "react";

import { BiCommentDots } from "react-icons/bi";

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
      <button
        className="glow-on-hover"
        style={{ width: "2rem", height: "2rem", marginTop: "0.5rem" }}
        onClick={showModal}
      >
        <BiCommentDots />
      </button>
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
