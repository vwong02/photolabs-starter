import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, toggleSelectedTopic }) => {
  return (
    <ul className="top-nav-bar__topic-list">
      { topics.map((topic) => {
        return (
          <TopicListItem key={ topic.id } id={ topic.id } topic={ topic } toggleSelectedTopic={ toggleSelectedTopic } />
        )
      }) }
    </ul>
  );
};

export default TopicList;
