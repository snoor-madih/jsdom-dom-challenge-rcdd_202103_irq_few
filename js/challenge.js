let counter =document.getElementById("counter");
let minus =document.getElementById("minus");
let plus =document.getElementById("plus");
let stop =document.getElementById("pause");
// let counter =document.getElementById("counter");
setTimeout(start, 5000);
let i=0;
function start() {
  setInterval(increase, 1000);
}

function increase() {
 if (i < 500) {
      i++;
      counter.innerText = i;
      plus.addEventListner("click",()=>
{
  counter.innerText=parseInt(counter.innerText)+1;
})
    }
}

stop.addEventListner("click",function()
{
clearInterval(counter);
return;
});

