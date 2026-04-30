const {mongoClient, objectId, MongoClient} = require ('mongodb');

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

const dbName  = "schoolDB";

async function run(){
    await client.connect();
    console.log("connected successfully")
}

const db = client.db(dbName);
const students = db.collections("newStudents");

const insertResult = await students.insertOne({
    name: "Ayan",
    age: 20,
    branch: "Computer Science",
    
});

console.log(`Inserted document with ID: ${insertResult.insertedId}`);

const data = await students.find().toArray();
console.log("read content", data);

const updateResult = await students.updateOne({_id:insertResult.insertedId},{$set:{age:21}})
console.log("updated content", updateResult);

const deleteResult = await students.deleteOne({_id:insertResult.insertedId})
console.log("deleted content", deleteResult);
q