import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from 'mocks/topics';

const TopicList = () => {
  return (
    <ul className="top-nav-bar__topic-list">
      { topics.map((topic) => {
        return (
          <TopicListItem key={ topic.id } topic={ topic } />
        )
      }) }
    </ul>
  );
};

export default TopicList;
