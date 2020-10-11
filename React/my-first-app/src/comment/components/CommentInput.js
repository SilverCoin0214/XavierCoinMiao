import React, { PureComponent } from "react";
import { Input, Button } from "antd";
import moment from "moment";

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  render() {
    return (
      <div>
        <Input.TextArea
          rows={4}
          value={this.state.content}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <Button
          type="primary"
          onClick={(e) => {
            this.handleBtn();
          }}
        >
          提交
        </Button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  handleBtn() {
    const commentInfos = {
      id: Date.now(),
      avatar:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600943041790&di=1d37dd4758f7b8250f9d2e936244d012&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F06%2F20160306204517_i4Se8.jpeg",
      nickname: "sce",
      datetime: moment(),
      content: this.state.content,
    };

    this.setState({
      content: "",
    });

    this.props.submitComment(commentInfos);
  }
}
