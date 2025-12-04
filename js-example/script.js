console.log("hello world");
let s = "hi kitty cat";

let btn = document.querySelector("#changeBtn");
btn.addEventListener("click", function (){
   

console.log (s.toLocaleUpperCase());
let heading = document.querySelector("h1");
heading.style.backgroundColor = "red"
let heading2 = document.querySelector("h2");
heading2.style.fontFamily = "Verdana";

let skills = document.querySelector("#skills");
skills.style.border = "1px solid black";

let expertSkill = document.querySelector(".expert");
expertSkill.style.backgroundColor = "yellow";

let allExpertSkills=document.querySelectorAll("expert");
console.log(allExpertSkills);

for (let skill of allExpertSkills){
    skill.style.color = "red";
}

let link = document.querySelector("#search");
link.href = "https://www.bing.com";
link.innerText = "Bing";

})
