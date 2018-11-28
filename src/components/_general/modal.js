import React from 'react';
import PropTypes from 'prop-types';

import success from '../../images/icons/success.png';
import alert from '../../images/icons/alert.png';
import error from '../../images/icons/error.png';
import question from '../../images/icons/question.png';
import information from '../../images/icons/information.png';

import '../../styles/_general/modal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show
    }
  }

  icons = {
    success: success,
    error: error,
    alert: alert,
    question: question,
    information: information
  }

  class = {
    success: 'header -success',
    error: 'header -error',
    alert: 'header -alert',
    question: 'header -question',
    information: 'header -information'
  }

  onClick = () => {
    this.setState({ show: !this.state.show });
    this.props.alterModalState && this.props.alterModalState(this.state.show);
  }

  render() {

    const { data } = this.props;

    return (
      <div className="bg-modal">
        <div className="modal">
          <div className={ this.class[data.type] }>
            <img src={ this.icons[data.type] } alt="sucesso" />
          </div>
          <div className="title">
            { data.title }
          </div>
          <div className="message">
            { data.message }
          </div>
          <input
            type="submit"
            className="buttom -clear"
            name="clear"
            value="OK"
            onClick={this.onClick}
          />
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  data: PropTypes.object.isRequired,
  alterModalState: PropTypes.func.isRequired
}

export default Modal;