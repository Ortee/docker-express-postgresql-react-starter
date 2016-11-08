import React, { Component } from 'react';
import { Col, Alert } from 'reactstrap';
import './alerts.scss';

class Alerts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.alerts.length > 0) {
      const _this = this;
      const { id } = this.props.alerts[0];
      setTimeout(() => {
        _this.props.removeAlert(id);
      }, 2500);
    }
    return (
      <Col xs={{ size: 6, offset: 2 }} className="post-alert-box">
        {this.props.alerts.map((alert, i) => {
          return (
            <Alert key={i}
                  className="post-alert"
                  color={ alert.style }
                  onClick={this.props.removeAlert.bind(null, alert.id)}>
                  { alert.text }
            </Alert>);
        })}
      </Col>
    );
  }
}

Alerts.propTypes = {
  alerts: React.PropTypes.array,
  removeAlert: React.PropTypes.func,
};

export default Alerts;
