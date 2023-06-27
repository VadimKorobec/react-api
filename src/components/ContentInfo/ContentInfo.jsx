import { Component } from 'react';

export class ContentInfo extends Component {
  state = {};

  componentDidUpdate(prevProps, prevState) {
    console.log('this.props', this.props);
    if (prevProps.searchText !== this.props.searchText) {
    }
  }

  render() {
    return <></>;
  }
}
