import { Comment, List, Tooltip } from "antd";
import React from "react";
import { IComment } from "../../Interfaces/Interfaces";
import moment from "moment";



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
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbpEaVa7EHgQCm4KI7JDt7DVwgI5O-L8smRg&usqp=CAU",
      content: <p>{item.comment}</p>,
      datetime: (
        <Tooltip title= {item.date} >
          <span>{moment(item.date).fromNow()}</span>
        </Tooltip>
      ),
    };
  });

  return (
    <div className="comment_wrapper" style = {{height:"80%" , overflowY:"scroll"}}>
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

    </div>
   
  );
};

export default CommentListings;
