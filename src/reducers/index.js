import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Momma', duration: '4:43'},
        { title: 'Hood Politics', duration: '4:52'},
        { title: 'How Much a Dollar Cost', duration: '4:22'},
        { title: 'The Blacker the Berry', duration: '5:28'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SELECT_SONG') {
        return action.payload;
    } else {
        return selectedSong;
    }
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});