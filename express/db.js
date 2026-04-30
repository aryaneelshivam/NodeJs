//npm init -y
//npm install mongoose
//npm install -g nodemon

const mongoose = require("mongoose");

try{
    mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
    console.log("Mongoose Connected")
}
catch(err){
    console.log(err)
}

const studentSchema = new mongoose.Schema({
    name: {type:String, required:true},
    course: String,
    age: Number,
    marks: Number
});

const Student = mongoose.model("Student", studentSchema);

async function createStudent(){
    const stu = new Student({
        name:"Ram",
        course:"Btech",
        age:21,
        marks:77
    });
    const result = await stu.save();
    console.log("Created:", result);
}

async function getStudents(){
    const students = await Student.find();
    console.log("Read Document:",students);
}


async function updateStudent(id){
    const student = await Student.findByIdAndUpdate(id,
        {marks: 100},
        {new: true}
    );
    console.log("Updated Document:", student);
}

async function deleteStudent(id){
    const result = await Student.findByIdAndDelete(id);
    console.log("Deleted Document:", result);
}


createStudent();
//getStudents();
//updateStudent('69eef6a9e7bfb55b8adb1186');
//deleteStudent('69eef6a9e7bfb55b8adb1186');