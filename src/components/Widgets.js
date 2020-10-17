import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import "../styles/Widgets.css";

function Widget() {;
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1153018532369555456"}/>
        <TwitterTimelineEmbed
          sourceType="profile" 
          screenName="fchollet"
          options={{height: 400}}
         />
         <TwitterShareButton 
           url={"https://facebook.com/ukan7337"}
           options={{text: "React is awesome ", via:"u_kan73"}}
         />
      </div>
    </div>
  )
}

export default Widget;
