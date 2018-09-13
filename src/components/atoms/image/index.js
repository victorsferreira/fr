import React, { Component } from 'react';
import StyledImage from './styled';

import { get } from '../../../libs/api';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: null
    };

    this.request = null;
  }

  getFileUrl() {
    this.request = get(`/file/${this.props.imageKey}`);
    this.request.exec()
      .then((response) => {
        this.setState({ src: response.data.url });
      })
      .catch((err) => {
        if (!this.request.isCancel(err)) { }
      });
  }

  loadFile() {
    if (this.request) this.request.cancel();

    const fr = new FileReader();
    fr.onload = (e) => {
      this.setState({ src: e.target.result });
    };

    fr.readAsDataURL(this.props.file);
  }

  load() {
    if (this.props.imageKey) {
      this.getFileUrl();
    } else if (this.props.file) {
      this.loadFile();
    } else if (this.props.src) {
      this.setState({ src: this.props.src });
    }
  }

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(props) {
    if (
      this.props.value !== props.value
    ) {
      this.load();
    }
  }

  componentWillUnmount() {
    if (this.request) this.request.cancel();
  }

  render() {
    return (
      <StyledImage alt={this.props.alt} src={this.state.src} {...this.props} />
    );
  }
}

export default Image;