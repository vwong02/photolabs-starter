import React from "react";

import "../styles/TopicListItem.scss";


// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = (props) => {

  const { title } = props.topic

  return (
    <div className="top-nav-bar__topic-list">
      <span className="topic-list__item">{ title }</span>
    </div>
  );
};

export default TopicListItem;
