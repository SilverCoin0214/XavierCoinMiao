import { Component } from 'react'

import { StoreContext } from './context'

export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(WrapedComponent) {
    class enhanceComponent extends Component {
      constructor(props, context) {
        super(props, context)
        this.state = {
          storeState: mapStateToProps(context.getState())
        }
      }

      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        return (
          <WrapedComponent
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          />
        )
      }
    }

    enhanceComponent.contextType = StoreContext

    return enhanceComponent
  }
}
