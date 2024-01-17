import React from 'react'
import TopicListItem from './TopicListItem'
import '../styles/TopicList.scss'

const TopicList = ({ topics, toggleSelectedTopic }) => {
  return (
    <ul className='top-nav-bar__topic-list'>
      { topics.map((topic) => {
        return (
          <TopicListItem key={ topic.id } id={ topic.id } topic={ topic } toggleSelectedTopic={ toggleSelectedTopic } />
        )
      }) }
    </ul>
  )
}

export default TopicList
