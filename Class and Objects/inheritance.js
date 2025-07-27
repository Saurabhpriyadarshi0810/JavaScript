class Person {
  constructor(fname) {
    this.species = "homo sapiens";
    fullname = this.fname;
  }
  Eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  Work() {
    console.log("do nothing");
  }
}
class Engineer extends Person {
    constructor(branch,fname){
        super(fname);// invoke parent constractor
        this.branch = branch
    }
  work() {
    console.log("solve problem, and make new things");
  }
}
class Doctor extends Person {
  work() {
    console.log("treat peoples");
  }
}

let engobj1 = new Engineer("CSE","saurabh");
// let doc = new Doctor();
// let p = new Person();
