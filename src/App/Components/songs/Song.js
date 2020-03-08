import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getSong } from "../../actions/songs";

class Song extends Component {

    loadSong(song) {
        this.props.getSong(song.id);
    }

    render() {
        const { song } = this.props;
        return (<Fragment>
            <li className="singleSong" key={song.id} onClick={() => { this.loadSong(song) }} title="Haga click para reproducir">
                {song.name} (Duración: {song.seconds} seg)
            </li>
        </Fragment>);
    }

}

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    getSong: (id) => dispatch(getSong(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Song);