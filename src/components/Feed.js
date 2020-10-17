import React, {useState, useEffect} from 'react';
import TweetBox from "./TweetBox";
import Post from "./Post";
import "../styles/Feed.css"; 
import db from "../db/firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      db.collection('posts').onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => doc.data()))
      ))
  }, []);
  return (
    <div className="feed">
    {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />
      {posts.map(post => (
        <Post displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        image={post.image}
        avatar={post.avatar}
      />
      ))}
      
     
    </div>
  )
}

export default Feed;
