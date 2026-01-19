import React, { useContext } from 'react'
import FeedbackItem1 from './FeedbackItem1'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackList = () => {
    
  let {feedback} = useContext(FeedbackContext)
  

  if(feedback.length ===0)  return <h3>no item</h3>
  return (
    feedback.map((item) => (
        <FeedbackItem1 key={item.id} item={item} />
    ))
  )
}

export default FeedbackList