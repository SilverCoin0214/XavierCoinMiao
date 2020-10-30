import React, { Component, createRef } from "react";

export default class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      content: "",
    };

    this.myRef = createRef();
  }

  // circle- life

  UNSAFE_componentWillMount() {
    this._loadUsername();
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  // handle

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value,
    });
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({ username, content });
    }

    this.setState({
      content: "",
    });
  }

  _saveUsername(username) {
    localStorage.setItem("username", username);
  }

  _loadUsername() {
    const username = localStorage.getItem("username");
    if (username) {
      this.setState({ username });
    }
  }

  handleUsernameBlur(e) {
    this._saveUsername(e.target.value);
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={(e) => this.handleUsernameChange(e)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              ref={this.myRef}
              value={this.state.content}
              onChange={(e) => this.handleContentChange(e)}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}
