import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:4000/api'

})

// Thought API

export const fetchThoughts = (params) => API.get('/thoughts', {params});
export const fetchThoughtsById = (id) => API.get(`/thoughts/${id}`);
export const createThought = (thoughtData) =>API.post('/thoughts', thoughtData);
export const updateThought = (id,thoughtData) =>API.put(`/thoughts/${id}`, thoughtData);
export const deleteThought = (id) =>API.delete(`/thoughts/${id}`);
export const toggleFavourite = (id) =>API.patch(`/thoughts/${id}/favourite`); 
export const fetchFavourites = (id) =>API.get(`/thoughts/favourites/all`);
// export const categoryBreakdown = (params) =>API.get(`/thoughts/categoryBreakdown`, {params});
export const getStats = () =>API.get(`/thoughts/stats/summary`, );