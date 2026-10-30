const screens = [...document.querySelectorAll(".screen")];
function showScreen(id) {
  screens.forEach(s => s.classList.toggle("active", s.id === id));
  window.scrollTo({top:0,behavior:"smooth"});
}
document.getElementById("openLetter").addEventListener("click",()=>showScreen("letter"));
document.getElementById("toMemories").addEventListener("click",()=>showScreen("memories"));
document.getElementById("toInvite").addEventListener("click",()=>showScreen("invite"));
document.getElementById("yesBtn").addEventListener("click",()=>{
  showScreen("final");
  makeHearts();
});
document.getElementById("replay").addEventListener("click",()=>showScreen("intro"));

const noBtn = document.getElementById("noBtn");
const noNote = document.getElementById("noNote");
let noCount = 0;
const messages = ["¿Segura? 🥺","Dale otra oportunidad…","Ese botón está dudando 👀","Creo que querías decir que sí 💗"];
function moveNoButton(){
  noCount++;
  noNote.textContent = messages[Math.min(noCount-1,messages.length-1)];
  const wrap = document.querySelector(".choice-wrap");
  const maxX = Math.max(10, wrap.clientWidth/2-75);
  const maxY = 80;
  noBtn.style.transform = `translate(${(Math.random()*2-1)*maxX}px, ${(Math.random()*2-1)*maxY}px)`;
}
noBtn.addEventListener("mouseenter",moveNoButton);
noBtn.addEventListener("click",moveNoButton);
noBtn.addEventListener("touchstart",(e)=>{e.preventDefault();moveNoButton();},{passive:false});

function makeHearts(){
  const box=document.querySelector(".confetti");
  box.innerHTML="";
  for(let i=0;i<24;i++){
    const h=document.createElement("span");
    h.textContent=Math.random()>.5?"♥":"♡";
    h.style.cssText=`position:absolute;left:${Math.random()*100}%;top:${Math.random()*100}%;font-size:${12+Math.random()*18}px;color:${Math.random()>.5?"#c58b8b":"#dfb7ad"};opacity:.65;animation:fadeIn ${.5+Math.random()}s ease both`;
    box.appendChild(h);
  }
}
