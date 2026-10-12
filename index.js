let x=Number(document.getElementById("randomnum").textContent);

document.getElementById("rollbtn").onclick=function(){
    x=(Math.random()*100);
    x=Math.floor(x) + 1;
  
    document.getElementById("randomnum").textContent=x;
}