import React, { PureComponent } from "react";
import { Button, DatePicker } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import moment from "moment";

export default class UseAntd extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loadings: [],
    };
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { loadings } = this.state;
    return (
      <>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <br />
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => this.enterLoading(0)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />

        <DatePicker
          defaultValue={moment("2015/01/01", "YYYY/MM/DD")}
          format={"YYYY/MM/DD"}
        />
      </>
    );
  }
}
