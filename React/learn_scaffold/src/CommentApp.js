import React, { Component } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import "./css/index.css";

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  UNSAFE_componentWillMount() {
    this._loadComments();
  }

  _loadComments() {
    let comments = localStorage.getItem("comments");
    if (comments) {
      comments = JSON.parse(comments);
      this.setState({ comments });
    }
  }

  _saveComments() {
    localStorage.setItem("comments", JSON.stringify(comments));
  }

  handleSubmitComment(comment) {
    if (!comment) return;
    if (!comment.username) return alert("请输入用户名");
    if (!comment.content) return alert("请输入评论内容");
    this.state.comments.push(comment);
    this.setState({
      comments: this.state.comments,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentApp;
