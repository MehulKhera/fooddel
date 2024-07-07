import mongoose from "mongoose";

const dbURL='mongodb+srv://21ucs127:mehul123.khera04@cluster0.cb6pgh0.mongodb.net/fooddel';

connectDB()
.then(()=>{
    console.log(`Pinged to DB! Connected Successfully!`);
})
.catch((err)=>{
    console.log(`Database Error- ${err.message}! Restart`);
});

 
export default async function connectDB(){
    await mongoose.connect(dbURL);
}