import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    render(){
        // this.props === { songs: state.songs } from mapStatetoProps()
        console.log(this.props);
        return <div>Song List</div>
    }
}

// Takes state object(data in store) and computes into props
// state parameter = songs from reducers
const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);