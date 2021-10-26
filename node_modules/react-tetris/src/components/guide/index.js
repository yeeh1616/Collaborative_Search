import React from 'react';
import QRCode from 'qrcode';
import { isMobile } from '../../unit';


export default class Guide extends React.Component {
  constructor() {
    super();
    this.state = {
      isMobile: isMobile(),
      QRCode: '',
    };
  }
  componentWillMount() {
    if (this.state.isMobile) {
      return;
    }
    QRCode.toDataURL(location.href, { margin: 1 })
        .then(dataUrl => this.setState({ QRCode: dataUrl }));
  }
  shouldComponentUpdate(state) {
    if (state.QRCode === this.state.QRCode) {
      return false;
    }
    return true;
  }
  render() {
    if (this.state.isMobile) {
      return (
        null
      );
    }
    return (
      null
    );
  }
}

