let student = {
    name: "Kadi",
    age: 33,
    enrolled: true,
    courses: "math, english,chemistry,biology",
    displayInfo: function() {
        return "Name: " + this.name + ", Age: " + this.age + ", Enrolled: " + (this.enrolled ? "True" : "False") + ", Courses: " + this.courses;        
    },

    greet: function() {
        console.log("Hello, my name is " + this.name + ". I am " + this.age + "years old and I am enrolled in the following courses: " + this.courses);
        return true;
    }

};

console.log(student.name);
console.log(student.age);
console.log(student.displayInfo());
student.greet();


let jsonString = '{"name":"Kadi","age":33,"enrolled":true,"courses":["Math","English","Chemistry","Biology"]}';
console.log(jsonString);
let jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name, jsonObj.age, jsonObj.enrolled); 
jsonObj.courses.forEach(course => console.log(course));

let {name, courses } = student;
console.log(name);
console.log(courses);
let scores = [85, 92, 78, 90];
let [score1, score2] = scores;
console.log(score1);
console.log(score2);



let originalObj = { student };
let clonedObj = { ...student };
console.log("Cloned Object:");
console.log(clonedObj);
let studentWithGraduation = { ...clonedObj, graduationYear: 2025 };
console.log("Student with Graduation Year:");
console.log(studentWithGraduation);

 courses = { courses: ["math", "english", "chemistry", "biology"]};
let newcourses = { newcourses: ["information technology", "physics"]};
let combinedCourses = [...courses.courses, ...newcourses.newcourses];

console.log(courses);
console.log(newcourses);
console.log(combinedCourses);
