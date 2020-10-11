import React, { PureComponent } from "react";

import store from "../store/index.js";

export default function connect(mapStateToProps, mapDispachToProp) {
  return function enhanceHOC(WarppedComponent) {
    return class extends PureComponent {
      constructor(props) {
        super(props);

        this.state = {
          storeState: mapStateToProps(store.getState()),
        };
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState()),
          });
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return (
          <WarppedComponent
            {...this.props}
            {...mapStateToProps(store.getState())}
            {...mapDispachToProp(store.dispatch)}
          />
        );
      }
    };
  };
}
