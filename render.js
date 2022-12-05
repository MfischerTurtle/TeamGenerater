const fs = require("fs")
const path = require("path")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")

let teamMembers = ""


// Making the different employee roles
const makeManager = manager => {
    let manName = manager.getName()
    let manRole = manager.getRole()
    let manID = manager.getId()
    let manEmail = manager.getEmail()
    let manNum = manager.getOfficeNumber()

    let managerHtml = `<div class="card employee-card">
    <div class="card-header bg-danger">
        <h2 class="card-title">${manName}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manRole}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manID}</li>
            <li class="list-group-item">Email: <a href="mailto:${manEmail}">${manEmail}</a></li>
            <li class="list-group-item">Office number: ${manNum}</li>
        </ul>
    </div>`
    
    teamMembers = teamMembers + managerHtml;
    
};

const makeIntern = intern => {
    let intName = intern.getName()
    let intRole = intern.getRole()
    let intID = intern.getId()
    let intEmail = intern.getEmail()
    let intSchool = intern.getSchool()
    let internHtml =`<div class="card employee-card">
    <div class="card-header bg-info">
        <h2 class="card-title">${intName}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intRole}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intID}</li>
            <li class="list-group-item">Email: <a href="mailto:${intEmail}">${intEmail}</a></li>
            <li class="list-group-item">School: ${intSchool}</li>
        </ul>
    </div>
</div>`

    teamMembers = teamMembers + internHtml;
};

const makeEngineer = engineer => {
    let engName = engineer.getName()
    let engRole = engineer.getRole()
    let engID =  engineer.getId()
    let engEmail = engineer.getEmail()
    let engGit = engineer.getGithub()
    
    let engineerHtml = `<div class="card employee-card">
    <div class="card-header bg-success">
        <h2 class="card-title">${engName}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engRole}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engID}</li>
            <li class="list-group-item">Email: <a href="mailto:${engEmail}">${engEmail}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engGit}" target="_blank"
                    rel="noopener noreferrer">${engGit}</a></li>
        </ul>
    </div>
</div>`

teamMembers = teamMembers + engineerHtml;
};


// Functions to create each new Constructor
function createManager(name, id, email, officeNumber) {
    const manager = new Manager(name, id, email, officeNumber)
    makeManager(manager)
}

function createIntern(name, id, email, school) {
    const intern = new Intern(name, id, email, school)
    makeIntern(intern)
}

function createEngineer(name, id, email, github) {
    const engineer = new Engineer(name, id, email, github)
    makeEngineer(engineer)
}



function renderMain() {
    let mainHtml = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-primary">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                ${teamMembers}
                </div>
            </div>
        </div>
    </body>
    
    </html>`
    let file = path.join(__dirname, 'finished', "/cards.html");
    fs.writeFile(file, mainHtml, function (err) {
        if (err) {
            throw new Error(err)
        }
        console.log('done writing file')
    })
}

module.exports = {
    createManager: createManager,
    createEngineer: createEngineer,
    createIntern: createIntern,
    renderMain: renderMain
}