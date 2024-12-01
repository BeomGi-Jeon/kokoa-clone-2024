const Forms=document.getElementById('form');

var i=0;

const d = new Date();
const Hours=String(d.getHours());
const Minutes=String(d.getMinutes()).padStart(2,"0");
const Month=String(d.getMonth()+1);
const Day=String(d.getDate())
const Years=String(d.getFullYear()); 
const weeks=['일','월','화','수','목','금','토']    
var week=weeks[d.getDay()];
setInterval(clock,1000);


Forms.addEventListener('submit',(event)=>
{
    event.preventDefault();//새로고침 막기
    const Input=document.getElementById('input');
    const pos=document.getElementById('chatting_position');

    if(i==0){
    document.getElementById('when').innerHTML+=
        `<div class="chat__timestamp">
        ${Years}년 ${Month}월 ${Day}일 ${week}요일
      </div>`
    i++;
    }

    

    const value=Input.value;
    Input.value='';

    pos.innerHTML+=`<div id="" class="message-row message-row--own"><div class="message-row__content"><div class="message__info"><span class="message__bubble">${value}</span><span class="message__time">${Hours}:${Minutes}</span></div></div></div>`
})