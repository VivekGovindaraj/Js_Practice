
import { useContext, useState, useEffect } from 'react'
import Header from './components/Header'

import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './FeedbackForm'
import ThemeContext from './context/ThemeContext'


const App = () => {




  // let name = 'vivek'

  // let [name , setName] =useState('Vivel')

  //   let [feedbackItem, setfeedbackItem] = useState(
  //   [
  //     {
  //       id:1,
  //       text: 'TEXT 1'
  //     },
  //     {
  //       id:2,
  //       text: 'TEXT 2'
  //     },
  //     {
  //       id:3,
  //       text: 'TEXT 3'
  //     },
  //     {
  //       id:4,
  //       text: 'TEXT 4'
  //     },
  //   ]
  // )



  // let deleteFeedbackItem = (id) =>{
  //   console.log(id)
  //   if(window.confirm('Are you sure')){
  //     setfeedbackItem( feedbackItem.filter(  item => item.id !== id))
  //   }
    
  // }


  // let addFeedbackItem = (newItem) => {

  //   console.log(newItem)

  //   setfeedbackItem([...feedbackItem, newItem])


   

  // }

  const {darkMode} = useContext(ThemeContext)


  useEffect( () => {
    document.body.style.backgroundColor = darkMode ? 'rgb(202, 202, 202)' : '#000'
  },['darkMode'])


  return( 
    <div>
       
       <div className="container">
        <Header text="Review App" bgColor="black" textColor="white" display="flex"/>
        <FeedbackForm   />
       
         <FeedbackList  />
       </div>
        
    </div>
     
   
  )
}  

export default App






























// let name = 'vivek';
//   let age1 = 324;
//   let users =[
//     {id:1, text:'user 1'},
//     { id:2, text:'user 2'},
//     {id:3, text:'user 3'}

    
//   ]


//   let loading = false;

//   let showUser = true;

//   let user = users.map( user => (<li>{user.text}</li>))

//   if(loading){
//     return(
//       <h1>Loading.....</h1>
//     )
//   }
//   return (
    
//     <>
//       <h1>Name : {name.toUpperCase()}</h1>
//       <h2> Age : {age1}</h2>
//       <h4>User length : {users.length}</h4>
      
//       <ul>


//        {
//         // showUser ?
//         //  (  users.map( (user) => (
//         //   <li key={user.id}>{user.text}</li>
//         // ))) : (null)


//         showUser && user
      
//        }
//       </ul>
//     </>
   
//   )


