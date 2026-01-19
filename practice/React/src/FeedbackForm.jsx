import React, { useState } from 'react'
import Card from './components/Card'
import Button from './components/Button'
import FeedbackContext from './context/FeedbackContext'
import { useContext } from 'react'
import { v4 as uuid} from 'uuid'



const FeedbackForm = ( {feedbackItem}) => {


  let {addFeedbackItem} = useContext(FeedbackContext)

    let [text, setText]= useState('');

    let [btnDisabled, setBtnDisabled]= useState(true); 
    let [message, setMessage] = useState('');

    let handleTextChange = (e) => {

      // console.log(e.target.value)

      let textinput = e.target.value.trim();

      let textmessage = ''

      if(textinput.length < 10){

        textmessage = 'Character must be more than 10 character'
        setMessage(textmessage);
        setBtnDisabled(true);
       
      }else{
        setMessage(textmessage);
        setBtnDisabled(false);
      }

      setText(textinput)


    }

  let handleSubmit = (e) =>{
    e.preventDefault()

    let newFeedbackItem = {
      id:uuid(),
      text:text
    }

    addFeedbackItem(newFeedbackItem)
    setText('');
    setBtnDisabled(true)
    setMessage('')
      
    
  }



  return (
    <Card>
        <h3>Add your review</h3>
        <form onSubmit={handleSubmit} >
            <div className="input-group">
                <input type="text" name="" id="" placeholder='Enter your  ideas' onChange={handleTextChange} value={text}/>

                
                <Button btnColor='btn-primary' btnName="Send" type="submit" isDisabled={btnDisabled} />
                <Button btnColor='btn-secondary' btnName="Clear All" />

                
            </div>
            <p className='message'>{message && message}</p>
        </form>
    </Card>
  )
}

export default FeedbackForm