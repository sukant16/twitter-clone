import React, {useState} from 'react';
import "../styles/TweetBox.css";
import {Avatar, Button} from "@material-ui/core";
import db from "../db/firebase";
import Pic from "../pic.jpg";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: "Ryan Gosling",
      username: 'ryanG',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg"
    });
    
    setTweetImage("");
    setTweetMessage("");
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={Pic} />
          <input 
          value={tweetMessage}
          placeholder="What's happening"
          type="text"
          onChange={e => setTweetMessage(e.target.value)}
        />
        </div>
        <input 
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
          placeholder="Optional: Enter Image URL "
          className="tweetBox__imageInput"
          type="text"/> 
        <Button 
          className="tweetBox__tweetButton"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
