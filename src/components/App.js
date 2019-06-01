import React from 'react';
import { selectSong } from '../actions';
import SongList from './SongList';

const App = () => {
    return(
        <div className="ui container grid">
            <div className="nine wide column">
                <SongList />
            </div>
            <div className="seven wide column">
                <h1>Details</h1>
            </div>        
        </div>
    )
};

export default App;