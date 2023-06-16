const num=document.getElementById("num");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const reset=document.getElementById("reset");

plus.addEventListener("click",function(){
    let n=Number(num.textContent);
    n+=1;
    num.textContent=n;
})
minus.addEventListener("click",function(){
    let n=Number(num.textContent);
    n-=1;
    num.textContent=n;
})
reset.addEventListener("click",function(){
    num.textContent=0;
})
