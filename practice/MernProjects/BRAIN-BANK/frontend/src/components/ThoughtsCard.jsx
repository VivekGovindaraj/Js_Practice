import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Heart, Trash2, Edit, Calendar, Delete } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeThought , toggleThoughtFavourite} from "../redux/slice/ThoughtsSlice";
import { useState } from "react";
import EditThoughtDialog from "./EditThoughtDialog";






const ThoughtsCard = ({ thought }) => {

  let dispatch = useDispatch();
  let [isDeleting, setIsDeleting] = useState(false);
  let [editOpen,setEditOpen] = useState(false); 

  // delete Thoughts


  let handleDelete = async () =>{

   if(window.confirm("Are you sure you want to delete the thought?")){
       try{
        setIsDeleting(true)
        await dispatch(removeThought(thought._id))
      }catch(error){
        console.log("Filed to delete", error)
        setIsDeleting(false)
      }
      
   }
  }


  // toggle favourite


  let handleToggleFavourite = async() => {
    debugger;

    try{
      await dispatch(toggleThoughtFavourite(thought._id))
    }catch(error){
      console.log(`Failed to toggle favourite`, error)
    }
       
  }




  // ctaegory color css tailwind class
  const getCategoryColor = (category) => {

    let colors = {
      Idea:"bg-purple-100 text-purple-800 boreder-purple-200",
      Goal:"bg-green-100 text-green-800 boreder-green-200",
      Quote:"bg-yellow-100 text-yellow-800 boreder-yellow-200",
      Reminder:"bg-red-100 text-red-800 boreder-red-200",
      Learning:"bg-blue-100 text-blue-800 boreder-blue-200",
      Random:"bg-gray-100 text-gray-800 boreder-gray-200",
     
    }

    return colors[category] || colors.Random;
  }


  let formatDate =(dateString) => {
    let date = new Date(dateString);

    return date.toLocaleDateString("en-us", {
      month:"short",
      day:"numeric",
      year:"numeric"
    })
  }


  return (
    <Card className='mb-5 hover:shadow-lg'>
      <CardHeader>

        <div className="flex items-center justify-between gap-2">
          <CardTitle>{thought.title}</CardTitle>
          <Button variant="ghost" size="icon" onClick={handleToggleFavourite}>
            <Heart className={`h-5 w-5  ${thought.isFavourite ? "fill-red-500 text-red-500" : "text-gray-400"}`}/>
          </Button>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Badge className={getCategoryColor(thought.category)}>
            {thought.category }
          </Badge>


          {
            thought.isFavourite && (
              <Badge variant="outline" className="bg-red-50 text-red-600 boreder-red-200" >
                ⭐ Favourite
              </Badge>
            )
          }
        </div>

      </CardHeader>

      <CardContent>
        <p className="text-gray-800">{thought.content}</p>


        {thought.tags && thought.tags.length > 0 && (
          <div className="flex gap-2 mt-4">
             {thought.tags.map((tag,index) => (
                  <Badge variant="secondary" key={index} className="text-xs">
                  #{tag}
                  </Badge>
                )
                )
              }
          </div>
        )}

       
      </CardContent>


      <CardFooter className="flex item-center justify-between border-t pt-4">
        <div className="flex item-center text-sm">
          <Calendar className="me-2 text-xs"/>
          {formatDate(thought.createdAt)}
        </div>


        <div className="flex item-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => {setEditOpen(true)}}>
              <Edit/>
          </Button>
          <Button variant="ghost" size="icon" onClick={handleDelete} disabled={isDeleting}>
              <Trash2 className="h-4 w-4 text-destructive"/>
          </Button>
        </div>
      </CardFooter>

      {/* Edit Open thought */}

      <EditThoughtDialog thought={thought} open={editOpen} onOpenchange={setEditOpen}/>
    </Card>
  );
};

export default ThoughtsCard;
