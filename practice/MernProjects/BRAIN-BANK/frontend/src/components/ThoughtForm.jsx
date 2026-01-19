import React,{useState} from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import {Button} from "@/components/ui/button"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { createNewThought } from '../redux/slice/ThoughtsSlice'
import { useDispatch } from 'react-redux'





const ThoughtForm = () => {

let categories = ['Idea','Goal','Quote','Reminder','Learning','Random'];


  let[open,setOpen] = useState(false);
  let dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title:"",
    content:"",
    category:"",
    tags:""
  });



let handleChange = (e) => {

  let {name, value} = e.target;

  setFormData((prev) => ({...prev, [name]:value}))
}


let handleCategoryChange = (value) => {

  setFormData((prev) => ({...prev, category:value}))
}


let handleSubmit = async (e) => {
   e.preventDefault();

    // Validation
    if(!formData.title.trim() || !formData.content.trim()){
        alert("Please fill in the title and content");
        return;
    }

    setLoading(true);

    try{

      const tagsArray = formData.tags.split(",").map((tag) => tag.trim()).filter((tag) => tag !=="");
      
      // dispatch

      let thoughtNewData = {
        title:formData.title,
        content:formData.content,
        category:formData.category,
        tags:tagsArray
      }

      await dispatch(createNewThought(thoughtNewData))



      // reset the form
      
      setFormData({
        title:"",
        content:"",
        category:"",
        tags:""
      })

      setOpen(false)
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
}



  return (
    <Dialog open={open} onOpenChange={setOpen}>
      
        <DialogTrigger asChild>
          <Button size="lg">Add New Thoughts</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Your New Thoughts</DialogTitle>
            <DialogDescription>
               Capture your ideas , goals,  or anything on your mind.
            </DialogDescription>
          </DialogHeader>


          
          <div className="grid gap-4 mt-3">
            {/* Title */}
            <div className="grid gap-3">
              <Label  htmlFor="title">Title</Label>
              <Input id="title" name="title" placeholder="Enter your thoughts....." value={formData.title} onChange={handleChange} maxLength={100} />
            </div>

              {/* Content */}
            <div className="grid gap-3">
              <Label  htmlFor="content">Content</Label>
              <Input id="content" name="content" placeholder="What's on your mind?" value={formData.content} onChange={handleChange} maxLength={1000} />
            </div>


              {/* Category */}
            <div className="grid gap-3">
              <Label  htmlFor="Category">Category</Label>
              <Select value={formData.category} onValueChange={handleCategoryChange}>
                      <SelectTrigger >
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {
                        categories.map( (category) => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))
                      }
                    </SelectContent>
              </Select>
            </div>


             {/* tags */}
            <div className="grid gap-3">
              <Label  htmlFor="tags">Tags(comma seperated)</Label>
              <Input id="tags" name="tags" placeholder="Coding, Motivation, Javascript..." value={formData.tags} onChange={handleChange} maxLength={1000} />
            </div>

          </div>
          <DialogFooter className="mt-5">
            <DialogClose asChild>
              <Button variant="outline" disabled={loading}>Cancel</Button>
            </DialogClose>
            <Button type="submit">{loading ? "Creating..." : "Create Thought"}</Button>
          </DialogFooter>
          </form>
        </DialogContent>
      
    </Dialog>
  )
}

export default ThoughtForm