const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var inVal = true;

var loginType = "";
const employeesHtml = [];
const employeeType = ["Manager", "Engineer", "Intern"];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function askQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is the employee type?",
        choices: employeeType,
        default:employeeType[0],
        name: "value",
      },
    ])
    .then((response) => {
      loginType = response.value.toLowerCase();
      if (loginType === "manager") {
        manager();
      } else if (loginType === "engineer") {
        engineer();
      } else if (loginType === "intern") {
        intern();
      }
    });
}

askQuestion();

function askForInput() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Do you want to enter another employee?",
        default: false,
        name: "value",
      },
    ])
    .then((response) => {
      inVal = response.value;
      console.log(inVal);
      if (!inVal) {
        const renderHtml = render(employeesHtml);
        //console.log(renderHtml);
        if( !fs.existsSync(OUTPUT_DIR)){
          fs.mkdir(OUTPUT_DIR, { recursive: true }, (err) => {
            if (err) throw err;
          });
              fs.writeFileSync(outputPath, renderHtml);
      }else {
        fs.writeFileSync(outputPath, renderHtml);
      }
        
      } else {
        askQuestion();
      }
    });
}

function manager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your user name?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your Id?",
        name: "Id",
      },
      {
        type: "input",
        message: "What is your Email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your office Number?",
        name: "office",
      },
    ])
    .then((response) => {
      const newManager = new Manager(
        response.username,
        response.Id,
        response.email,
        response.office
      );

      employeesHtml.push(newManager);
      askForInput();
    });
}

function engineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your user name?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your Id?",
        name: "Id",
      },
      {
        type: "input",
        message: "What is your Email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your github name?",
        name: "github",
      },
    ])
    .then((response) => {
      const newEngineer = new Engineer(
        response.username,
        response.Id,
        response.email,
        response.github
      );
      employeesHtml.push(newEngineer);
      askForInput();
    });
}

function intern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your user name?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your Id?",
        name: "Id",
      },
      {
        type: "input",
        message: "What is your Email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your school?",
        name: "school",
      },
    ])
    .then((response) => {
      const newIntern = new Intern(
        response.username,
        response.Id,
        response.email,
        response.school
      );

      employeesHtml.push(newIntern);
      askForInput();
    });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
