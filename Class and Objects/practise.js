let Data = "Secret";

class User{
    constructor(fname,branch){
         this.fname = fname ;
         this.branch = branch;
    }
    viewData(){
        console.log("data is ",Data);
    }
}



class Admin extends User{
    constructor(name,branch){
        super(name,branch);
    }
    editData(){
        console.log("edit data");
    }
}

let Admin1 = new Admin("admin","cse")










let student1 = new User("saurabh","cse");
let student2 = new User("archi","cse");
let student3 = new User("angel","cse");
let teacher1 = new User("pratyush","cse");
let teacher2 = new User("shyan","cse");