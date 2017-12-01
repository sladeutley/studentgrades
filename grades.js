// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log() to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?
console.log("hello");

let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

let aGrade = 0;
let bGrade = 0;
let cGrade = 0;
let dGrade = 0;
let fGrade = 0;
let lowestGrade = Math.min(...scores);
let highestGrade = Math.max(...scores);


// function scoreGrades (scores) {
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] < 60) {
                fGrade++;
    }   else if (scores[i] < 70) {
                dGrade++;
    }   else if (scores[i] < 80) {
                cGrade++;
    }   else if (scores[i] < 90) {
                bGrade++;
    }   else {
                aGrade++;
        }
    };
// };

function getGrades (scores) {
        console.log("There are " + fGrade + "F's");
        console.log("There are " + dGrade + "D's");
        console.log("There are " + cGrade + "C's");
        console.log("There are " + bGrade + "B's");
        console.log("There are " + aGrade + "A's");
        console.log(lowestGrade + " is the lowest grade.");
        console.log(highestGrade + " is the heighest grade.")
}

getGrades(scores);


