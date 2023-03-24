let btn = document.getElementById("button");
let canva = document.getElementById("canvas");

const rancolor = () =>{
    let val = "123456789ABCDEF";
    let cons = "#"
    for(i=0; i<6; i++){
        cons = cons + val[Math.floor(Math.random()*16)];
    }
    return cons;
}

// console.log(rancolor());

function changerancolor(){
    canva.style.backgroundColor = rancolor();
};

btn.addEventListener("click", changerancolor);