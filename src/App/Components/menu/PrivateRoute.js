import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Obtenemos el componente a renderizar y cualquier otro parámetro
const PrivateRoute = ({ component: Component, ...others }) => {

  const userName = others.userName;

  if (userName) {
    return <Route {...others}
    render={(props) =>
      (
        <Component {...props} />
      ) } />
  } else {
    return <Route {...others}
    render={(props) =>
      (
        <Redirect
        to={{
          pathname: '/login',
        }}
      />
      ) } />
  }
}

const mapStateToProps = state => ({
  userName: state.login.user,
});

export default connect(
  mapStateToProps,
)(PrivateRoute);
