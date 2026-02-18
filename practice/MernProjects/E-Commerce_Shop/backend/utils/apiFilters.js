import { json } from "express"

class APIFilters{
    constructor(query,queryStr){
        this.query = query,
        this.queryStr = queryStr
    }

    search(){

       let keyword = this.queryStr.keyword ? {
        name :{
            $regex :this.queryStr.keyword,
            $options:"i"
        }
       }:{}

       this.query = this.query.find({...keyword})
       return this
    }


    filter(){
        let queryCopy = {...this.queryStr}
        
        let filedToRemove = ["keyword","page","limit"];

        filedToRemove.forEach((el) => delete queryCopy[el])
        console.log(queryCopy)

        let queryStr = JSON.stringify(queryCopy)

         queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);

        const parsedQuery = JSON.parse(queryStr);

        this.query = this.query.find(parsedQuery);

        return this;



    }

    pagination(resPerPage){

        //   let queryCopy = {...this.queryStr}

        //   console.log(queryCopy)

        //   let {page,limit} = queryCopy;
        
          let currentPage = Number(this.queryStr.page) || 1;

        //   let resPerPage = Number(limit) ||defaultLimit;
        //   resPerPage =Math.min(resPerPage, 15);

          const skip = resPerPage *(currentPage -1)
          this.query = this.query.limit(resPerPage).skip(skip);

          return this

        
    }
      
    
}

export default APIFilters;