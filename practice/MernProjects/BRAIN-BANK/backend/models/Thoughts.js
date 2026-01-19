import mongoose from "mongoose";

const thoughtSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,'Please add a title'],
            trim:true,
            maxlength:[100,'Title cannot be more than 100 characters']
        },
        content :{
            type:String,
            required:[true,'please add content'],
            trim:true,
            maxlength:[1000,'Content cannot be more than 1000 chars']
    },
    category:{
        type:String,
        required:[true, 'Please select a category'],
        enum:['Idea','Goal','Quote','Reminder','Learning','Random'],
       default:"Random"
    },
    tags:{
        type:[String],
        default:[]
    },
    isFavourite:{
        type:Boolean,
        default:false
    }  
},{
    timestamps:true
}
);

const Thought = mongoose.model("Thought", thoughtSchema);

export default Thought;