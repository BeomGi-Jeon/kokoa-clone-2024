const t=document.querySelector("#Jstime")
function clock(){
    const d = new Date();
    const Hours=String(d.getHours()).padStart(2,"0");
    const Minutes=String(d.getMinutes()).padStart(2,"0");

    t.innerText=`${Hours}:${Minutes}`               
}

clock();
setInterval(clock,1000);