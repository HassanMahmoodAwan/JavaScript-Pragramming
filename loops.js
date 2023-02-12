"use strict";


let courses = [
    "HTML",
    "CSS",
    "Javascript",
    "TaiwindCss",
    "Bootstrap",
    "GitHub",
    "ReactJs",
    "Advance ReactJs",
    "NextJs",
    "RestApi",
    "Python",
    "Python OOP",
    "Django",
    "MongoDB",
    "MySql",
    "Sql-Server",
    "FireBase",
    "Api Handling",
    "Postman",
    "Docker",
    "TypeScript",
    "Python Automation",
    "DSA",
    "UI/UX-Figma",
    "MeterialUI",
    "React-Native",
    "AI/ML",
];

let length = courses.length;
let Skills = "";

// Functions
let sum_skill = (items, index, arr) => {
    Skills += items + ", ";
};
let Sum_skills = (i) => {
    Skills += courses[i] + ", ";
};

// For Loops
for (i = 0; i < length; i++) {
    Sum_skills(i);
}
// console.log(Skills, "\n");
Skills = "";
// For each loop
courses.forEach(sum_skill);
console.log(Skills);
Skills = "";
// console.log("\n");

// For In Loop
for (let y in courses) {
    Sum_skills(y);
}
console.log(Skills);
Skills = "";
// console.log("\n");

// For of loop
let z;
for (z of courses) {
    Skills += z + ", ";
}
// console.log(Skills);


// While loops

// while(1){
// console.log("hello ");
// } // will continue till true.


let count = 0;
while (count < length) {
    console.log(courses[count] + " ");
    count++;
}

do {
    console.log(courses[count] + " ");
    count++;
} while (count > length);