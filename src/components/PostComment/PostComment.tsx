import { Avatar, Comment, Form, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { IComment } from "../../Interfaces/Interfaces";
import getCommentsForResources from "../../utils/getCommentsForResources";
import serverUrl from "../../utils/serverUrl";

const { TextArea } = Input;

interface EditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  value: string;
}

const Editor = ({ onChange, onSubmit, value }: EditorProps) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <button onClick={onSubmit} className="glow-on-hover">
        Add Comment
      </button>
    </Form.Item>
  </>
);

interface IPostComment {
  resource_id: number;
  currentActiveUser: string;
  setResourceComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}

const PostComment = ({
  resource_id,
  currentActiveUser,
  setResourceComments,
}: IPostComment): JSX.Element => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (): Promise<void> => {
    try {
      await axios.post(`${serverUrl}/comment`, {
        resource_id: resource_id,
        user_name: currentActiveUser,
        comment: commentText,
      });
      console.log("comment submitted");

      await getCommentsForResources(resource_id, setResourceComments);

      setCommentText("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  return (
    <>
      <Comment
        avatar={
          <Avatar
            src="https://cdn-icons-png.flaticon.com/512/2834/2834538.png"
            alt="whale icon"
          />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            value={commentText}
          />
        }
      />
    </>
  );
};

export default PostComment;
