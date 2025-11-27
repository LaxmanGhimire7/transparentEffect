document.addEventListener("mousemove", (dets) => {
  document.body.style.setProperty("--x", dets.clientX + "px");
  document.body.style.setProperty("--y", dets.clientY + "px");
});

const h1 = document.querySelector("h1");
const text = h1.innerText;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;

function newText() {
  const str = text.split("").map((char, idx) => {

    if(idx < iteration){
        return char;
    }
      return characters.split("")[Math.floor(Math.random() * 52)];
    })
    .join("");

  h1.innerHTML = str;
  iteration += 0.2
}

setInterval(newText, 30)