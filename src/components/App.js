import React, {useState} from 'react';
import Header from "./Header";
import Buttons from "./Buttons";
import video from "../data/video.js";

function App() {
  const [commentState, setCommentState] = useState(video.comments);
  const [likeState, setLikeState] = useState(video.upvotes);
  const [dislikeState, setDislikeState] = useState(video.downvotes);
  // const [searchState, setSearchState] = useState(""); DON'T NEED STATE IF NOT A FORM?

  function handleLikes() {
    setLikeState(() => likeState + 1)
  }

  function handleDislikes() {
    setDislikeState(() => dislikeState + 1)
  }

  function handleComments(toggleState) {
    toggleState ? setCommentState([]) : setCommentState(video.comments)
  }

  function handleSearch(event) {
    let newSearch = event.target.value;
    // setSearchState(newSearch)
    const searchComment = video.comments.filter((comment) => {
      if (comment.user.toLowerCase().includes(newSearch)) {
        return true;
      }
      return false;
    })
    console.log(searchComment)
    setCommentState(searchComment);
  }

  function handleRemove(event) {
    console.log(event.target.id);
    const id = event.target.id;
    const updatedComments = video.comments.filter((comment) => {
      if (comment.id === parseInt(id)) {
        return false;
      }
      return true;
    })
    console.log(updatedComments)
    setCommentState(updatedComments);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={"Thinking in React"}
      />
      <Header title={video.title} views={video.views} date={video.createdAt}  />
      <Buttons upVotes={likeState} downVotes={dislikeState} comments={commentState} onLikeClick={handleLikes} onDislikeClick={handleDislikes} displayComments={handleComments} searchInput={handleSearch} removeComment={handleRemove}/>
    </div>
  );
}


//Header child

//Buttons child
    //


export default App;
