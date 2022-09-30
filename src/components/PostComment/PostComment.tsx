import { Avatar, Button, Comment, Form, Input, List } from "antd";
import moment from "moment";
import React, { useState } from "react";

const { TextArea } = Input;

interface CommentItem {
  author: string;
  avatar: string;
  content: React.ReactNode;
  datetime: string;
}

interface EditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  submitting: boolean;
  value: string;
}

const CommentList = ({ comments }: { comments: CommentItem[] }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }: EditorProps) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const PostComment = (): JSX.Element => {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: "Han Solo",
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbpEaVa7EHgQCm4KI7JDt7DVwgI5O-L8smRg&usqp=CAU",
          content: <p>{value}</p>,
          datetime: moment("2016-11-22").fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={
          <Avatar src="https://cdn-icons-png.flaticon.com/512/2834/2834538.png" alt="whale icon" />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </>
  );
};

export default PostComment;
