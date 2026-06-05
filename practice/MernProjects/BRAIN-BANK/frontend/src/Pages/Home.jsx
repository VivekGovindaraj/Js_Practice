import React, { useEffect, useState } from 'react'
import{useDispatch,useSelector} from 'react-redux';
import { getThoughts, setFilters,clearFilters } from '../redux/slice/ThoughtsSlice';
import ThoughtsCard from '../components/ThoughtsCard';
import ThoughtForm from '../components/ThoughtForm'
import { Button } from '../components/ui/button';
import {Input} from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {Search,X,Loader2 } from 'lucide-react';

const Home = () => {

  

  let dispatch = useDispatch();

  let categories = ['All','Idea','Goal','Quote','Reminder','Learning','Random']

  const {thoughts,loading,filters} = useSelector((state) => state.thoughts);

  let [searchInputs,setSearchInputs] =useState("");
  let [selectCategory,setSelectCategory] =useState("All");
  let[selectedTag,setselectedTag] =useState("");




  useEffect(()=>{    // by using using inital page loading of all thoughts
    dispatch(getThoughts())

    console.log(thoughts)
  },[dispatch])

  console.log("Thoughts:", thoughts);
  // Get unique tags from all thoughts

  const getAllTags = () => {

    let tagsSet = new Set();

    thoughts.forEach((thought) => {
      thought.tags?.forEach((tag) => {
        tagsSet.add(tag)
      })    
    });

 
    return Array.from(tagsSet).sort();
   
  }

  getAllTags();
console.log(getAllTags())

  // handle keypress and handlesearch

 let handleSearch = () => {

 
   let params ={}

   if(searchInputs.trim()){
    params.search = searchInputs.trim()
   }

   if(selectCategory !== "All"){
    params.category = selectCategory
   }

   if(selectedTag){
    console.log(selectedTag)
   }

   dispatch(setFilters(params));  
   dispatch(getThoughts(params));//

  
 }

 // categrory selection

 let handleCategoryChange = (value) => {
  setSelectCategory(value)
 }

  let handleKeyPress = (e) => {

    if(e.key == "Enter"){
     handleSearch();
    }
} 


// clear filters
let handleClearFilters = () => {
  setSearchInputs("");
  setSelectCategory("All");
 setselectedTag("");
  dispatch(clearFilters());
  dispatch(getThoughts());
}





  return (
   <div className='space-y-5'>
    { /* header */}

      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-4xl font-bold'>Brain Bank</h1>
          <p>Your personal thoughts repository</p>
        </div>


       <ThoughtForm/>


      </div>


      { /* Serach form */ }

      <div className='flex flex-col gap-2'>
        <div className='flex-1 flex gap-2'>
          <Input placeholder="Search Thought" value={searchInputs}
            onKeyPress={handleKeyPress}
           onChange={(e) => setSearchInputs(e.target.value)} className="flex-1"/>
           <Button onClick={handleSearch}>
            <Search className='h-4 w-4'/>
            Search</Button>
        </div>

        <div className="flex">
           <Select value={selectCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {
                  categories.map( (category) => (
                    <SelectItem value={category} key={category}>{category}</SelectItem>
                  ))
                }
              
                  
                 
               
              </SelectContent>
            </Select>

            {
             ( searchInputs || selectCategory !== "All" ) && (
                <Button variant="outline" onClick={handleClearFilters}>
                  <X className='h-4 w-4'/>Clear
                </Button>
              )
            }
        </div>
      </div>

      {loading && (
        <div className='flex item-center justify-center py-12'>
           <Loader2 className='h-8 w-8 animate-spin text-primary'/>
        </div>
      )}
   
      
      {!loading && thoughts.length == 0 && (
    
       <h1 className='flex justify-center text-xxl'>No Thought Yet</h1>
      )}

      {/*Tags filter */}

      {
        getAllTags().length > 0 && (
          <div className='flex items-center gap-2 flex-wrap'>
            <span>Filter by tag:</span>
            {
              getAllTags().map((tag) =>(
                <Button key={tag} variant={selectedTag === tag ? "default" :'outline'} size="sm"
                  onClick={()=>{
                    console.log(tag)
                    setselectedTag(tag);

                     console.log(setselectedTag,'sdfsd')
 
                    let params ={};

                    if(searchInputs.trim()) params.search = searchInputs.trim();
                    if(selectCategory !== 'All') params.category = selectCategory;
                    params.tags =tag;
                    dispatch(setFilters(params))
                    dispatch(getThoughts(params))

                  }} >#{tag}</Button>
              ))
            }
          </div>
        )
      }

      {!loading && thoughts.length > 0 && (
        <div>
          {
            thoughts.map((thought) => (
             
             <ThoughtsCard key={thought._id} thought={thought}/>
            ))
          }
        </div>
      )}
   </div>
  )
}

export default Home