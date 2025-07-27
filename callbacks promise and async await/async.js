// async function hello() {
//   console.log("hello");
// }

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("api of facebook user data ");
      resolve(200);
    }, 5000);
  });
}

async function fetchapi (){
    await api ();
    await api ();
}

// console.log("hellooooooooooooooooooo")