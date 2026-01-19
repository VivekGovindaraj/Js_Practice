import { createContext, useState, useEffect } from "react";
import axios from "axios";

let  FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    let [feedback, setFeedback] = useState(
    [
      // {
      //   id:1,
      //   text: 'TEXT is 1'
      // },
      // {
      //   id:2,
      //   text: 'TEXT  is 2'
      // },
      // {
      //   id:3,
      //   text: 'TEXT  is 3'
      // },
      // {
      //   id:4,
      //   text: 'TEXT  is 4'
      // },
    ]
  );

//  delete items
    let deleteFeedbackItem = async(id) =>{
    console.log(id)
    if(window.confirm('Are you sure')){


      try{

       await axios.delete(`http://localhost:3003/tasks/${id}`)

        setFeedback( feedback.filter(  item => item.id !== id))

      }catch(err){
        console.log('error')
      }
      
    }
    
  }

// add item
  let addFeedbackItem = async(newItem) => {


    try{

      let response = await axios.post("http://localhost:3003/tasks", newItem, {
        headers:{
          "Content-type" : "application/json"
      }
      })


      setFeedback([response.data, ...feedback])

    }catch(err){  
      console.log(err)
    }

     

   


   

  }

// fetching data from data.json and updating to setFeedback

  let fetchFeedback = async () => {

    try{


      let response = await axios.get("http://localhost:3003/tasks")
      
      setFeedback(response.data)

    }catch(err){

      console.log('error')

    }
  }


  useEffect( () => {
    fetchFeedback()
  }, [])
  
  



  return(
    <FeedbackContext.Provider value={{feedback, addFeedbackItem, deleteFeedbackItem}}>
        {children}
    </FeedbackContext.Provider>
)


}

export default FeedbackContext;

