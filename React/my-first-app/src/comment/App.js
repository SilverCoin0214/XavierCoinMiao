import React, { PureComponent } from "react";
import CommentItem from "./components/CommentItem";
import CommentInput from "./components/CommentInput";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      commentList: [],
    };
  }

  render() {
    return (
      <div style={{ width: "500px", padding: "20px" }}>
        {this.state.commentList.map((item, index) => {
          return (
            <CommentItem
              key={item.id}
              comment={item}
              removeItem={(e) => {
                this.removeItem(index);
              }}
            />
          );
        })}
        <CommentInput
          submitComment={(info) => {
            this.submitComment(info);
          }}
        />
      </div>
    );
  }

  submitComment(info) {
    this.setState({
      commentList: [...this.state.commentList, info],
    });
  }

  removeItem(index) {
    const newCommentList = [...this.state.commentList];
    newCommentList.splice(index, 1);
    this.setState({
      commentList: newCommentList,
    });
  }
}
