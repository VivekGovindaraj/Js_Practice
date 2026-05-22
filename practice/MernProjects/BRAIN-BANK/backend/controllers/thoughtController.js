import Thought from "../models/Thoughts.js";
 

// get thoughts

export  const getThoughts = async(req, res) => {
    try{

        let query = {}

        // search by keyword
 
        if(req.query.search){
            query.$or = [
                {title : {$regex: req.query.search, $options:"i"}},
                {content: {$regex: req.query.search, $options:"i"}}
            ]
        }

        if(req.query.category){
            query.category = req.query.category
            
        }

        if(req.query.isFavourite){
            query.isFavourite = req.query.isFavourite ==="true";
        }


        if(req.query.tags){
            query.tags ={$in :[req.query.tags]}
        }

        const thoughts = await Thought.find(query).sort({createdAt: -1});

        res.status(200).json({ 
            success:true,
            count:thoughts.length,
            data:thoughts 
        })
    }catch(error){  
        res.status(500).json({
            success:false,
            message:  `server error` ,
            error:error.message  
        })
    }
}


// create thoughts

export const createThoughts = async (req, res) => {



    try{

        const  {title, content, category,tags} = req.body;

        // validation

        if(!title || !content){
             
            return res.status(400).json({
                success:false,
                message:'please provide title and content'
            })  
        }

        const thought =  await  Thought.create({
             title,
             content,
             category,
            tags
        })

        res.status(201).json({
            success:true,
            data:thought
        })

    }catch(error){
       res.status(500).json({
        success:false,
        message:`Server Meassage`,
        error:error.message
       })
}
}


// update thoughts

export const updateThoughts = async (req, res) => {



    try{

        const  {title, content, category,tags, isFavourite} = req.body;

        let thought = await Thought.findById(req.params.id)

        if(!thought){
            res.status(404).json({
                success:false,
                message:'Thoughts not found',
                error: error.message
            })
        }


        // update fields

        thought = await Thought.findByIdAndUpdate(
            req.params.id,
            {
                title,
                content,
                tags,
                isFavourite
            },{
                new:true  // return update document
            }
        )

        res.status(200).json({
            success:true,
            data:thought
        })

    }catch(error){
       res.status(500).json({
        success:false,
        message:`Server Meassage`,
        error:error.message
       })
}
}

// delete thoughts

export const deleteThoughts = async (req, res) => {



    try{

        // const  {title, content, category,tags, isFavourite} = req.body;

        let thought = await Thought.findById(req.params.id)

        if(!thought){
            res.status(404).json({
                success:false,
                message:'Thoughts not found',
                error: error.message
            })
        }


        // Delete fields
        
        await thought.deleteOne()

        res.status(200).json({
            success:true,
            message:"Thought deleted succesfully",
            data:{}
        })

    }catch(error){
       res.status(500).json({
        success:false,
        message:`Server Meassage`,
        error:error.message
       })
}
}


// toggle isFavourite status
// PATCH  /api/thoughts:id/isFavourite
// acces public


export const toggleFavourite = async(req,res) => {
    
    try{

        let thought = await Thought.findById(req.params.id)

        if(!thought){
            res.status(401).json({
                success:false,
                message:'Thought Not found'
            })
        }

        // isFavourite status

        thought.isFavourite = !thought.isFavourite;
        await thought.save();

        res.status(200).json({
            success:true,
            message:"isFavourite Toggled successfully",
            data:thought
        })

    }catch(error){

        res.status(500).json({
            success:false,
            message:`server message`,
            error:error.message
        })
    }
}


 // toggle getFavourite status
// PATCH  /api/thoughts:id/isFavourite
// acces public


export const getFavourites = async(req,res) => {
    
    try{

        let thoughts = await Thought.find({isFavourite:true}).sort({createdAt:-1})


        res.status(200).json({
            success:true,
            count:thoughts.length,
            data:thoughts
        })

    }catch(error){

        res.status(500).json({
            success:false,
            message:`server message`,
            error:error.message
        })
    }
}



// Category breakdoen calaculation

//get  /api/thoughts/categoryBreakdown


// export const categoryBreakdown = async(req, res) => {

//     try{

//         let thoughts = await Thought.find();  // get thought from db

//         let category = thoughts.map(thought => thought.category); // category form thoughts as a array

//         let categoryCounts  = { }  // categroru counnt object key avlue pair key is category valueiis count of category

//         category.forEach( (category) =>
//             categoryCounts[category] = (categoryCounts[category] ||0) +1  // category count
//         )

//         let totalCategory = category.length

//         let breakdown = Object.entries(categoryCounts).map(([category,count]) => ({
//             category,
//             count,
//             percent: Number(((count/totalCategory) *  100).toFixed(2))
//         }));


//         res.status(200).json({
//             success:true,
//             total:totalCategory,
//             data:breakdown

//         })




//     }catch(error){
//        res.status(500).json({
//         success:false,
//         message:`Sever Meassage`,
//         error:error.message
//        })
//     }
// }


export const getStats = async (req,res) => {

    try{

        let totalThoughts = await Thought.countDocuments(); // thoughts count

        let favouriteCount = await Thought.countDocuments({isFavourite:true});  //favourite thoughtsCount
        
           const categoryStats = await Thought.aggregate([
                    {
                        $group:{
                            _id:"$category",
                            count:{$sum:1}
                        }
                    },
                    {
                        $sort:{count:-1}
                    }
                ]);

        // get all uniquer tag
        let allTags = await Thought.distinct("tags")


        res.status(200).json({
            success:true,
            data:{
                totalThoughts,
                favouriteCount,
                categoryBreakdown:categoryStats,
                totalCategories:categoryStats.length,
                allTags:allTags,
                totalTags:allTags.length
            }
        })

    }catch(error){
         res.status(500).json({
            success:false,
            message:"Server Error",
            error:error.message,
        })
    }
}

   
    