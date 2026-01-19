import React, { useContext, useState }from 'react';
import FeedbackList from './FeedbackList' ;
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa"
import Card from './Card';
import FeedbackContext from '../context/FeedbackContext';
// import { useContext } from 'react';


  
const FeedbackItem1 = ({item}) => {


  const{deleteFeedbackItem} = useContext(FeedbackContext)


  return (
    <Card >

      <div className='card-wrapper'>
         <h3>{item.text}</h3>
        <div>
        <div className='edit'>
          <FaEdit size="20px" />
        </div>
        <div className='delete' onClick={ () => deleteFeedbackItem(item.id)}>
         <FaTrash size="20px"  />
       </div>
       </div>
      </div>
    </Card>
      

       
      
   
     
  )
}

export default FeedbackItem1