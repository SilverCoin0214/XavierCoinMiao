import React, { PureComponent } from "react";
import { Comment, Avatar, Tooltip } from "antd";
// import moment from "moment";
import { DeleteOutlined } from "@ant-design/icons";

export default class CommentItem extends PureComponent {
  render() {
    const { nickname, avatar, datetime, content } = this.props.comment;

    return (
      <Comment
        author={<a href="/#">{nickname}</a>}
        avatar={<Avatar src={avatar} alt={nickname} />}
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={datetime.format("YYYY-MM-DD HH:mm:ss")}>
            <span>{datetime.fromNow()}</span>
          </Tooltip>
        }
        actions={[
          <span
            onClick={(e) => {
              this.removeComment();
            }}
          >
            <DeleteOutlined />
            删除
          </span>,
        ]}
      />
    );
  }

  removeComment() {
    this.props.removeItem();
  }
}
