const mongoose = require('mongoose');
const express = require("express");
// const { MongoClient } = require("mongodb");

const URI = "mongodb+srv://NamasteNodeJs:TyC04SJFdhZfxH6Z@namastenodejs.exkc5xt.mongodb.net/SohamDb";
const app = express();
const port = 8000;


const connectDb = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("db connection success");
    }
    catch(err){
        console.log(err.message);
    }
}

app.get("/", (req, res)=>{
    res.send("hello");
});

app.listen(port, ()=>{
    connectDb();
    console.log(`server listen at port ${port}`);
});



// // conection url
// const client = new MongoClient(URI);

// // database name
// const dbname = "HelloWorld";

// async function main() {

//     try {
//         // Use connect method to connect to the server
//         await client.connect();
//         console.log("connect succesfully to the server");

//         const db = client.db(dbname);
//         const collection = db.collection("user");


//         // the following code examples can be pasted here...
//         // CRUD → create read upadate delete

//         // insert a product
//         // await collection.insertOne({
//         //     name : "Baksir Das",
//         //     age : 47,
//         //     email : "baksi@gmail.com",
//         //     user_name : "baksi007"
//         // });

//         // insertMany
//         let data1 = {
//             name: "Kumari Roy",
//             age: 45,
//             email: "royKumary@gmail.com",
//             user_name: "kumar_iii"
//         };
//         let data2 = {
//             name: "Kumar Mama",
//             age: 35,
//             email: "mamaKumar@gmail.com",
//             user_name: "kumar_mama"
//         };
//         await collection.insertMany([data1, data2]);

//         // update the age of a particular user_name
//         await collection.updateOne(
//             { user_name: "rutu_13" },
//             { $set: { age: 59 } }
//         );
//         // find the collection which have user_name is "rutu_13"
//         let find1 = await collection.findOne({ user_name: "rutu_13" });
//         // find collection which having age greater than 40
//         let find2 = await collection.find({ age: { $gt: 40 } }).toArray();    // find() returns → cursor, that need to make array → toArray()
//         //comparison operators
//         // collection.find({age : {$gt : 50}}).toArray()
//         // collection.find({age : {$lt : 70}}).toArray()
//         // collection.find({age : {$gte : 70}}).toArray()


//         // age > 40 OR name is "Aman"
//         // await collection.find({
//         //     $or : [
//         //         {age : {$gt : 40}},
//         //         {name : "Aman"}
//         //     ]
//         // }).toArray();



//         // Name starts with "R"
//         // await collection.find({
//         //     name : {$regex : /^R/}     // "^" means starts of the string and $regex for pattern matching
//         // }).toArray();



//         // (age > 40 AND age <= 70) OR email ends with gmail.com
//         // await collection.find({
//         //     $or : [
//         //         {age : {$gt : 40, $lte : 70}},
//         //         {email : {$regex : /gmail\.com$/}}        // "$" means ends with that string
//         //     ]
//         // }).toArray();




//         // 1) Find all users older than 25.
//         // 2) Return only their name and age(exclude _id and email).
//         // 3) Sort by age descending.
//         // 4) Limit to top 2 oldest users.

//         // await collection
//         // .find(
//         //     {age : {$gt : 25}},
//         //     {projection : {name : 1, age : 1, _id : 0, email : 0}}
//         // )
//         // .sort({age : -1})
//         // .limit(2)
//         // .toArray()




//         // find all collections
//         let findResult = await collection.find({}).toArray();
//         console.log('Found documents =>', findResult);
//         console.log(`ruturaj =>`, find1);
//         console.log(`age finding =>`, find2);
//     }
//     catch (err) {
//         console.error(err.message);
//     }
//     finally {
//         await client.close()
//     }

//     return "done";
// }

// main();