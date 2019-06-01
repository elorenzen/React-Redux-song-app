import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
    return(
        <div className="ui container grid">
            <div className="nine wide column">
                <SongList />
            </div>
            <div className="seven wide column">
                <SongDetail />
            </div>        
        </div>
    )
};

export default App;