import React, { useState } from 'react';
import Comments from './Comments';

function Buttons({ upVotes, downVotes, comments, onLikeClick, onDislikeClick, displayComments, searchInput, removeComment }) {
    const [toggleState, setToggleState] = useState(true);

    function handleToggle(e) {
        setToggleState((toggleState) => !toggleState);
        // setToggleState(!toggleState); ???
        displayComments(toggleState);
    }

    return (
        <div>
            <button onClick={onLikeClick}>{upVotes+"👍"}</button>
            <button onClick={onDislikeClick}>{downVotes+"👎"}</button>
            <Comments comments={comments} toggleState={toggleState} onToggle={handleToggle} onSearchInput={searchInput} onRemove={removeComment}/>
        </div>
    )
}


export default Buttons;
