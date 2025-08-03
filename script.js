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
