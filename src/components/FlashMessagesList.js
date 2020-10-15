import React from 'react';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteFlashMessage } from '../store/actions/flashMessages';

class FlashMessagesList extends React.Component {
  render() {
    const messages = this.props.messages.map(message =>
      <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
    );
    return (
      <div>{messages}</div>
    );
  }
}

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}
 
function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  }
}

const mapDispatchToProps = ( dispatch ) => ( {
  deleteFlashMessage: (id) => dispatch( deleteFlashMessage(id)),
} );

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessagesList);