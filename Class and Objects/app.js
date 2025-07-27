const details = {
    fullname: "Saurabh",
    roll: 35,
    print_marks: function () {
        console.log("marks =", this.roll);
    },
};

const employee ={
    caltax(){
        console.log("tax is 25%");
    }
}

const karan ={
    salary : 60000,
    caltax(){
        console.log("tax rate is 20%");
    }
};
const karan2 ={
    salary : 600,
};
const karan3 ={
    salary : 6000,
};

karan.__proto__ = employee ;

// .__proto__ is used to prototype.
// if the object and prototype have a function with same name the function of object wins and being used when called 