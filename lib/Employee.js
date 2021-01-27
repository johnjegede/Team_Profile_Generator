// TODO: Write code to define and export the Employee class

class Employee{
    constructor(name, Id , email){
        this.Name = name;
        this.Id = Id;
        this.Email = email;
    }
    getName(){
        return this.Name;
    }
    
    getId(){
        return this.Id;
    }

    getEmail(){
        return this.Email;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;