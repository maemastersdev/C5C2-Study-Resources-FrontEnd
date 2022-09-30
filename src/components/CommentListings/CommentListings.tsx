import { Comment, List, Tooltip } from "antd";
import React from "react";
import { IComment } from "../../Interfaces/Interfaces";

interface ICommentListings {
  resourceComments: IComment[];
  children: React.ReactNode;
}

const CommentListings = ({
  resourceComments,
  children,
}: ICommentListings): JSX.Element => {
  // console.log(resourceComments)
  const commentArray = resourceComments.map((item) => {
    return {
      author: item.user_name,
      avatar: "https://cdn-icons-png.flaticon.com/512/1045/1045191.png",
      content: <p>{item.comment}</p>,
      datetime: (
        <Tooltip title="2016-11-22 11:22:33">
          <span>{item.date}</span>
        </Tooltip>
      ),
    };
  });

  return (
    <List
      className="comment-list"
      header={`${commentArray.length} replies`}
      itemLayout="horizontal"
      dataSource={commentArray}
      renderItem={(item) => (
        <li>
          <Comment
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    />
  );
};

export default CommentListings;
