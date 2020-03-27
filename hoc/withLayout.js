
// import { or, lte } from 'ramda';
import React, { Component, Fragment } from 'react';
import { GlobalStyles } from '../ui/index';
// //////////////////////////////////////////////////////////////////////
const withLayout = (BaseComponent) => (
  class extends Component {
    static pageTransitionDelayEnter = true
    constructor (props) {
      super(props);
      this.state = { loaded: false };
    }
    componentDidMount () {
      this.timeoutId = setTimeout(() => {
        this.props.pageTransitionReadyToEnter();
        this.setState({ loaded: true });
      }, 2000);
    }
    componentWillUnmount () {
      if (this.timeoutId) clearTimeout(this.timeoutId);
    }
    render () {
      if (!this.state.loaded) return null;
      return (
        <Fragment>
          <BaseComponent {...this.props} />
          <GlobalStyles />
        </Fragment>
      );
    }
  }
);

export default withLayout;
