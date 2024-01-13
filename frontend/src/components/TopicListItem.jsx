import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic }) => {

  const { title } = topic

  return (
    <ul className="topic-list__item">
      <span>{ title }</span>
    </ul>
  );
};

export default TopicListItem;
