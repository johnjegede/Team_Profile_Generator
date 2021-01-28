// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// the intern class
class Intern extends Employee{
    constructor(name, Id , email, school){
        super(name, Id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }

}

module.exports = Intern;