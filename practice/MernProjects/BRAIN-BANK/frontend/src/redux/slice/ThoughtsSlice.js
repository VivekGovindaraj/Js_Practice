 import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
 import * as API from '../../Utils/API';
import { data } from 'react-router-dom';
import { act } from 'react';

 //AsyncThunk

// get thoughts async thunk
 export const getThoughts =createAsyncThunk(
    "thoughts/getThoughts",
    async(params, {rejectWithValue}) => {
        try{
            let response = await API.fetchThoughts(params);
            return response.data;
        }catch(error){
            return rejectWithValue(error.response.data)
        }
    }
 )


 // cretae thought async thunk

  export const createNewThought =createAsyncThunk(
    "thoughts/createThoughts",
    async(thoughtData, {rejectWithValue}) => {
        try{
            let response = await API.createThought(thoughtData);
            return response.data;
        }catch(error){
            return rejectWithValue(error.response.data)
        }
    }
 )


  // update thought async thunk

  export const updateExistingThought =createAsyncThunk(
    "thoughts/updateThoughts",
    async({id,thoughtData}, {rejectWithValue}) => {
        try{
            let response = await API.updateThought(id,thoughtData);
            return response.data;
        }catch(error){
            return rejectWithValue(error.response.data)
        }
    }
 )


 // delete thought async thunk

   export const removeThought =createAsyncThunk(
    "thoughts/removeThoughts",
    async(id, {rejectWithValue}) => {
        try{
           await API.deleteThought(id);
            return id;
        }catch(error){
            return rejectWithValue(error.response.data)
        }
    }
 )


 // toogle thoughfavourite

    export const toggleThoughtFavourite =createAsyncThunk(
    "thoughts/toggleFavouriteThoughts",
    async(id, {rejectWithValue}) => {
        try{
          let response= await API.toggleFavourite(id);
            return response.data;
        }catch(error){
            return rejectWithValue(error.response.data)
        }
    }
 )


 

 // getFavourites

    export const getFavouriteThoughts =createAsyncThunk(
    "thoughts/getFavouriteThoughts",
    async(_, {rejectWithValue}) => {
        try{
          let response= await API.fetchFavourites();
            return response.data;
        }catch(error){
            return rejectWithValue(error.response.data)
        }
    }
 )


 // category Breakdown


 export const getThoughtStats =createAsyncThunk(
    "thoughts/getStats", 
    async(_, {rejectWithValue}) => {

        try{
            let response = await API.getStats(); 

            return response.data
        }catch(error){
            return rejectWithValue(error.response.data)
        }
    }
 )


 // initIal state 


let initialState = {
    thoughts:[],
    stats:null,
    currentThoughts:null,
    loading:false,
    error:null,
    filters:{
        search:'',
        category:"",
        tag:"",
        isFavourite:''

    },
  
}


// slice 

 const ThoughtSlice = createSlice({
    name:"thoughts",
    initialState,
    reducers:{
        setFilters: (state, action) => {
            state.filters = {...state.filters, ...action.payload}
        },
        clearFilters:(state) => {
            state.filters = initialState.filters
        },
        clearError:(state)=>{
            state.error = null
        }
    },
    extraReducers:(builder) => {     // this extra reducer we have use like async need is ther means like api depedency
 
        builder
        .addCase(getThoughts.pending, (state) => {
          
            state.loading =true;
            state.error = null;
        })
        .addCase(getThoughts.fulfilled, (state, action)=>{
            // console.log(action.payload.data)
            state.loading = false;
            state.thoughts = action.payload.data;
        })
       
        .addCase(getThoughts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          
        })

        // create Thoughts
        .addCase( createNewThought.pending , (state) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(createNewThought.fulfilled, (state,action)=> {
            state.loading = false;
            state.thoughts.unshift(action.payload.data);
        })
        .addCase(createNewThought.rejected , (state,action) => {
            state.loading=false;
            state.error = action.payload;
        })

        // update thought
        .addCase(updateExistingThought.fulfilled, (state,action) => {
            let index = state.thoughts.findIndex(
                (thought) => thought._id == action.payload.data._id
            )

            if(index != -1){
                state.thoughts[index] = action.payload.data
            }
        })

        // delete thought
        .addCase(removeThought.fulfilled, (state,action) => {
            state.thoughts = state.thoughts.filter((t)=> t._id !== action.payload )
        })

        // toggle favourite
        .addCase(toggleThoughtFavourite.fulfilled, (state,action) => {
            let index = state.thoughts.findIndex(
                thought => thought._id == action.payload.data._id 
            )

            if(index !== -1){
                state.thoughts[index]= action.payload.data
            }
        })


          // getFavouite favourite
        .addCase(getFavouriteThoughts.fulfilled, (state,action) => {
            state.thoughts = action.payload.data;
        })

        // category break down

     .addCase(getThoughtStats.fulfilled, (state, action) => {
        state.stats = action.payload.data;
        state.loading = false;
        })


 


    }
 })

 export const {setFilters,clearFilters,clearError} = ThoughtSlice.actions;
 export default ThoughtSlice.reducer