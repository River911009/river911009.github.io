if("serviceWorker" in navigator){
  window.addEventListener("load",()=>{
    navigator.serviceWorker
    .register("serviceWorker.js")
    .then(reg=>console.log("service worker registered"))
    .catch(err=>console.log("service worker not registered",err))
  });
}

function openNav(){
  document.getElementById("NavPage").style.width="100%";
  document.getElementById("controlBar").style.backgroundColor="rgba(255,255,255,1.0)";
  document.getElementById("controlBar").style.height="0%";
  document.getElementById("controlBar").style.backgroundColor="rgba(229,229,234,0.0)";
  document.getElementById("MainPage").style.left="100%";
}

function closeNav(){
  document.getElementById("NavPage").style.width="0%";
  document.getElementById("controlBar").style.backgroundColor="rgba(255,255,255,0.0)";
  document.getElementById("controlBar").style.height="10%";
  document.getElementById("controlBar").style.backgroundColor="rgba(229,229,234,1.0)";
  document.getElementById("MainPage").style.left="0%";
}

function goto(url){
  console.log(url)
}

function refreshClock(){
  const time=new Date();
  document.getElementById("clock").innerHTML=time.toLocaleTimeString('en',{hour:"numeric",minute:"2-digit"});
}

setInterval(
  refreshClock,
  60000
);

window.addEventListener("DOMContentLoaded",refreshClock);
