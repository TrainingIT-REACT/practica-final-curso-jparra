
import React from 'react';
import { connect } from 'react-redux';

// Actions
import { updateUser } from '../../actions/login';

class Admin extends React.Component {

  logout = () => {
    this.props.updateUserName("");
  }

  render () {
    const { userName } = this.props;
    return (
      <div className="content">
        <p> Bienvenido {userName}!! Disfruta de tu área privada</p>
        <p><b>Nombre:</b> {userName} </p>
        <p><b>Apellidos:</b> Sánchez Sánchez</p>
        <p><b>Dirección:</b> Calle Águila (Madrid)</p>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.login.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserName: (user) => dispatch(updateUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);

