import React from 'react';
import { connect } from 'react-redux';

// Acciones
//import { getPosts } from './actions/posts';


class Reproductor extends React.Component {
  componentDidMount() {
    //this.props.getPosts();
  }

  render() {
    return (
      <div>
        <h1>Reproductor</h1>
        <audio controls>
          <source src="/music/funky_energy_loop.mp3" type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

// const mapDispatchToProps = (dispatch) => ({
//   getPosts: () => dispatch(getPosts()),
// })

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(Reproductor);
