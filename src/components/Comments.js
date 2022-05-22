import React from 'react';

function Comments({ comments, toggleState, onToggle, onSearchInput, onRemove }) {
    
    const divider = {
        borderTop: "1px solid black",
    }

    const commentObj = comments.map((comment) => {
        return (
            <div key={comment.id}>
                <div >
                    <h3>{comment.user}</h3>
                    <p>{comment.comment}</p>
                    <button >👍</button>
                    <button >👎</button>
                </div>
                <button id={comment.id} onClick={onRemove}>Remove Comment</button>
            </div>
        )
    })

    return (
        <div>
            <button onClick={onToggle}>{toggleState ? "Hide" : "Show"} Comments</button>
            <hr style={divider}/>
            <h2>{comments.length + " Comments"}</h2>
            <input onChange={onSearchInput} type="text" placeholder='Search by user...'></input>
            {commentObj}
            
        </div>
    )
}

export default Comments;
