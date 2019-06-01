import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        // this.props === { songs: state.songs } from mapStatetoProps()
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={ () => this.props.selectSong(song) }>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    };

    render(){
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

// Takes state object(data in store) and computes into props
// state parameter = songs from reducers
const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);