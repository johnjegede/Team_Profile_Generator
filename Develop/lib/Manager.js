// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, Id , email, officeNumber){
        super(name, Id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Engineer";
    }

}