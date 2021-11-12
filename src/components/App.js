import { useState } from "react";
import video from "../data/video.js";
import Details from "./Details.js";
import Buttons from "./Buttons.js";
import Comments from "./Comments.js";

function App() {
  const [likeValue, setLikeValue] = useState(video.upvotes)
  const [dislikeValue, setDislikeValue] = useState(video.downvotes)
  const [currentComments] = useState(video.comments)

  function handleUpVotes(){
    setLikeValue(() => likeValue + 1)
  }

  function handleDownVotes(){
    setDislikeValue(() => dislikeValue + 1)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Details video={video}/>
      <Buttons
      handleUpVotes={handleUpVotes}
      likeValue={likeValue}
      handleDownVotes={handleDownVotes}
      dislikeValue={dislikeValue}
      />
      <Comments 
      currentComments={currentComments}
      />
    </div>
  );
}

export default App;
