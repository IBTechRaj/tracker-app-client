import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logOut } from '../../store/thunks/user';

function Logout() {
  this.props.logOut();
  this.props.history.push('/');
}

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});


Logout.propTypes = {
  logOut: PropTypes.func.isRequired,
  history: PropTypes.object,
  push: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Logout);