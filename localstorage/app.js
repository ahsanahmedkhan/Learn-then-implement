
const userInfo = [

    "Ahsan", 
    "Software Engineer",
    "Full Stack Web Application Developer",
    "Karachi",
    "$8000",
    "<strong>Skills :</strong>",
    "Html5 Css3 JavaScript MaterialUI Sql ES6 React  <br />  Redux React native node.js Express Mongodb Python"
    
];

let info = userInfo.length

let ul = "<ul>";

userInfo.forEach(myfunction);
    ul += "</ul>";

function myfunction(value){
    ul += "<li>" + value + "</li>"
}

let input = prompt();
userInfo.push(input);


document.getElementById("info").innerHTML = ul;


const employee = {

    fullName: "Ahsan Ahmed khan",
    Designation: "Web Application Developer",
    residence: "Karachi",
    CellPhone: "0000923133489696"

};

document.getElementById("userName").innerHTML = employee.fullName;
document.getElementById('userpost').innerHTML = employee.Designation;

let learning = "JavaScript basic to advance";
let output = learning.length;

document.getElementById("len").innerHTML = output;