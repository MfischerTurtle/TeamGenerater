const fs = require("fs");
const inquirer = require("inquirer");
const renderFile = require("./render");
const makeManager = renderFile.createManager;
const makeEngineer = renderFile.createEngineer;
const makeIntern = renderFile.createIntern;
const makeHTML = renderFile.renderMain;

function inputQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "number",
        message: "What is your ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then(function ({ name, id, email, role }) {
      switch (role) {
        case "Engineer":
          inquirer
            .prompt({
              type: "input",
              message: "What is your GitHub username?",
              name: "github",
            })
            .then(function ({ github }) {
              makeEngineer(name, id, email, github);
              addMoreMembers();
            });
          break;
        case "Intern":
          inquirer
            .prompt({
              type: "input",
              message: "What school do you attend?",
              name: "school",
            })
            .then(function ({ school }) {
              makeIntern(name, id, email, school);
              addMoreMembers();
            });
          break;
        case "Manager":
          inquirer
            .prompt({
              type: "input",
              message: "What is your Office Number?",
              name: "officeNumber",
            })
            .then(function ({ officeNumber }) {
              makeManager(name, id, email, officeNumber);
              addMoreMembers();
            });
          break;
      }
    });
}

function addMoreMembers() {
  inquirer
    .prompt({
      type: "confirm",
      message: "Add more Team Members?",
      name: "addMoreMembers",
    })
    .then(function ({ addMoreMembers }) {
      console.log("add More members", addMoreMembers);
      if (addMoreMembers) {
        inputQuestions();
      } else {
        makeHTML();
      }
    })
}

inputQuestions();
