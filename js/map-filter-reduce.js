"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//     TODO: 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let moreThan3Langs = users.filter(user => user.languages.length >= 3);

//     TODO: 3. Use .map to create an array of strings where each element is a user's email address

let emailAddresses = users.map(user => user.email);


//     TODO: 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalYearsOfExp = users.reduce((total, user) => {
    total += user.yearsOfExperience;
    // console.log("Total: ", total)
    return total;
}, 0)



let averageExp = totalYearsOfExp / users.length;


//     TODO: 5. Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce((accumulator, user) => {
    return accumulator.length > user.email.length ? accumulator : user.email;

}, '')

//     TODO: 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let instructors = users.reduce((finalStr, user, currentIndex) => {

    if (currentIndex === users.length - 1) {
        finalStr += user.name + "."
    }else {
        finalStr += user.name + ", "
    }
    return finalStr;
}, 'Your instructors are: ')

console.log(instructors);