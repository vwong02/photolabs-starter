import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ topic, toggleSelectedTopic }) => {

  const { id, title } = topic

  return (
    <ul className='topic-list__item'>
      <span onClick={ () => toggleSelectedTopic(id) }>{ title }</span>
    </ul>
  );
};

export default TopicListItem;
