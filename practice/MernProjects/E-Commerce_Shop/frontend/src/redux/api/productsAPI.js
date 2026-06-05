import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsAPI = createApi({
    reducerPath:"productsAPI",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/v1/'}),
    endpoints: (builder) => ({
        getproducts: builder.query({
            query:(params) =>({
                url:"products"
            }
                
        )
        }),

        getproductDetails: builder.query({
            query:(id) => `/products/${id}`
        })


    })
}) 

export const {useGetproductsQuery, useGetproductDetailsQuery} = productsAPI;