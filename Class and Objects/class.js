// class cars {
//   start() {
//     console.log("start");
//   }

//   stop() {
//     console.log("stop");
//   }
//   setbrand(brand) {
//     this.brandname = brand;
//   }
// }

// let aulto = new cars();
// aulto.setbrand("aulto");

// let scarpio = new cars();
// let ecosport = new cars();
// let punch = new cars();

class cars {
  constructor(brand, milege) {
    console.log("new",brand,"is creating");
    this.brand = brand;
    this.milege = milege;
  }
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
}

let aulto = new cars("auto",45);
let bus = new cars("bus",45);
let train = new cars("train",45);
let plane = new cars("plane",45);
