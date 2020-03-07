import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// Actions
import { updateUser } from '../../actions/login';

class Admin extends React.Component {

  userNameInput = createRef();

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    this.props.updateUserName(this.userNameInput.current.value);
    event.preventDefault();
  }

  logout = () => {
    this.props.updateUserName("");
  }

  render() {
    if (!this.props.userName) {
      return (
        <div className="content">
          <p>Inserte sus credenciales para acceder al área privada</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Usuario:
                <input type="text" name="nombre" ref={this.userNameInput} />
            </label>
            <label> Password:
                <input type="text" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

      );
    } else {
      return <Route
        render={(props) =>
          (
            <Redirect
              to={{
                pathname: '/admin',
              }}
            />
          )} />
    }
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

