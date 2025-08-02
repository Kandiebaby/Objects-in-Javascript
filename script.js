let student = {
    name: "Kadi",
    age: 33,
    enrolled: true,
    courses: "math, english,chemistry,biology",
    greet: function() {
        console.log("Hello, my name is " + this.name + " I am " + this.age + "years old and I am enrolled in the following courses: " + this.courses);
        return true;
    }

};

console.log(student.name);
console.log(student.age);
