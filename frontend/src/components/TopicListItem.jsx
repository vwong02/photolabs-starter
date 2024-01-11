import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const { title } = props.topic

  return (
    <ul className="topic-list__item">
      <span>{ title }</span>
    </ul>
  );
};

export default TopicListItem;
