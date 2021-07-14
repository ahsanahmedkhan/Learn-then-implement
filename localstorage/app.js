
const userInfo = [

    "Ahsan", 
    "Software Engineer",
    "Full Stack Web Application Developer",
    "Karachi",
    "$8000",
    
];

let info = userInfo.length

let ul = "<ul>";

userInfo.forEach(myfunction);
    ul += "</ul>";

function myfunction(value){
    ul += "<li>" + value + "</li>"
}

document.getElementById("info").innerHTML = ul;

const employee = {

    fullName: "Ahsan Ahmed khan",
    Designation: "Web Application Developer",
    residence: "Karachi",
    CellPhone: "0000923133489696"

};

document.getElementById("userName").innerHTML = employee.fullName;
document.getElementById('userpost').innerHTML = employee.Designation;


