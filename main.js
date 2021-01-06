const o_b = document.querySelector("#o_b");
const c_b = document.querySelector("#c_b");
const c = document.querySelector("#c");
const p = document.querySelector("#p");
const Seven = document.querySelector("#Seven");
const Eight = document.querySelector("#Eight");
const Nine = document.querySelector("#Nine");
const X = document.querySelector("#X");
const Four = document.querySelector("#Four");
const Five = document.querySelector("#Five");
const Six = document.querySelector("#Six");
const Sub = document.querySelector("#Sub");
const One = document.querySelector("#One");
const Two = document.querySelector("#Two");
const Three = document.querySelector("#Three");
const Add = document.querySelector("#Add");
const Zero = document.querySelector("#Zero");
const Dot = document.querySelector("#Dot");
const Divide = document.querySelector("#Divide");
const Equal = document.querySelector("#Equal");
const P = document.querySelector("p");
const del = document.querySelector("#del");
let storage = "";

let buttons = document.querySelectorAll("button");
let exp = "";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === c.innerText) {
      P.innerText = "";
      storage = "";
    } else if (e.target.innerText === del.innerText) {
      let lenght = storage.length;
      let slice = storage.slice(0, lenght - 1);
      P.innerText = slice;
      storage = slice;
    }else if(e.target.innerText === Equal.innerText){
    let len = P.length;
    let result = P[len-1];
    P.innerText = eval(P.innerText);
    }else {
      P.innerText += e.target.innerText;
      storage += e.target.innerText;
  }
});
})