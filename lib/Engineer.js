// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// the Engineer class
class Engineer extends Employee{
    constructor(name, Id , email, github){
        super(name, Id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }

}

module.exports = Engineer;