let countEL = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment(){
    count+=1
    countEL.textContent =count
}

function save(){
    let saveCount = count+ " - ";
    saveEl.textContent += saveCount; 
    countEL.textContent = 0;
    count = 0;

}